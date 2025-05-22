let input=document.querySelector("input");
let btns=document.querySelectorAll("button");

btns.forEach(function (btn){
    btn.addEventListener("click",function(){
       let value=btn.innerText.trim();

// change the button style after it was clicked......

       btn.classList.add("button-pressed");
       setTimeout(()=>{
        btn.classList.remove("button-pressed");
       },100);
//  ............................................... .. 

       if(value=== "="){
        equal();
       }else if(value==="C"){
        clearDisplay();
       }else{
        press(value)
       }
    });
});
document.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        equal();
    }
})

function press(value){
    input.value +=value;
}

function clearDisplay(){
    input.value="";
}

function equal(){
    try{
    let expression=input.value;
    input.value=eval(expression);
    }catch{
        input.value="Error"
    }
}