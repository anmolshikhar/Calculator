// // let expresstion = document.getElementById("input");
// // let btn = document.getElementById("btn");
// // btn.addEventListener("click",function calculate(){
// //     let result = math.evaluate(expresstion.value);
// //     console.log(result);
// // })
let expresstion = document.getElementById("input");
let btns = document.getElementsByClassName("inbtn");
let reset = document.getElementById("Rbtn");
let eual = document.getElementById("Equal");
let clr = document.getElementById("clr");
for (let btn of btns) {
    btn.addEventListener("click", function calculate() {
        expresstion.value+=btn.value;

    })
}
reset.addEventListener("click", function reset(){
    expresstion.value = "";
})
eual.addEventListener("click", function calculate() {
  let result = math.evaluate(expresstion.value);
    expresstion.value = result;
})
clr.addEventListener("click", function clear() {
    expresstion.value = expresstion.value.slice(0, -1);
})

