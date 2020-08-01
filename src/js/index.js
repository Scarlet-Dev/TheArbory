import './jquery.js'

$(document).ready(() => {
    console.log('ready')
    $("#head_wrapper").load("../components/_head.html");
    $("#navbar_wrapper").load("../components/_navbar.html");
    $("#footer_wrapper").load("../components/_footer.html");
})