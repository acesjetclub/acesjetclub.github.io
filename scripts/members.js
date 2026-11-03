/* The number of JET Club members */
const TOTAL_MEMBERS = 15;

/* The students grid, its first card, and how many cards it already has */
const grid = document.querySelector(".students-grid");
const first = grid.querySelector(".student-card");
const count = grid.querySelectorAll(".student-card").length;

/* Fill the grid with placeholder cards, copied from the first card */
for (let i = count; i < TOTAL_MEMBERS; i++) {
  /* Copy the first card */
  const clone = first.cloneNode(true);

  /* Link it to the member's own page */
  clone.href = `pages/student-${i + 1}.html`;

  /* Give it a placeholder photo, name and class */
  clone.querySelector("img").src =
    `https://via.placeholder.com/avatar/identicon/user-${i + 1}.png?size=240`;
  clone.querySelector("h2").innerHTML = "Student Name";
  clone.querySelector("p").innerHTML = "Class";

  /* Add it to the grid */
  grid.appendChild(clone);
}
