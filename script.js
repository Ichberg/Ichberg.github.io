let contactlink = document.querySelector("#contactlink");
let fourthItem = document.querySelector("#fourthItem");

contactlink.addEventListener("click", navigateFourth, false);
function navigateFourth(e){
    fourthItem.scrollIntoView({
        behavior: "smooth"});
        }

let sobremilink = document.querySelector("#sobremilink");
let secondItem = document.querySelector("#secondItem");
        
        sobremilink.addEventListener("click", navigateSecond, false);
        function navigateSecond(e){
            secondItem.scrollIntoView({
                behavior: "smooth"});
                }
        
        
 function openWindow1() {
window.open("https://www.instagram.com/natashaakan");
                  }

function openWindow2() {
    window.open("https://github.com/Ichberg");}

    function openWindow3() {
     window.open("mailto:nati.gr@gmail.com");}