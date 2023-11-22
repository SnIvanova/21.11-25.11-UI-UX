document.addEventListener("DOMContentLoaded", () => {
    const scrollButton = document.querySelector('.fa-caret-square-up');
    const calendarIcon = document.getElementById('calendar-icon');
    const calendarTooltip = document.getElementById('calendar-tooltip');
    
    const date = new Date();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    const generateCalendar = () => {
        let calendarHTML = '<div class="calendar">';
        const today = new Date().getDate(); 
        for(let i = 1; i <= daysInMonth; i++) {
            const dayClass = i === today ? 'calendar-day today' : 'calendar-day';
            calendarHTML += `<div class="${dayClass}">${i}</div>`;
        }
        calendarHTML += '</div>';
        calendarTooltip.innerHTML = calendarHTML;
    };
    

    scrollButton.addEventListener('click', scrollToTop);

    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
          scrollButton.classList.add('pulse');
        } else {
          scrollButton.classList.remove('pulse');
        }
    });

    calendarIcon.addEventListener('mouseenter', () => {
        generateCalendar();
        calendarTooltip.style.visibility = 'visible'; 
    });
    
    calendarIcon.addEventListener('mouseleave', () => {
        calendarTooltip.style.visibility = 'hidden'; 
    });
    
});
