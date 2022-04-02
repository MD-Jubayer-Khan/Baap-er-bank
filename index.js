document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail  = emailField.value;
    //get user password
    const passworField = document.getElementById('user-password');
    const userPassword = passworField.value;
    if(userEmail == 'jubayer@gmail.com' && userPassword == 'secret'){
        window.location.href = 'bank.html'
    }
    else{
      alert('Please enter your email and password')
    };

});
