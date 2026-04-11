import {
  createHighlighter,
  type BundledLanguage,
  type Highlighter,
} from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: [
        "html",
        "css",
        "typescript",
        "javascript",
        "bash",
        "json",
        "vue",
        "tsx",
        "jsx",
      ],
    });
  }
  return highlighterPromise;
}

/** Detect language from a filename or label */
export function detectLang(label: string): BundledLanguage {
  const ext = label.includes(".")
    ? label.split(".").pop()?.toLowerCase()
    : null;
  const map: Record<string, BundledLanguage> = {
    html: "html",
    htm: "html",
    ts: "typescript",
    js: "javascript",
    mjs: "javascript",
    cjs: "javascript",
    vue: "vue",
    tsx: "tsx",
    jsx: "jsx",
    css: "css",
    json: "json",
  };
  if (ext && map[ext]) return map[ext];
  const raw = label.toLowerCase();
  if (map[raw]) return map[raw];
  if (["npm", "pnpm", "yarn", "bun"].includes(raw)) return "bash";
  return "html";
}

/** File-type colour for tab dot indicators */
export function getFileColor(label: string): string {
  const ext = label.includes(".")
    ? label.split(".").pop()?.toLowerCase()
    : null;
  const colors: Record<string, string> = {
    html: "#e34c26",
    htm: "#e34c26",
    ts: "#3178c6",
    js: "#f7df1e",
    mjs: "#f7df1e",
    cjs: "#f7df1e",
    vue: "#42b883",
    tsx: "#3178c6",
    jsx: "#61dafb",
    css: "#1572b6",
    json: "#292929",
  };
  if (ext && colors[ext]) return colors[ext];
  if (["npm", "pnpm", "yarn", "bun"].includes(label.toLowerCase()))
    return "#cb3837";
  return "var(--ns-muted)";
}

/** Material-style file icon SVGs keyed by extension/language */
export function getFileIcon(label: string): string {
  const ext = label.includes(".")
    ? (label.split(".").pop()?.toLowerCase() ?? "")
    : label.toLowerCase();

  const icons: Record<string, string> = {
    html: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 3l1.8 16.1L12 22l6.2-2.9L20 3H4z" fill="#e34c26"/><path d="M12 5.5v14l4.6-2.2L18 5.5H12z" fill="#ef652a"/><path d="M8.5 8h7l-.2 2H10.7l.2 2h4.4l-.4 4.3L12 17.5l-2.9-1.2-.2-2.3h2l.1 1.1 1 .4 1-.4.1-1.6H8.3L7.9 8z" fill="#fff"/></svg>`,
    htm: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 3l1.8 16.1L12 22l6.2-2.9L20 3H4z" fill="#e34c26"/><path d="M12 5.5v14l4.6-2.2L18 5.5H12z" fill="#ef652a"/><path d="M8.5 8h7l-.2 2H10.7l.2 2h4.4l-.4 4.3L12 17.5l-2.9-1.2-.2-2.3h2l.1 1.1 1 .4 1-.4.1-1.6H8.3L7.9 8z" fill="#fff"/></svg>`,
    css: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 3l1.8 16.1L12 22l6.2-2.9L20 3H4z" fill="#1572b6"/><path d="M12 5.5v14l4.6-2.2L18 5.5H12z" fill="#33a9dc"/><path d="M8.3 8h7.1l-.2 2H10.5l.2 2h4.4l-.4 4.3L12 17.5l-2.9-1.2-.2-2.2H11l.1 1 1 .4 1-.4.1-1.5H8.6L8.3 8z" fill="#fff"/></svg>`,
    ts: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="2" fill="#3178c6"/><path d="M6.5 11h7v1.5h-2.5V19h-2v-6.5H6.5V11z" fill="#fff"/><path d="M14 17.4V19c.4.2.8.4 1.3.5.5.1 1 .2 1.5.2.5 0 1-.1 1.4-.2.4-.2.8-.4 1.1-.7.3-.3.5-.6.7-1 .1-.4.2-.8.2-1.3 0-.3 0-.6-.1-.9-.1-.3-.2-.5-.4-.7-.2-.2-.4-.4-.7-.6-.3-.2-.6-.3-1-.5-.3-.1-.5-.2-.7-.3-.2-.1-.4-.2-.5-.3-.1-.1-.2-.2-.3-.3-.1-.1-.1-.2-.1-.4 0-.1 0-.3.1-.4.1-.1.2-.2.3-.2.1-.1.3-.1.4-.1.2 0 .3 0 .5 0 .1 0 .3 0 .5.1.2 0 .3.1.5.2.2.1.3.1.5.2V11.2c-.3-.1-.7-.2-1-.3-.4-.1-.8-.1-1.3-.1-.5 0-1 .1-1.4.2-.4.2-.8.4-1.1.7-.3.3-.5.6-.6 1-.1.4-.2.8-.2 1.2 0 .5.1 1 .4 1.4.3.4.7.7 1.3 1l.7.3c.2.1.4.2.5.3.1.1.2.2.3.3.1.1.1.2.1.4 0 .1 0 .2-.1.3-.1.1-.1.2-.2.3-.1.1-.2.1-.4.1-.1 0-.3.1-.5.1-.4 0-.7-.1-1.1-.2-.4-.2-.7-.4-1-.6z" fill="#fff"/></svg>`,
    js: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="2" fill="#f7df1e"/><path d="M13.5 17.3c.4.7 1 1.2 2 1.2.8 0 1.4-.4 1.4-1s-.5-.9-1.4-1.3l-.5-.2c-1.4-.6-2.2-1.3-2.2-2.8 0-1.4 1.1-2.5 2.7-2.5 1.2 0 2 .4 2.6 1.5l-1.4.9c-.3-.6-.7-.8-1.2-.8s-.8.3-.8.7.3.7 1.2 1l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.4 2.7-3.2 2.7-1.8 0-3-.9-3.5-2l1.3-.6zm-6.3.2c.3.5.5.9 1.1.9.6 0 .9-.2.9-1.1V11h1.7v6.4c0 1.8-1.1 2.6-2.6 2.6-1.4 0-2.2-.7-2.6-1.6l1.5-.9z" fill="#333"/></svg>`,
    vue: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M2 3h4l6 10.5L18 3h4L12 21 2 3z" fill="#42b883"/><path d="M6.5 3H2L12 21 22 3h-4.5L12 13.5 6.5 3z" fill="#42b883"/><path d="M6.5 3L12 13.5 17.5 3h-4L12 6.5 10.5 3h-4z" fill="#35495e"/></svg>`,
    tsx: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="2" fill="#3178c6"/><circle cx="12" cy="12" r="2" fill="#fff"/><ellipse cx="12" cy="12" rx="8" ry="3" stroke="#fff" stroke-width="1" fill="none"/><ellipse cx="12" cy="12" rx="8" ry="3" stroke="#fff" stroke-width="1" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="8" ry="3" stroke="#fff" stroke-width="1" fill="none" transform="rotate(-60 12 12)"/></svg>`,
    jsx: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="2" fill="#20232a"/><circle cx="12" cy="12" r="2" fill="#61dafb"/><ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61dafb" stroke-width="1" fill="none"/><ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61dafb" stroke-width="1" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61dafb" stroke-width="1" fill="none" transform="rotate(-60 12 12)"/></svg>`,
    json: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 3C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5z" fill="#292929"/><path d="M8 8c0-1.1.4-2 1.5-2S11 7 11 8v2c0 .6.4 1 1 1v2c-.6 0-1 .4-1 1v2c0 1-1 2-1.5 2S8 17 8 16m8 0c0 1-.4 2-1.5 2S13 17 13 16v-2c0-.6-.4-1-1-1v-2c.6 0 1-.4 1-1V8c0-1 .4-2 1.5-2S16 7 16 8" stroke="#f7df1e" stroke-width="1.5" fill="none"/></svg>`,
    bash: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" fill="#333"/><path d="M6 9l3 3-3 3" stroke="#4ec9b0" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="11" y1="15" x2="17" y2="15" stroke="#4ec9b0" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  };

  // Map common labels
  const labelMap: Record<string, string> = {
    npm: "bash",
    pnpm: "bash",
    yarn: "bash",
    bun: "bash",
    terminal: "bash",
    shell: "bash",
  };

  const key = icons[ext] ? ext : labelMap[ext] || "";
  return icons[key] || icons.bash;
}

/** Highlight code with Shiki dual-theme (github-light / github-dark) */
export async function highlightCode(
  code: string,
  lang: BundledLanguage = "html",
): Promise<string> {
  try {
    const hl = await getHighlighter();
    return hl.codeToHtml(code.trim(), {
      lang,
      themes: { light: "github-light", dark: "github-dark" },
    });
  } catch {
    // Fallback: plain escaped HTML
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre><code>${escaped}</code></pre>`;
  }
}
