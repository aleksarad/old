var darkToggle = document.getElementById("darkToggle");

var body = document.querySelector("body");
var nav = document.querySelector("nav");
var link1 = document.getElementsByTagName("a")[0];
var link2 = document.getElementsByTagName("a")[1];
var mail = document.getElementById("emailicon");



darkToggle.addEventListener("click", function()
{body.classList.toggle("dark");
nav.classList.toggle("darknav");
link1.classList.toggle("whitenavlink");
link2.classList.toggle("whitenavlink");
mail.classList.toggle("mailicon");
})