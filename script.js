let a = "001", b = "002";
const d = "https://mp3quran.net/api/quran_pages_svg/dark/",
w = "https://mp3quran.net/api/quran_pages_svg/";
let m = w;
function next() {
    a++;
    move();
}
function prev() {
    a--;
    move();
}
document.addEventListener("keydown", function (event){ 
    if(event.key == "ArrowLeft")next();
    if(event.key == "ArrowRight")prev();
})
function move() {
    a = parseInt((a<1) ? 604: (a>604)? 1:a)
    a = (a < 10) ? '00' + a : (a < 100) ? '0' + a : a;
    document.getElementById("val").innerHTML = a;
    console.log(a);
    b = eval(a + "+1");
    b = (b < 10) ? '00' + b : (b < 100) ? '0' + b : b;
    document.getElementById("img1").src = m + a + ".svg";
    document.getElementById("img2").src = m + b + ".svg";
}
function jump(){
document.getElementById("hide").style.display = (document.getElementById("hide").style.display === "none") ? "block" :"none"; 
    }
function surath(){
    const sur = document.getElementById("sura");
    a = sur.options[sur.selectedIndex].value ;
    move();
}
function juz(){
    z = document.getElementById("juz").value;
    a = ((z*20)-20)+1;
    move();
}
function page(){
    const pge = document.getElementById("page");
    a = pge.value;
    move()
}
// function dark() {
//     let all = document.querySelectorAll('*');
//     let border = document.querySelectorAll(".add");
//     var jump = document.querySelector(".jump");
//     var span = document.querySelector(".span");
//     var div = document.querySelector(".div");
//     all.classList.toggle("dark-mode");
//     border.classList.toggle("d-border");
//     jump.classList.toggle("d-jump");
//     span.classList.toggle("d-span");
//     div.classList.toggle("d-div")
// }
function dark() {
    let all = document.querySelectorAll('*');
    let border = document.querySelectorAll(".add");
    var jump = document.querySelector(".jump");
    var span = document.querySelector(".span");
    var div = document.querySelectorAll(".div");
    let bulb = document.querySelector(".bulb");
    div.forEach(element => {
        element.classList.toggle("d-div");
    });
    all.forEach(element => {
        element.classList.toggle("dark-mode");
    });
    border.forEach(element => {
        element.classList.toggle("d-border");
    });
    if (jump) jump.classList.toggle("d-jump");
    if (span) span.classList.toggle("d-span");
    if (m === w) {m = d;} else {m = w;}
    document.getElementById("img1").src = m + a + ".svg";
    document.getElementById("img2").src = m + b + ".svg";
    bulb.src = (bulb.src.includes("off.png")) ? "on.png" : "off.png";
}
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === "b" || event.key === "B")) jump(); 
    if (event.ctrlKey && (event.key === "m" || event.key === "M")) dark();
});
