const showModalBtn = document.getElementById("showModalBtn");
const modalSelector = document.querySelector(".modal");

const closeBtn = document.getElementById("close-button");

showModalBtn.addEventListener("click", () => {
    modalSelector.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modalSelector.style.display = "none";
});