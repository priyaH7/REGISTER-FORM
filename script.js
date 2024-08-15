document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var errorMsg = document.getElementById('error-msg');

    if (password !== confirmPassword) {
        errorMsg.textContent = 'Passwords do not match!';
    } else {
        errorMsg.textContent = '';
        alert('submitted successfully!');
        
    }
});