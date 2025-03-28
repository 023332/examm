document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profile-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(profileForm);
        const data = Object.fromEntries(formData.entries());

        fetch('/api/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            successMessage.textContent = 'Profile updated successfully!';
            errorMessage.textContent = '';
        })
        .catch(error => {
            errorMessage.textContent = 'Error updating profile: ' + error.message;
            successMessage.textContent = '';
        });
    });
});