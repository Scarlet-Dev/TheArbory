class ArborData {
    constructor(name, age, location, email, password){
        this.name = name;
        this.age = age;
        this.location = location;
        this.email = email;
        this.password = password;
    }
};
const arbor_data = new Array();

function newUser(form_name, form_age, form_location, form_email, form_password){
    var new_user = new ArborData(form_name, form_age, form_age, form_location,
        form_email, form_password);
    
    arbor_data.push(JSON.stringify(new_user));
    
}

function checkLogin(form_username, form_password){
    var checkUser = arbor_data.find();
}

function storeData(){
    localStorage.setItem('ArborStorage', JSON.stringify(arbor_data));
}

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
