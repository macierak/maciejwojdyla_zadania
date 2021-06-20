let sampleEle = document.querySelector(".sample");
let sample2 = document.querySelector(".s2");

function clickfun(){
    document.getElementById("sample").innerHTML = "Koordynaty po ruchu: X: " + event.x + " Y: " + event.y;

}
function movefun(){
    document.getElementById("s2").innerHTML = "Koordynaty po ruchu: X: " + event.x + " Y: " + event.y;

}
