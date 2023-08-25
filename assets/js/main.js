const hamburgerBuntton = document.querySelector(".js-hamburgerButton");

if (hamburgerBuntton) {
  hamburgerBuntton.addEventListener("click", (e) => {
    const isExpanded = e.currentTarget.getAttribute("aria-expanded") !== "false";
    e.currentTarget.setAttribute("aria-expanded", !isExpanded);
    document.documentElement.classList.toggle("is-drawerActive");
  });
}
