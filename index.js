const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
const myForm = document.querySelector('form')
const mybtn = document.querySelector('button');
const fwarn = document.querySelector('.first-name-warning');
const lwarn = document.querySelector('.last-name-warning');
const ewarn = document.querySelector('.email-warning');
const egwarn = document.querySelector('.email-g-warning');
const qwarning = document.querySelector('.query-warning');
const awarning = document.querySelector('.area-warning');
const twarn = document.querySelector('.terms-warning');


const fName = document.querySelector('.first-input');
const lName = document.querySelector('.last-input');
const email = document.querySelector('.ema');
const rad1 = document.querySelector('.rad-input-1');
const rad2 = document.querySelector('.rad-input-2');
const tArea = document.querySelector('textarea');
const check = document.querySelector('.check');
const successMsg = document.querySelector('.message');
const backDrop = document.querySelector('.change')

myForm.addEventListener('submit', function(e){
    e.preventDefault();
    const selectradio = document.querySelector('input[type="radio"]:checked');
    const selectcheck = document.querySelector('input[type="checkbox"]:checked');
        const emailvalue = email.value;
    const validate = pattern.test(emailvalue);
    let isValid = true;

    if(fName.value === ""){
        fwarn.style.display = "block";
        isValid = false;
    }
    else{
        fwarn.style.display = "none";
    }

    if(lName.value === ""){
        lwarn.style.display = "block";
        isValid = false;
    }
    else{
        lwarn.style.display = "none"
    }

    if(email.value.trim() === ""){
        egwarn.style.display = "block";
        isValid = false;
    }
    else if(!validate){
        ewarn.style.display = "block";
        isValid = false;
    }
    else{
        ewarn.style.display = "none";
    }

    if(!selectradio){
        qwarning.style.display = "block";
        isValid = false;
    }
    else{
        qwarning.style.display = "none";
    }

    if(tArea.value === ""){
        awarning.style.display = "block";
        isValid = false;
    }
    else{
        awarning.style.display = "none";
    }

    if(!selectcheck){
        twarn.style.display= "block";
        isValid = false;
    }
    else{
        twarn.style.display = "none";
    }

    setTimeout(() => {
        fwarn.style.display = "none";
        lwarn.style.display = "none";
        egwarn.style.display = "none";
        ewarn.style.display = "none";
        qwarning.style.display = "none";
        awarning.style.display = "none";
        twarn.style.display = "none"
    }, 3000);

    if(isValid){
        successMsg.style.display = "block";
        backDrop.style.display = "block";
    }
    
})
