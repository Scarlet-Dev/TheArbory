
var loginModal = document.querySelector(".modal");
var loginBtn = document.getElementById("login-button");
var closeSpan = document.getElementsByClassName("close");

loginBtn.addEventListener("click", function(){
    loginModal.classList.toggle("show-modal");
})

loginBtn.onclick = function(){
    loginModal.style.display = "block";
}

closeSpan.onclick = function(){
    loginModal.style.display = "none";
}
