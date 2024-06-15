document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value.replace(/[\(\)\-\+]/g, '');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;


    
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email');
        return;
    }
    
    const emailLengthRegex = /^.{8,156}$/;
    if (!emailLengthRegex.test(email)) {
        alert('почта от 8 до 156 символов и что содержит @, точку и цифру');
        return;
    }
    
    if (!/\d/.test(email)) {
        alert('почта от 8 до 156 символов и что содержит @, точку и цифру');
        return;
    }
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
    if (!passwordRegex.test(password)) {
        alert('пароль от 6 до 12 символов. Есть одна маленькая буква, одна большая и цифра');
        return;
    }
    
    const ageRegex = /^(?:1[01][0-9]|1[2-9]|[2-9][0-9])$/;
    if (!ageRegex.test(age)) {
        alert('от 10 до 120');
        return;
    }

    const userData = {
        name: name,
        phone: phone,
        email: email,
        password: password,
        age: age
    };
    console.log(userData);

});

