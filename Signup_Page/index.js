// Creating global variables to reduce redundancy
const first_name = document.querySelector("#first_name")
const last_name = document.querySelector("#last_name")
const user_password = document.querySelector("#user_password")
const confirm_password = document.querySelector("#confirm_password")
const submit_button = document.querySelector("#submit_button")
const greetingOutput = document.querySelector("#greeting")

//Starts code flow by starting the main function
document.addEventListener("DOMContentLoaded", function() {
    console.log("HTML document is loaded");
    main();
});

//Controls the submit button
function main(){
    submit_button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        confirm_password_check();
    })
}

//Checks if the password and confirm password fields are the same
function confirm_password_check() {
    if (user_password.value === confirm_password.value) {
        confirm_password.style.color = "black";
        greetingOutput.style.color="black";
        greetingOutput.innerText = `Status: Checking credentials`;
       credentials_check();
    } else {
        confirm_password.style.color = "red";
        greetingOutput.innerText = "Passwords do not match";
    }
}

//Checks if username and password match stored username and password
function credentials_check(){
    if (first_name.value=="ascrion" && last_name.value=="rocks" && 
        user_password.value=="12345678")
        {   greetingOutput.style.color="green";
            greetingOutput.innerText = `Status: Credentials Match, Redirecting...`;
            admin_redirect();}
    else{
        greetingOutput.style.color="red";
        greetingOutput.innerText = `Status: Wrong password`;
    }
}

//Redirects user to admin dashboard
function admin_redirect()
{
    window.location.href = "../Admin_Dashboard/dashboard.html";
}