const icon = document.getElementById('iconToggle');
const icon2 = document.getElementById('iconToggle2');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const alertDiv = document.querySelector('.alertDiv');
const alertP = document.querySelector('.alert');
const times = document.querySelector('.fa-times');
const inscrireBtn = document.getElementById('inscrireBtn');


times.addEventListener('click', () => alertDiv.style.transform = 'translateY(-700px)')
icon.addEventListener('click', () => showPassword(icon, password))
icon2.addEventListener('click', () => showPassword(icon2, password2))
inscrireBtn.addEventListener('click', validateForm);




function validateForm() {
    if (password.value.length > 6 || password.value.length < 4) {
        alertDiv.style.transform = 'translateY(0px)';
        alertP.innerHTML = 'Mot de passe doit comporter entre 4 et 6 caracteres!';
        console.log('Passwords is above 6', password.value);
    }

    if (password.value !== password2.value) {
        alertDiv.style.transform = 'translateY(0px)';
        alertP.innerHTML = 'Les champs de mot de passe doit etre égaux! ';
    }
}




function showPassword(icon, input) {
    if (icon.classList.contains('fa-eye')) {
        input.setAttribute('type', 'text');
        icon.className = 'fas fa-eye-slash'
    } else {
        input.setAttribute('type', 'password');
        icon.className = 'fas fa-eye'
    }
}