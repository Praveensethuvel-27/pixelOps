// Simple Smooth Parallax Scrolling
document.addEventListener('DOMContentLoaded', () => {
    const parallaxSections = document.querySelectorAll('.parallax-section');

    function parallax() {
        parallaxSections.forEach(section => {
            const speed = parseFloat(section.getAttribute('data-speed') || 0.5);
            const yPos = -(window.pageYOffset * speed);
            section.style.backgroundPositionY = `${yPos}px`;
        });
    }

    window.addEventListener('scroll', parallax);
    parallax(); // Initial call
});