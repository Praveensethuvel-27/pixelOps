const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Process Roadmap Sequential Scroll Animation
const processSteps = document.querySelectorAll('.process-step');

const processObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Staggered delay: first step instant, next 200ms delay, etc.
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 300); // 300ms delay between each step – adjust panniko
            processObserver.unobserve(entry.target); // Once visible, no need to observe again
        }
    });
}, {
    threshold: 0.3, // When 30% of section visible
    rootMargin: '0px 0px -100px 0px' // Trigger konjam early
});

processSteps.forEach(step => {
    processObserver.observe(step);
});// Preloader with Circular Loader + Typing Effect
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const typedText = document.querySelector('.typed-text');
    const text = "PIXEL OPS";
    let index = 0;

    function typeLetter() {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(typeLetter, 150); // Speed of typing (150ms per letter)
        } else {
            // Typing complete – hide preloader after 1 second
            setTimeout(() => {
                preloader.classList.add('preloader-hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 1000);
            }, 1000);
        }
    }

    // Start typing after small delay
    setTimeout(typeLetter, 500);

    // Fallback hide if load takes too long
    setTimeout(() => {
        preloader.classList.add('preloader-hidden');
    }, 6000);
});
  