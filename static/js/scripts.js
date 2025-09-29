document.addEventListener("DOMContentLoaded", () => {
  const toggleHeader = document.getElementById("cobalt-toggle");
  const content = document.getElementById("demo-setup-content");
  const divider = document.getElementById("divider");
  const caret = document.getElementById("caret-icon");

  toggleHeader.addEventListener("click", () => {
    const isVisible = content.style.display === "block";

    content.style.display = isVisible ? "none" : "block";
    divider.style.display = isVisible ? "none" : "block";
    caret.classList.toggle("rotate", !isVisible);
  });
});