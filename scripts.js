document.addEventListener('DOMContentLoaded', () => {
    const loginEditButton = document.getElementById('login-edit-btn');
    const clubList = document.getElementById('club-list');
    const instructions = document.getElementById('instructions');


   // Function to dynamically insert the schedule with images
function loadDefaultSchedule() {
    const defaultSchedule = [
        { name: "Club X", date: "August 30, 2024", img: "IMG_4981.JPG" },
        { name: "The Night Spot", date: "September 5, 2024", img: "IMG_6084.JPG" },
        { name: "Bassline", date: "September 12, 2024", img: "image3.jpg" },
        { name: "Rhythm Lounge", date: "September 19, 2024", img: "image4.jpg" }
    ];

    defaultSchedule.forEach(club => {
        const clubItem = document.createElement('div');
        clubItem.classList.add('club-item');

        // Create image element
        const imgElement = document.createElement('img');
        imgElement.src = club.img;
        imgElement.alt = `${club.name} image`;
        imgElement.classList.add('club-image');

        // Create details element
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('club-details');
        const pElement = document.createElement('p');
        pElement.textContent = `${club.name} - ${club.date}`;

        // Append image and details to the club item
        clubDetails.appendChild(clubText);
        clubItem.appendChild(clubDetails);

        clubList.appendChild(clubItem);
    });
}


     // Password for editing (only known by you and Bosniak)
     const correctPassword = 'NicoLoco';

  // Load saved schedule from local storage
    const savedSchedule = localStorage.getItem('clubSchedule');
    if (savedSchedule) {
        clubList.innerHTML = savedSchedule; // Load schedule from local storage if available
    }

    // Login and Edit button click event
    loginEditButton.addEventListener('click', () => {
        if (loginEditButton.textContent === "Login to Edit") {
            const enteredPassword = prompt("Enter the password to edit the schedule:");
            if (enteredPassword === correctPassword) {
                loginEditButton.textContent = "Edit Schedule"; // Change button to Edit mode
                instructions.style.display = 'block'; // Show instructions
            } else {
                alert('Incorrect password!');
            }
        } else if (loginEditButton.textContent === "Edit Schedule") {
            // Switch to editable mode
            clubList.contentEditable = true;
            loginEditButton.textContent = "Save Schedule"; // Change button to Save mode
        } else if (loginEditButton.textContent === "Save Schedule") {
            // Save changes and switch back to non-editable mode
            clubList.contentEditable = false;
            localStorage.setItem('clubSchedule', clubList.innerHTML); // Save schedule to local storage
            loginEditButton.textContent = "Edit Schedule"; // Revert button to Edit mode
            instructions.style.display = 'none'; // Hide instructions
        }
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
