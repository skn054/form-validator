const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
   function showError(element,message){
      element.parentElement.className = 'form-control error';
      const parent = element.parentElement;
      // const fieldName = element.id.charAt(0).toUpperCase() + element.id.slice(1)
      parent.querySelector("small").innerText = message;
    }
// Show success outline
    function showSuccess(element){
      element.parentElement.className = 'form-control success';
    }

// Check email is valid
  function checkEmail(element){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log()
    if(re.test(element.value.trim())){
      showSuccess(element)
    }
    else{
      showError(element,' Email is invalid')
    }
  }

// Check required fields
function checkRequired(inputArr){
  inputArr.forEach(function(element){
    if(element.value.trim() !== ''){
        showSuccess(element)
    }
    else{
          showError(element,`${getFeild(element)} is required`)
      //  console.log()
    }
  })
}



// Check input length
  function checkLength(element,minLenght,maxLength){
       if(element.value.length < minLenght){
          showError(element,`${getFeild(element)} must be atleast ${minLenght} characters`)
       }
       else if(element.value.length > maxLength){
        showError(element,`${getFeild(element)} must be less than ${maxLenght} characters`)
       }
       else{
         showSuccess(element)
       }
  }

// Check passwords match
  function checkPasswordsMatch(element1,element2){
    if(element1.value.trim() !== element2.value.trim()){
      showError(element2, 'Password do not match')
    }
  }
// Get fieldname
    function getFeild(element){
      const parent = element.parentElement;
      const fieldName = element.id.charAt(0).toUpperCase() + element.id.slice(1);
      return fieldName;
    }

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
