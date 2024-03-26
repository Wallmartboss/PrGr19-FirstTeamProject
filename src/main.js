document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
      });
    }
  });
});
let openbutton = document.getElementById('openbutton');
openbutton.onclick = function openModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.add('is-open');
};
let closebutton = document.getElementById('closebutton');
closebutton.onclick = function closeModal() {
  let modal = document.querySelector('#mobile-menu');
  modal.classList.remove('is-open');
};
