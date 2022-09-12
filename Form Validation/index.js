console.log("we r connected");

let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let validName = false;
let validEmail = false;
let validPhone = false;
$('#success').hide();
$('#failure').hide();

name.addEventListener('blur', ()=>{
console.log("your name is blured")

let regex = /^[a-zA-z]([a-zA-Z0-9]){6,10}$/;
let str = name.value;
console.log(regex, str);
if(regex.test(str)){
    console.log("your name is valid");
    name.classList.remove('is-invalid')
    validName=true;
}else{
    console.log("your name is not valid");
    name.classList.add('is-invalid')
    validName=false;
}
});

email.addEventListener('blur', ()=>{
console.log("your name is blured")

let regex = /^([\_\-\.a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,6}$/;
let str = email.value;
console.log(regex, str);
if(regex.test(str)){
    console.log("your email id is valid");
    email.classList.remove('is-invalid')
    validEmail=true;
}else{
    console.log("your email id is not valid");
    email.classList.add('is-invalid')
    validEmail=false;
}
});

phone.addEventListener('blur', ()=>{
console.log("your name is blured")

let regex = /^([0-9]){10}$/;
let str = phone.value;
console.log(regex, str);
if(regex.test(str)){
    console.log("your phone number is valid");
    phone.classList.remove('is-invalid')
    validPhone=true;
}else{
    console.log("your phone number is not valid");
    phone.classList.add('is-invalid')
    validPhone=false;
}
});
let car = document.getElementById("car");
let address = document.getElementById("address");

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
   // console.log(validEmail, validUser, validPhone);
    
    // Submit your form here
    if(validEmail && validName && validPhone){

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }  
})