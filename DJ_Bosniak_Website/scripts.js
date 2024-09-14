document.addEventListener('DOMContentLoaded', () => {
    const clubList = [
        { name: "Club X", date: "August 30, 2024" },
        { name: "The Night Spot", date: "September 5, 2024" },
        { name: "Bassline", date: "September 12, 2024" },
        { name: "Rhythm Lounge", date: "September 19, 2024" }
    ];

    const clubListElement = document.getElementById('club-list');

    clubList.forEach(club => {
        const listItem = document.createElement('li');
        listItem.textContent = `${club.name} - ${club.date}`;
        clubListElement.appendChild(listItem);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Your existing club list code...

    // EmailJS form submission
    const bookingForm = document.getElementById('booking-form');
    const statusMessage = document.getElementById('status-message');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Initialize EmailJS
        emailjs.init('YOUR_USER_ID');

        // Send the email
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                statusMessage.textContent = 'Your message has been sent successfully!';
                bookingForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                statusMessage.textContent = 'Failed to send the message. Please try again later.';
            });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Existing club list and email handling code...

    // Dark mode/white mode toggle
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;

    // Add event listener to the button
    toggleButton.addEventListener('click', function() {
        // Check if dark mode is active
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            toggleButton.textContent = 'Not-Ghetto';
        } else {
            body.classList.add('dark-mode');
            toggleButton.textContent = 'Ghetto';
        }
    });
});
