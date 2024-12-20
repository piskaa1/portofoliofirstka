// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let isValid = true;

    if (name === '') {
        alert('Name is required');
        isValid = false;
    }

    if (email === '') {
        alert('Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        isValid = false;
    }

    if (message === '') {
        alert('Message is required');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully');
        // Here you can add code to handle the form submission, such as sending the data to a server
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
