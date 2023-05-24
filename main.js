let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    return document.getElementById('hi').innerHTML=`your username is ${username} you password is ${password} your email is ${email}`
})
