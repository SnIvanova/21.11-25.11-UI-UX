
document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.querySelector('.fa-caret-square-up');

    scrollButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    window.addEventListener('scroll', function () {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            scrollButton.style.display = 'none';
        } else {
            scrollButton.style.display = 'block';
        }
    });


  });