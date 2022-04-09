const panels = document.querySelectorAll(".panel");

console.log(panels);

panels.forEach((madeUpVariable) => {
  madeUpVariable.addEventListener("click", () => {
    removeActiveClasses();
    madeUpVariable.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((madeUpVariable) => {
    madeUpVariable.classList.remove("active");
  });
}
