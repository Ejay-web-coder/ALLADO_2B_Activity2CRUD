function validateLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    axios.post('../controllers/user.php', {
        uname: email,
        pword: password
    }).then( (response) => {
        console.log(response.data);
        if (response.data == "valid") {
            //pupunta sa home page
            window.location.href = "index.html";
        } else {
            alert("Invalid user account!!");
        }
    }).catch( (error) => {
        alert("Error encountered while validating your account!");
    });
}