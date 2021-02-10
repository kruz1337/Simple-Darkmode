//Enable dark Mode function
function f_edarkmode() {
document.body.classList.toggle("dark-mode");

document.getElementById("ddarkmode").style.display = "block";
document.getElementById("edarkmode").style.display = "none";

//Save dark mode enabled in local storage 
localStorage.setItem('darkmode', "true");
}

//Disable dark mode function
function f_ddarkmode() {
document.body.classList.toggle("dark-mode");

document.getElementById("ddarkmode").style.display = "none";
document.getElementById("edarkmode").style.display = "block";

//Save dark mode disabled in local storage
localStorage.setItem('darkmode', "false");
}

//Check dark mode enabled on website opened
window.onload=function dedarkmode() {
var darkmode = localStorage.getItem("darkmode");
     //Start enable dark mode function if dark mode value true in local storage
     if (darkmode == "true") 
     {
		f_edarkmode();
     }
     else 
     {
		//Don't do anything because the white mod is on the body
     }
 };
 