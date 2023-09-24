const wrapper = document.querySelector('.wrapper');
const login = document.querySelector('.logg');
const signin = document.querySelector('.sigg');
const formlogin = document.querySelector('.formlogin');

login.addEventListener('click',() => {
    wrapper.classList.add('.enable');
});

function addlog(){
    var wrapper = document.getElementById('wrapper');
    var login = document.getElementById('formlogin');
    var formsigin = document.getElementById('formsigin');
    wrapper.style.scale = "1";
    login.style.scale = "1";
    formsigin.style.scale ="0";
}
function addsig(){
    var wrapper = document.getElementById('wrapper');
    var login = document.getElementById('formlogin');
    var formsigin = document.getElementById('formsigin');
    wrapper.style.scale = "1";
    login.style.scale = "0";
    formsigin.style.scale ="1";
}
function close(){
    var wrapper = document.getElementById('wrapper');
    var login = document.getElementById('formlogin');
    var formsigin = document.getElementById('formsigin');
    wrapper.style.scale = "0";
    login.style.scale = "0";
    formsigin.style.scale ="0";
}