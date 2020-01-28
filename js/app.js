const disScroll = () => {
  const burger = document.querySelector(".nav-btn");
  const body = document.querySelector(".body");

  burger.addEventListener("click", () => {
    body.classList.toggle("scrolldis");
  });
};

disScroll();
