document.addEventListener("DOMContentLoaded", () => {
    const scrollButton = document.querySelector('.fa-caret-square-up');
    scrollButton.addEventListener('click', () => scrollToTop());

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
  });
  