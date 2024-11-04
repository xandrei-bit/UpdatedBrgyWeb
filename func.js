document.addEventListener('DOMContentLoaded', () => {
    const subscribeBtn = document.getElementById('subscribe-btn');
    const popup = document.getElementById('newsletterPopup');
    const closeBtn = document.querySelector('.close');
    const newsletterForm = document.getElementById('newsletter-form');

    // Show the popup when the subscribe button is clicked
    subscribeBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    // Close the popup when the close button is clicked
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close the popup when clicking outside the popup content
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Handle form submission (you can customize this function)
    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        // Here you can add your form submission logic (e.g., send data to the server)
        alert('Thank you for subscribing!');
        popup.style.display = 'none'; // Close the popup after submission
    });
});
