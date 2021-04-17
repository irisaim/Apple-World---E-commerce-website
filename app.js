function changeMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }

 let form = document.getElementById('form');
 let firstName = document.getElementById('firstName');
 let lastName = document.getElementById('lastName');
 let textarea = document.getElementById('textarea');
 let error = document.getElementById('error');
 let firstname_error = document.getElementById('firstNameError');
 let lastname_error = document.getElementById('lastNameError');
 let message_error = document.getElementById('messageError');
 let btn = document.getElementById('form-btn');
 let btn1 = document.getElementById('contact-form');
 let banner = document.getElementById('banner');
 let yesNoError = document.getElementById('yesNoError');
 
 firstName.addEventListener('input', checkFirstName);
 
 function checkFirstName(e) {
     firstNameValue = e.target.value;
     console.log(firstNameValue);
     
 
        if (firstNameValue.length > 0 && firstNameValue.length <= 10) {
           firstName.style.border = '2px solid green';
           ifValid = true;
           firstNameError.textContent = 'Well done!';
        } else if (firstNameValue.length > 10) {
           firstName.style.border = '2px solid red';
           firstNameError.textContent = 'First Name should have max 10 characters';
        } else if (firstNameValue.length == "") {
          firstName.style.border = '2px solid red';
     } else {
        firstName.style.border = '2px solid red';
        firstNameError.textContent = 'Name must contains only character excepting Elon Musk son';
     }
  
 
 lastName.addEventListener('input', checkLastName);
 
 function checkLastName(e) {
     lastNameValue = e.target.value;
     console.log(lastNameValue);
 
     let letters = /^[A-Za-z]+$/;
     if (lastNameValue.match(letters)) {
        if (lastNameValue.length > 0 && lastNameValue.length <= 10) {
           lastName.style.border = '2px solid green';
           ifValid = true;
           lastNameError.textContent = 'Well done!';
        } else if (lastNameValue.length > 10) {
           lastName.style.border = '2px solid red';
           lastNameError.textContent = 'First Name should have max 10 characters';
           ifValid = false;
        } else if (lastNameValue.length == "") {
          lastName.style.border = '2px solid red';
          ifValid = false;
        }
     } else {
        lastName.style.border = '2px solid red';
        lastNameError.textContent =
           'Name must contains only character excepting Elon Musk son';
           ifValid = false;
     }
  }
 
 textarea.addEventListener('input', checkTextarea);
 
 function checkTextarea(e) {
     textareaValue = e.target.value;
    console.log(textarea);
 
        if (textareaValue.length >= 20) {
         textarea.style.border = '2px solid green';
         return;
        } else if (textareaValue.length > 1000) {
         textarea.style.border = '2px solid red';
         messageError.textContent = 'Message should contmax 1000 characters';
         isValid = false;
        } else if (firstNameValue.length == "") {
          firstName.style.border = '2px solid red';
          ifValid = false;
        } else {
           textarea.style.border = '2px solid red';
           messageError.textContent = 'Message should contain at least 20 characters';
           ifValid = false;
        }
     }
   
     
 btn.addEventListener('click', submitForm );
 let nameHere = document.getElementById('nameHere');
 
 function submitForm(e) {
    e.target = 'checkFirstName';
    e.target = 'checkLastName';
    e.target = 'checkTextarea';
    e.target = 'yesNo';``
    console.log(btn);
 
    if(firstName.value && lastName.value && textarea.value) {
        banner.style.visibility = 'visible';
        banner.innerHTML += firstName.value;
    }
 
 }
 }




