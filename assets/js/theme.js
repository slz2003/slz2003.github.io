// Light/dark theme toggle, following al-folio: the setting cycles system -> dark -> light.
let themeSetting = "system";

function applyTheme(setting) {
  themeSetting = setting;
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = setting === "system" ? (prefersDark ? "dark" : "light") : setting;
  document.documentElement.setAttribute("data-theme-setting", setting);
  document.documentElement.setAttribute("data-theme", theme);
}

function initTheme() {
  let saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch (e) {}
  applyTheme(["system", "dark", "light"].includes(saved) ? saved : "system");

  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (themeSetting === "system") applyTheme("system");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("light-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const next = { system: "dark", dark: "light", light: "system" }[themeSetting];
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
      document.documentElement.classList.add("transition");
      window.setTimeout(() => document.documentElement.classList.remove("transition"), 500);
      applyTheme(next);
    });
  });
}
