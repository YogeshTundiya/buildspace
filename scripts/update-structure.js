#!/usr/bin/env node
import fs from "fs";
import path from "path";

const STRUCTURE_FILE = path.join(process.cwd(), "build-info", "structure.json");
const LOG_FILE = path.join(process.cwd(), "logs", "build.log");

function getTimestamp() {
  return new Date().toISOString();
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeLog(message, source = "update-script") {
  ensureDir("logs");
  const entry = `[${getTimestamp()}] [SUCCESS] [${source}] ${message}`;
  fs.appendFileSync(LOG_FILE, entry + "\n");
}

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

function updateStructure() {
  ensureDir("build-info");

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
  writeLog(`Structure updated. components=${structure.components.length}, sections=${structure.sections.length}`);
  console.log("✓ Structure updated");
}

updateStructure();