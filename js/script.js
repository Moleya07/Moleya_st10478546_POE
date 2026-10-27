
document.addEventListener('DOMContentLoaded', function () {

    //HAMBURGER MENU 
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            const isOpen = navMenu.classList.toggle('open');
            hamburger.classList.toggle('active', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close menu when a nav link is clicked 
        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('open');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // FORM VALIDATION 
    const form = document.getElementById('contact-form');
    if (!form) return;

    const successBox = document.getElementById('form-success');

    function showError(field, message) {
        const errorSpan = document.getElementById(field.id + '-error');
        if (errorSpan) errorSpan.textContent = message;
        field.classList.add('invalid');
    }

    function clearError(field) {
        const errorSpan = document.getElementById(field.id + '-error');
        if (errorSpan) errorSpan.textContent = '';
        field.classList.remove('invalid');
    }

    function validateField(field) {
        clearError(field);
        const value = field.value.trim();

        // Required check
        if (field.hasAttribute('required')) {
            if (field.type === 'checkbox' && !field.checked) {
                showError(field, 'Please tick this box to continue.');
                return false;
            }
            if (field.type !== 'checkbox' && value === '') {
                showError(field, 'This field is required.');
                return false;
            }
        }

        // Name
        if (field.id === 'name' && value.length < 2) {
            showError(field, 'Please enter at least 2 characters.');
            return false;
        }

        // Email
        if (field.id === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showError(field, 'Please enter a valid email address (e.g. name@example.com).');
                return false;
            }
        }

        // Phone
        if (field.id === 'phone') {
            const phoneRegex = /^[0-9+\s\-]{7,15}$/;
            if (!phoneRegex.test(value)) {
                showError(field, 'Please enter a valid phone number (7–15 digits).');
                return false;
            }
        }

        // Message
        if (field.id === 'message' && value.length < 10) {
            showError(field, 'Please write at least 10 characters.');
            return false;
        }

        return true;
    }

    // Live validation on blur & input
    const fields = form.querySelectorAll('input, select, textarea');
    fields.forEach(function (field) {
        field.addEventListener('blur', function () { validateField(field); });
        field.addEventListener('input', function () {
            if (field.classList.contains('invalid')) validateField(field);
        });
    });

    // Submit handler
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let allValid = true;
        fields.forEach(function (field) {
            if (!validateField(field)) allValid = false;
        });

        if (!allValid) {
            // Move focus to first invalid field
            const firstInvalid = form.querySelector('.invalid');
            if (firstInvalid) firstInvalid.focus();
            successBox.classList.remove('show');
            return;
        }

        // --- Simulate input processing ---
        const data = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            reason: form.reason.value,
            message: form.message.value.trim()
        };

        console.log('Form data submitted:', data);

        // Show success response
        successBox.textContent =
            'Thank you, ' + data.name +
            '! Your message has been received. We will contact you at ' +
            data.email + ' soon.';
        successBox.classList.add('show');

        form.reset();
        fields.forEach(clearError);

        // Auto-hide success message after 8s
        setTimeout(function () {
            successBox.classList.remove('show');
        }, 8000);
    });
});