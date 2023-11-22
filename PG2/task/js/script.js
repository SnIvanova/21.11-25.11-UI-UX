document.addEventListener("DOMContentLoaded", () => {
    // Scroll to top button functionality
    const scrollButton = document.querySelector('.fa-caret-square-up');
    scrollButton.addEventListener('click', () => scrollToTop());
  
    // Social icon tooltip functionality
    const handleMouseEvents = (icon, eventType) => {
      if (eventType === 'mouseover' || eventType === 'focus') {
        showTooltip(icon);
      } else {
        hideTooltip(icon);
      }
    };
  
    const handleClick = (icon) => hideTooltip(icon);
  
    const socialIcons = document.querySelectorAll('.floating-icons a');
    socialIcons.forEach((icon) => {
      icon.addEventListener('mouseover', () => handleMouseEvents(icon, 'mouseover'));
      icon.addEventListener('mouseout', () => handleMouseEvents(icon, 'mouseout'));
  
      // Add focus and blur events for accessibility
      icon.addEventListener('focus', () => handleMouseEvents(icon, 'focus'));
      icon.addEventListener('blur', () => handleMouseEvents(icon, 'blur'));
  
      // Ensure tooltips are removed on icon click for touch devices
      icon.addEventListener('click', () => handleClick(icon));
    });
  
    // Function to scroll to the top smoothly
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    // Function to show tooltip
    const showTooltip = (icon) => {
      const tooltip = document.createElement('span');
      tooltip.className = 'tooltip';
      tooltip.textContent = icon.title;
      icon.appendChild(tooltip);
    };
  
    // Function to hide tooltip
    const hideTooltip = (icon) => {
      const tooltip = icon.querySelector('.tooltip');
      if (tooltip) {
        icon.removeChild(tooltip);
      }
    };
  });
  