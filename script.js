document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const body = document.body;
    const toggleButton = document.querySelector('.toggle-products');
    const additionalProducts = document.querySelector('.additional-products');

    // Toggle the menu on button click
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        body.classList.toggle('no-scroll'); // Prevent background scrolling when the menu is open
    });

    // Close the menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    toggleButton.addEventListener('click', () => {
        if (additionalProducts.style.display === 'block') {
            additionalProducts.style.display = 'none';
            toggleButton.textContent = 'See More Products';
        } else {
            additionalProducts.style.display = 'block';
            toggleButton.textContent = 'See Less Products';
        }
    });
});

// Handle form submission for subscription
document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a confirmation message element
    let confirmationMessage = document.createElement('div');
    confirmationMessage.textContent = 'Subscription Successfully Done!';
    confirmationMessage.style.position = 'fixed';
    confirmationMessage.style.bottom = '20px';
    confirmationMessage.style.right = '20px';
    confirmationMessage.style.padding = '15px 30px';
    confirmationMessage.style.backgroundColor = '#FF6B00';
    confirmationMessage.style.color = '#fff';
    confirmationMessage.style.borderRadius = '10px';
    confirmationMessage.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    confirmationMessage.style.fontSize = '18px';
    confirmationMessage.style.zIndex = '1000';

    document.body.appendChild(confirmationMessage);

    // Remove the message after 5 seconds
    setTimeout(() => {
        document.body.removeChild(confirmationMessage);
    }, 5000);
});

