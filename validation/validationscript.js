let email = document.querySelector("#email");
let password = document.querySelector("#password")
let form    = document.querySelector("form");
form.addEventListener("submit", function(dets){
    dets.preventDefault();
    document.querySelector("#emailMessage").textContent=" ";
    document.querySelector("#passwordMessage").textContent=" ";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^[\w@#$%^&*!]{6,}$/;
    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    if(!emailans){
            document.querySelector("#emailMessage").textContent=" enter something vaild";
    
        document.querySelector("#emailMessage").style.display = "initial";
    }
    

    if(!passwordans){
        document.querySelector("#passwordMessage").textContent="enter something vaild ";
        document.querySelector("#passwordMessage").style.display = "initial";
    }

})