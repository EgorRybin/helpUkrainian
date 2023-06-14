const modal = document.querySelector("[data-modal]");
const closeBtn = document.querySelector("[data-close-btn]");
const openBtn = document.querySelector("[data-open-btn]");
const header = document.querySelector("header");

closeBtn.addEventListener('click', () => {
    modal.classList.toggle("is-hidden");
    header.classList.toggle("static");
    
});

openBtn.addEventListener('click', () => {
    modal.classList.toggle("is-hidden");
    header.classList.toggle("static");
})
