let expresstion = document.getElementById("input");
let btn = document.getElementById("btn");
btn.addEventListener("click",function calculate(){
    let result = math.evaluate(expresstion.value);
    console.log(result);
})