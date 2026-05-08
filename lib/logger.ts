export type LogLevel = "INFO" | "WARN" | "ERROR" | "SUCCESS" | "DEBUG";

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: unknown;
  source?: string;
}

export interface ProjectStructure {
  lastUpdated: string;
  directories: string[];
  keyFiles: string[];
  configFiles: string[];
  components: string[];
  sections: string[];
  hooks: string[];
  lib: string[];
  scripts: string[];
}

export function getTimestamp(): string {
  return new Date().toISOString();
}

export function formatEntry(level: LogLevel, message: string, data?: unknown, source?: string): string {
  const ts = getTimestamp();
  const src = source ? ` [${source}]` : "";
  const base = `[${ts}] [${level}]${src} ${message}`;
  return data ? `${base}\n  Data: ${JSON.stringify(data, null, 2)}` : base;
}

export function getStructure() {
  return {
    directories: ["app/", "components/", "sections/", "lib/", "logs/", "public/", "build-info/", "scripts/"],
    keyFiles: ["app/layout.tsx", "app/page.tsx", "app/globals.css", "package.json", "tsconfig.json", "next.config.ts"],
    configFiles: ["tsconfig.json", "next.config.ts", "postcss.config.mjs", "eslint.config.mjs"],
    components: ["Button.tsx", "GlassCard.tsx", "Navbar.tsx", "SmoothScrollProvider.tsx"],
    sections: ["Hero.tsx", "Services.tsx", "Projects.tsx", "Insights.tsx", "Footer.tsx"],
    hooks: [],
    lib: ["logger.ts"],
    scripts: ["build.js", "update-structure.js"],
  };
}