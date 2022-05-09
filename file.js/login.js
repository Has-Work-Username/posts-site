const elForm = document.querySelector('.form');
const elInputEmail = elForm.querySelector('.email');
const elInputPassword = elForm.querySelector('.password');

elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = elInputEmail.value;
    const password = elInputPassword.value;

    fetch('https://reqres.in/api/login', { 
        method: 'POST',

        headers: {
            'content-Type': 'application/json'
        },

        body: JSON.stringify( {
            email,
            password
        })
    }).then(res => res.json())
        .then(data =>{
            if(data.token == 'QpwL5tke4Pnpja7X4') {
                console.log(data)
                window.localStorage.setItem('token', data.token);
                window.location.href = '../file.index/main.html'
            }else {
                window.location.href = '../file.index/login.html'
            }
            
    })
    
    elInputEmail.value = null;
    elInputPassword.value = null
});





