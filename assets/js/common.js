// Publication "Abs" / "Bib" buttons: toggle the matching panel and close the other one.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".publications a.abstract, .publications a.bibtex").forEach((button) => {
    button.addEventListener("click", () => {
      const entry = button.closest(".col-sm-10");
      const kind = button.classList.contains("abstract") ? "abstract" : "bibtex";
      const other = kind === "abstract" ? "bibtex" : "abstract";
      entry.querySelector(`div.${kind}.hidden`)?.classList.toggle("open");
      entry.querySelector(`div.${other}.hidden`)?.classList.remove("open");
    });
  });
});
