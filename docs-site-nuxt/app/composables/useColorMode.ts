export function useColorMode() {
  const mode = useState<string>("color-mode", () => "light");

  if (import.meta.client) {
    // Initialize from localStorage or system preference
    const stored = localStorage.getItem("ns-theme");
    if (stored === "dark" || stored === "light") {
      mode.value = stored;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      mode.value = "dark";
    }
    // Apply immediately
    document.documentElement.setAttribute("data-theme", mode.value);

    // Watch for changes
    watch(mode, (val) => {
      document.documentElement.setAttribute("data-theme", val);
      localStorage.setItem("ns-theme", val);
    });
  }

  return computed({
    get: () => mode.value,
    set: (val: string) => {
      mode.value = val;
    },
  });
}
