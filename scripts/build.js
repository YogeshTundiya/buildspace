#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const LOG_FILE = path.join(process.cwd(), "logs", "build.log");
const STRUCTURE_FILE = path.join(process.cwd(), "build-info", "structure.json");

function getTimestamp() {
  return new Date().toISOString();
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeLog(level, message, data = {}, source = "build-script") {
  ensureDir("logs");
  const entry = `[${getTimestamp()}] [${level}] [${source}] ${message}${data && Object.keys(data).length ? "\n  Data: " + JSON.stringify(data, null, 2) : ""}`;
  fs.appendFileSync(LOG_FILE, entry + "\n");
}

function logInfo(msg, data) { writeLog("INFO", msg, data); }
function logSuccess(msg, data) { writeLog("SUCCESS", msg, data); }
function logError(msg, data) { writeLog("ERROR", msg, data); }

function scanDir(dir, pattern) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory() && entry.name !== "node_modules" && entry.name !== ".next" && entry.name !== ".git") {
      const sub = scanDir(path.join(dir, entry.name), pattern);
      results.push(...sub.map(p => entry.name + "/" + p));
    } else if (pattern.test(entry.name)) {
      results.push(entry.name);
    }
  }
  return results;
}

function updateStructureFile() {
  const structure = {
    lastUpdated: getTimestamp(),
    directories: ["app/", "components/", "sections/", "lib/", "logs/", "public/", "build-info/", "scripts/"],
    keyFiles: ["app/layout.tsx", "app/page.tsx", "app/globals.css", "package.json", "tsconfig.json", "next.config.ts"],
    configFiles: ["tsconfig.json", "next.config.ts", "postcss.config.mjs", "eslint.config.mjs"],
    components: scanDir("components", /\.tsx$/),
    sections: scanDir("sections", /\.tsx$/),
    lib: scanDir("lib", /\.(ts|js)$/),
    scripts: fs.existsSync("scripts") ? fs.readdirSync("scripts") : [],
  };
  fs.writeFileSync(STRUCTURE_FILE, JSON.stringify(structure, null, 2));
  logSuccess("Structure file generated", { file: STRUCTURE_FILE });
}

async function runBuild() {
  const start = Date.now();

  try {
    logInfo("=== Build Started ===", { cwd: process.cwd() });

    ensureDir("logs");
    ensureDir("build-info");

    updateStructureFile();

    logInfo("Running npm run lint...", {});
    execSync("npm run lint", { stdio: "inherit", cwd: process.cwd() });
    logSuccess("Lint passed", {});

    logInfo("Running npm run build...", {});
    execSync("npm run build:fast", { stdio: "inherit", cwd: process.cwd() });
    logSuccess("Build succeeded", {});

    const duration = ((Date.now() - start) / 1000).toFixed(2);
    logSuccess(`=== Build Completed in ${duration}s ===`, { duration });
    console.log(`\n✓ Build complete. Duration: ${duration}s`);
  } catch (err) {
    logError("=== Build Failed ===", { error: err.message });
    console.error(`\n✗ Build failed: ${err.message}`);
    process.exit(1);
  }
}

runBuild();