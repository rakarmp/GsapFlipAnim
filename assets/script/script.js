gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
  link.addEventListener("click", () => {
    // Turn warna blue nav
    gsap.to(links, { color: "#252525" });
    if (document.activeElement === link) {
      gsap.to(link, { color: "#282828" });
    }

    // Move line
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 4.25,
      absolute: true,
      ease: "elastic.out(1,0.5",
    });
  });
});

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const state = Flip.getState(cards);

    const isCardActive = card.classList.contains("active");
    cards.forEach((otherCard, otherIndex) => {
      otherCard.classList.remove("active");
      otherCard.classList.remove("is-inactive");
      if (!isCardActive && index !== otherIndex) {
        otherCard.classList.add("is-inactive");
      }
    });
    if (!isCardActive) card.classList.add("active");

    Flip.from(state, {
      duration: 1,
      absolute: true,
      ease: "expo.out",
      //   onComplete: () => {
      //     gsap.to(".card p", {
      //       y: 500,
      //     });
      //   },
    });
  });
});
