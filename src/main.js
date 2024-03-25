// const text = document.querySelector('#moble-menu');
// const id = document.ElementById('moble-menu');

// function openModal(text) {
//   let modal = document.querySelector(text);
//   modal.classList.add('is-open');
// }
// function closeModal(id) {
//   let modal = document.getElementById(id);
//   modal.classList.remove('is-open');
// }


document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Smooth scroll
            });
        }
    });
});