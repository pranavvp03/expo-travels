var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');
var inputname = document.getElementById('inputname');
var inputdestination = document.getElementById('inputdestination');
var inputCity = document.getElementById('inputCity');

Form.addEventlistener('submit', e =>  {
    e.preventDefault();

    validateInputs();
});
var setError = (element, message) => {
    var inputcontrol = element.parentElement;
    var errorDisplay = inputControl.queryselector('.error');

    errorDisplay.innertext = message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');

}
var setSucces = element => {
    var inputcontrol = element.parentElement;
    var errorDisplay = inputcontrol.queryselector('.error');

    errorDisplay.innertext = '';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');


};


var validateInputs = () => {
    var inputEmailvalue  = inputEmail.value.trim();
    var inputPasswordvalue  = inputPassword.value.trim();
    var inputnamevalue  = inputname.value.trim();
    var inputdestinationvalue = inputdestination.value.trim();
    var inputCityvalue = inputCity.value.trim();


    if(inputEmailvalue === '') {
        setError(inputEmail, 'email is required');
    }else{
        setSucces(inputEmail);

    }
    if(inputEmailvalue === ''){
        setError(inputPassword, 'password is required');
    }else{
        setSucces(inputPassword);
    }
    if(inputnamevalue === ''){
        setError(inputname, 'password is required');
    }else{
        setSucces(inputname);
    }
    if(inputdestinationvalue === ''){
        setError(inputdestination, 'password is required');
    }else{
        setSucces(inputdestination);
    }
    if(inputCityvalue === ''){
        setError(inputCity, 'password is required');
    }else{
        setSucces(inputCity);
    }



};


