document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference in local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateIcon(savedTheme);
    }

    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', '');
            updateIcon('');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            updateIcon('dark-mode');
        }
    });

    function updateIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark-mode') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Form submission handler
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        fetch('https://formspree.io/f/mpzvgrjj', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.name.value,
                email: this.email.value,
                message: this.message.value
            })
        }).then(response => {
            if (response.ok) {
                alert('Your message has been sent!');
                this.reset();
            } else {
                alert('Failed to send message. Please try again later.');
            }
        }).catch(error => {
            alert('Failed to send message. Please try again later.');
        });
    });

    // Navbar toggle function
    window.toggleNavbar = function() {
        var navbar = document.getElementById('navbar');
        if (navbar.classList.contains('hidden')) {
            navbar.classList.remove('hidden');
        } else {
            navbar.classList.add('hidden');
        }
    };
});
