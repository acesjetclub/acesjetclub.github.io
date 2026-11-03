/* Swiper itself comes from vendor/swiper, loaded just before this file */

/* The slides container and the first slide */
const wrapper = document.querySelector(".swiper-wrapper");
const slide = document.querySelector(".swiper-slide");

/* The school photos: school-1 is already on the page, up to school-11 */
const START = 1;
const END = 11;

/* Add a slide for each of the other school photos */
for (let i = START; i < END; i++) {
  /* Copy the first slide */
  const root = slide.cloneNode(true);

  /* Point its image at the next school photo */
  const img = root.querySelector("img");
  img.src = `images/school/school-${i + 1}.jpeg`;

  /* Add it to the slider */
  wrapper.appendChild(root);
}

/* Start the slider */
const swiper = new Swiper(".swiper", {
  /* Slide sideways, and go back to the first photo after the last */
  direction: "horizontal",
  loop: true,

  /* Move to the next photo every 2.5 seconds, even after a click */
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  /* The dots under the slider */
  pagination: {
    el: ".swiper-pagination",
  },

  /* The previous and next arrows */
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
