document.addEventListener("DOMContentLoaded", () => {
    const scrollButton = document.querySelector('.fa-caret-square-up');
    scrollButton.addEventListener('click', () => scrollToTop());

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    window.addEventListener('scroll', function () {
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
          scrollButton.classList.add('pulse');
        } else {
          scrollButton.classList.remove('pulse');
        }
      });


  });
  