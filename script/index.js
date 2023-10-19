

function gotofaq(){

    window.location.href='./faq.html'
}


//login modal preventing to close when clicked outside

const loginform = new bootstrap.Modal('#loginmodal', {
  backdrop: 'static',
  keyboard: false
})

//show and hide password 

function showhidepassword() {

  var passwordformlogin = document.getElementById("pword");
  if (passwordformlogin.type == "password") {
    passwordformlogin.type = "text";
    document.getElementById('showhidepasswordicon').className = 'fa-solid fa-eye text-success'
  } else {
    passwordformlogin.type = "password";
    document.getElementById('showhidepasswordicon').className = 'fa-solid fa-eye-slash text-success'
  }
}

//registration modal preventing to close when clicked outside

const regform = new bootstrap.Modal('#regmodal', {
  backdrop: 'static',
  keyboard: false
})

//


//login demo


function login(){
    var usernameinput = document.getElementById('uname').value
    var passwordinput = document.getElementById('pword').value
    const alertPlaceholder = document.getElementById('loginfailedAlertPlaceholder')
    if( usernameinput == 'kodego' && passwordinput == 'kodego'){

      window.location.href='./dashboard.html'
    }
    else{

      
          const appendAlert = (message, type) => {
          const wrapper = document.createElement('div')
          wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible " role="alert" id="loginfailedalert" style="font-size: 12px">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
          ].join('')

          alertPlaceholder.append(wrapper)
      }

      appendAlert('Login Failed!', 'danger')
      document.getElementById('loginbtn').disabled = true;
      
    }
}

//checks if alert for failed login is already active

document.getElementById('uname').addEventListener('keydown', function(){

    if(document.getElementById("loginfailedalert")){
          document.getElementById('loginfailedalert').remove()
    } else {
      console.log('not existing')
    }   


})

document.getElementById('pword').addEventListener('keydown', function(){

  if(document.getElementById("loginfailedalert")){
        document.getElementById('loginfailedalert').remove()
  } else {
    console.log('not existing')
  }   


})


document.getElementById('pword').addEventListener('keydown', function(){

  if(document.getElementById("pword").value != ''){
        document.getElementById('loginbtn').disabled = false;
  } else {
    console.log('not existing')
  }   


})


//registration demo

//message will show if first name input was blank

document.getElementById('lnameregistration').addEventListener('focus', function(){

    if(document.getElementById('fnameregistration').value == ''){

        $('#fnamevalidator').collapse('show')
        document.getElementById("fnameregistration").style.borderWidth = "thin";
        document.getElementById("fnameregistration").style.borderColor = "red";
    }
    else{

      $('#fnamevalidator').collapse('hide')
      document.getElementById('fnameregistration').style.borderColor = 'green'
      document.getElementById("fnameregistration").style.borderWidth = "thin";
      document.getElementById("fnameregistration").style.color = "green";
    }


})

document.getElementById('fnameregistration').addEventListener('keydown', function(){

  if(document.getElementById('fnameregistration').value == ''){

      $('#fnamevalidator').collapse('show')
      document.getElementById("fnameregistration").style.borderWidth = "thin";
      document.getElementById("fnameregistration").style.borderColor = "red";
  }
  else{

    $('#fnamevalidator').collapse('hide')
    document.getElementById('fnameregistration').style.borderColor = 'green'
    document.getElementById("fnameregistration").style.borderWidth = "thin";
    document.getElementById("fnameregistration").style.color = "green";

  }


})


//message will show if last name input was blank


document.getElementById('unameregistration').addEventListener('focus', function(){

  if(document.getElementById('lnameregistration').value == ''){

      $('#lnamevalidator').collapse('show')
      document.getElementById("lnameregistration").style.borderWidth = "thin";
      document.getElementById("lnameregistration").style.borderColor = "red";
  }
  else{

    $('#lnamevalidator').collapse('hide')
    document.getElementById('lnameregistration').style.borderColor = 'green'
    document.getElementById("lnameregistration").style.borderWidth = "thin";
    document.getElementById("lnameregistration").style.color = "green";
  }


})

document.getElementById('lnameregistration').addEventListener('keydown', function(){

if(document.getElementById('lnameregistration').value == ''){

    $('#lnamevalidator').collapse('show')
    document.getElementById("lnameregistration").style.borderWidth = "thin";
      document.getElementById("lnameregistration").style.borderColor = "red";
}
else{

  $('#lnamevalidator').collapse('hide')
  document.getElementById('lnameregistration').style.borderColor = 'green'
  document.getElementById("lnameregistration").style.borderWidth = "thin";
  document.getElementById("lnameregistration").style.color = "green";
}


})

//message will show if user name input was blank

document.getElementById('emailregistration').addEventListener('focus', function(){

  if(document.getElementById('unameregistration').value == ''){

      $('#unamevalidator').collapse('show')
      document.getElementById("unameregistration").style.borderWidth = "thin";
      document.getElementById("unameregistration").style.borderColor = "red";
  }
  else{

    $('#unamevalidator').collapse('hide')
    document.getElementById('unameregistration').style.borderColor = 'green'
    document.getElementById("unameregistration").style.borderWidth = "thin";
    document.getElementById("unameregistration").style.color = "green";
  }


})

document.getElementById('unameregistration').addEventListener('keydown', function(){

if(document.getElementById('unameregistration').value == ''){

    $('#unamevalidator').collapse('show')
    document.getElementById("unameregistration").style.borderWidth = "thin";
    document.getElementById("unameregistration").style.borderColor = "red";
}
else{

  $('#unamevalidator').collapse('hide')
  document.getElementById('unameregistration').style.borderColor = 'green'
  document.getElementById("unameregistration").style.borderWidth = "thin";
  document.getElementById("unameregistration").style.color = "green";
}


})


function showhidepasswordreg() {

  var regpasswordformlogin = document.getElementById("pwordregistration");
  if (regpasswordformlogin.type == "password") {
    regpasswordformlogin.type = "text";
    document.getElementById('showhidepasswordiconreg').className = 'fa-solid fa-eye text-success'
  } else {
    regpasswordformlogin.type = "password";
    document.getElementById('showhidepasswordiconreg').className = 'fa-solid fa-eye-slash text-success'
  }
}


function showhidepasswordconfirmreg() {

  var regpasswordformlogin = document.getElementById("confirmpwordregistration");
  if (regpasswordformlogin.type == "password") {
    regpasswordformlogin.type = "text";
    document.getElementById('showhidepasswordiconconfirmreg').className = 'fa-solid fa-eye text-success'
  } else {
    regpasswordformlogin.type = "password";
    document.getElementById('showhidepasswordiconconfirmreg').className = 'fa-solid fa-eye-slash text-success'
  }
}

document.getElementById('pwordregistration').addEventListener('focus', function(){

  const collapseElementList = document.querySelectorAll('#createpasswordinstruction')
  const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
  

})

document.getElementById('pwordregistration').addEventListener('click', function(){

  $('#createpasswordinstruction').collapse('show')
  

})

//check if email is valid

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document.getElementById('pwordregistration').addEventListener('focus', function(){


    if(document.getElementById('emailregistration').value.match(mailformat)){

      
      $('#emailvalidator').collapse('hide');
      document.getElementById("emailregistration").style.borderWidth = "thin";
      document.getElementById('emailregistration').style.borderColor = 'green'
      document.getElementById('emailregistration').style.color = 'green'
    }
      
    else{

      $('#emailvalidator').collapse('show');
     
      document.getElementById('emailregistration').style.color = 'red'
      document.getElementById('emailregistration').style.borderColor = 'red'
      document.getElementById("emailregistration").style.borderWidth = "thin";
     
    }
})

document.getElementById('emailregistration').addEventListener('keydown', function(){


  if(document.getElementById('emailregistration').value.match(mailformat)){

    document.getElementById('emailregistration').style.borderColor = 'green';
  
    $('#emailvalidator').collapse('hide');
    document.getElementById("emailregistration").style.borderWidth = "thin";
    document.getElementById('emailregistration').style.borderColor = 'green'
    document.getElementById('emailregistration').style.color = 'green'
  }
  else{

    $('#emailvalidator').collapse('show');
    
    document.getElementById('emailregistration').style.color = 'red'
    document.getElementById('emailregistration').style.borderColor = 'red'
    document.getElementById("emailregistration").style.borderWidth = "thin";
   

  }
 
})

//check if password is greater than equal 8

document.getElementById('pwordregistration').addEventListener('keyup', function(){

    if(document.getElementById('pwordregistration').value.length >= 8){

        document.getElementById('validpassicon1').className = 'fa-solid fa-check text-success'
        localStorage.setItem('pwordlength','true');

      }
    else if(document.getElementById('pwordregistration').value.length < 8){

      document.getElementById('validpassicon1').className = 'fa-solid fa-triangle-exclamation'
      localStorage.setItem('pwordlength','false');
    }
  
})




//checks if password contains special chars



document.getElementById('pwordregistration').addEventListener('keyup', function(){

  let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


    var passwordcontent = document.getElementById('pwordregistration').value;

    if(specialChars.test(passwordcontent) == true){

      document.getElementById('validpassicon2').className = 'fa-solid fa-check text-success'
     localStorage.setItem('pwordchar','true');
    }
    else if (specialChars.test(passwordcontent) == false){

      document.getElementById('validpassicon2').className = 'fa-solid fa-triangle-exclamation'
      localStorage.setItem('pwordchar','false');
    };

})


//checks if password contains numbers


document.getElementById('pwordregistration').addEventListener('keyup', function(){

  var hasNumber = /\d/;



  var passwordcontent = document.getElementById('pwordregistration').value;

  if(hasNumber.test(passwordcontent) == true){

    document.getElementById('validpassicon3').className = 'fa-solid fa-check text-success'
    localStorage.setItem('pwordnum','true');
  }
  else if (hasNumber.test(passwordcontent) == false){

    document.getElementById('validpassicon3').className = 'fa-solid fa-triangle-exclamation'
    localStorage.setItem('pwordnum','false');
  };

})


document.getElementById('confirmpwordregistration').addEventListener('focus', function(){




  $('#createpasswordinstruction').collapse('hide')

})


document.getElementById('pwordregistration').addEventListener('keyup',function(){

    var pwordlengthstatus = localStorage.getItem('pwordlength')
    var pwordcharstatus = localStorage.getItem('pwordchar')
    var pwordnumstatus = localStorage.getItem('pwordnum')

    if (pwordlengthstatus == 'true' && pwordcharstatus == 'true' && pwordnumstatus == 'true'){

      document.getElementById('pwordregistration').style.color = 'green'
      document.getElementById('pwordregistration').style.borderColor = 'green'
      document.getElementById('viewpasswordiconreg').style.borderColor = 'green'
    }
    else{

      document.getElementById('pwordregistration').style.color = 'red'
      document.getElementById('pwordregistration').style.borderColor = 'red'
      document.getElementById('viewpasswordiconreg').style.borderColor = 'red'
    }
})

//check if password matches

document.getElementById('confirmpwordregistration').addEventListener('keyup', function(){


      if(document.getElementById('confirmpwordregistration').value == document.getElementById('pwordregistration').value){

        $('#passwordmatchvalidator').collapse('hide')
        document.getElementById("confirmpwordregistration").style.borderWidth = "thin";
        document.getElementById('confirmpwordregistration').style.borderColor = 'green'
        document.getElementById('confirmpwordregistration').style.color = 'green'
        document.getElementById('viewpasswordiconconfirmreg').style.borderColor = 'green'

      }
      else{

        $('#passwordmatchvalidator').collapse('show')
        document.getElementById("confirmpwordregistration").style.borderWidth = "thin";
        document.getElementById('confirmpwordregistration').style.borderColor = 'red'
        document.getElementById('confirmpwordregistration').style.color = 'red'
        document.getElementById('viewpasswordiconconfirmreg').style.borderColor = 'red'

      }

 

})



//Go up button for home page

var btn = $('#goupbtn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});



