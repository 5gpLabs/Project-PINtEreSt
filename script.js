function logIn(){
    const a=document.getElementById('login-container');
    a.style.display = 'block';
    a.style.width = '460px';
    if (a.style.display=='block'){
        const background=document.getElementById('gray');
        background.style.display = 'block';
        background.addEventListener('click', unset);
        function unset(){
            a.style.display = 'none';
            background.style.display = 'none';
            a.style.width = '0px';
        }
    }
}

function register(){
    const a=document.getElementById('register-container');
    a.style.display = 'block';
    if (a.style.display == 'block'){
        const background=document.getElementById('gray');
        background.style.display = 'block';
        background.addEventListener('click', unset);
        function unset(){
            a.style.display = 'none';
            background.style.display = 'none';
        }
    }
}

function cancel(){
    const a=document.getElementById('login-container');
    if (a.style.display=="block"){
        const background=document.getElementById('gray');
        background.style.display='none';
        a.style.display='none';
        a.style.width = '0px';
    }
}

let eyeicon = document.getElementById('eyeclose');
let password= document.getElementById('password');

eyeicon.addEventListener('click', change);

function change(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "eyeopen.png";
    }
    else{
        password.type="password";
        eyeicon.src="eyeclose.png";
    }
}

