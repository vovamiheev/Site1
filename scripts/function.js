/*function openNav() {
    document.getElementById("myNav").style.width = "300px";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}*/
$( document ).ready(function() {
    $("#buttonclick, .closebtn, .block").click(function () {
        $(".navigation").toggleClass('opened');
        $("body").toggleClass('open');
        $(".block").toggleClass('blocking');
    });
});