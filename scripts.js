document.addEventListener('DOMContentLoaded', () => {
    // Get the toggle button and the body element
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;

    // Add click event listener for the button
    toggleButton.addEventListener('click', function() {
        // Toggle the dark-mode class on the body
        body.classList.toggle('dark-mode');

        // Change the button text based on the current mode
        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Light Mode'; // Switch to light mode
        } else {
            toggleButton.textContent = 'Dark Mode'; // Switch to dark mode
        }
    });

    // Smooth Scrolling for Navigation
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Scroll-triggered fade-in effect using Intersection Observer API
const fadeInSections = document.querySelectorAll('.fade-in-section');
const options = {
    root: null, // Use the viewport as the container
    threshold: 0.1, // Trigger when 10% of the section is visible
    rootMargin: '0px 0px -100px 0px' // Trigger 100px before it enters the viewport
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once the section has been revealed
        }
    });
}, options);

fadeInSections.forEach(section => {
    observer.observe(section); // Observe each section with the fade-in effect
});

    fadeInSections.forEach(section => {
        observer.observe(section); // Observe each section with the fade-in effect
    });

    // Form Submission Alert
    const bookingForm = document.getElementById('contact-form');
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your message has been submitted!');
        bookingForm.reset();
    });
});
