// // let expresstion = document.getElementById("input");
// // let btn = document.getElementById("btn");
// // btn.addEventListener("click",function calculate(){
// //     let result = math.evaluate(expresstion.value);
// //     console.log(result);
// // })
//let expresstion = document.getElementById("input");
// let btns = document.getElementsByClassName("inbtn");
// let reset = document.getElementById("Rbtn");
// for (let btn of btns) {
//     btn.addEventListener("click", function calculate() {
//         expresstion.value+=btn.value;

//     })
// }
let expression = document.getElementById("input");
let btns = document.getElementsByClassName("inbtn");
let reset = document.getElementById("Rbtn");

for (let btn of btns) {
    btn.addEventListener("click", function () {
        expression.value += btn.value;
    });
}