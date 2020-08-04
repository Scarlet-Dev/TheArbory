(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('')
        ])
    }
})


// $(document).ready(() => {
//     console.log('ready')
//     $("#head_wrapper").load("\\components\\_head.html");
//     $("#navbar_wrapper").load("../components/_navbar.html");
//     $("#footer_wrapper").load("../components/_footer.html");
// })


// var loginModal = document.querySelector(".modal");
// var loginBtn = document.getElementById("login-button");
// var closeSpan = document.getElementsByClassName("close");

// loginBtn.addEventListener("click", function(){
//     loginModal.classList.toggle("show-modal");
// })

// loginBtn.onclick = function(){
//     loginModal.style.display = "block";
// }

// closeSpan.onclick = function(){
//     loginModal.style.display = "none";
// }
