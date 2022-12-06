var donutIncrement = document.getElementById("donutIncrement");
var counterElement = document.getElementById("counter");
var autoClickerCounting = document.getElementById("autoClickerCounting")
var autoClickerButton = document.getElementById("autoClickerButton")
var multiplierButton = document.getElementById("multiplierButton")
var multiplierCounter = document.getElementById("multiplierCounter")

var count = 0;
var countAuto = 0;
var countMulti = 0;

donutIncrement.addEventListener("click",(e) =>{
    count++;
    counterElement.innerHTML = count + " Donuts Made"
})

autoClickerButton.addEventListener("click",(e)=>{
    if(count >= 100){
    countAuto++;
    count -= 100;
    autoClickerCounting.innerHTML = countAuto + " Auto Clickers Purchased"
    
    
    setInterval(() =>{
        count++;
        counterElement.innerHTML = count + " Donuts Made"
    },1000)
} else{
    alert("YOU DONT HAVE ENOUGH DONUTS :(")
    return
}
})

multiplierButton.addEventListener("click",(e)=>{
    if(count>=100){
    countMulti++;
    count-= 100;
    count = Math.pow(1.2, countMulti);
    

    multiplierCounter.innerHTML = countMulti + " Donut Multipliers Purchased"
    } else{
        alert("YOU DONT HAVE ENOUGH DONUTS :(")
        return
    }
})

resetButton.addEventListener("click", (e)=>{

    location.reload();
})

