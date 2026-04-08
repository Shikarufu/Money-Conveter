const convert=document.getElementById("convert");
const reset=document.getElementById("reset");
const temp1=document.getElementById("temp1");
const temp2=document.getElementById("temp2");
const clarify=document.getElementById("clarify");
const result=document.getElementById("result");
const msg=document.getElementById("msg");
const input=document.getElementById("input");

input.disabled=true;

function check(){
    if(temp1.value && temp2.value){
        input.disabled=false;
    }
    else{
        input.disabled=true;
    }
}
temp1.addEventListener("change",check);
temp2.addEventListener("change",check);

function funConvert(){
    
    const Input = input.value.trim();
    if (Input == "" || isNaN(Input)) {
        msg.innerText = "Please select option first! before you input and click the button";

        return;
    }
    //cambodia to all
    if(temp1.value =="cambodia" && temp2.value == "japan"){
        const solve=Number(input.value *0.0396);
        const num=input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Yens";
    }
    else if(temp1.value == "cambodia" && temp2.value=="china"){
        const solve=Number(input.value *0.0017);
        const num=input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Yuans";
    }
    else if(temp1.value == "cambodia" && temp2.value=="uk"){
        const solve=Number(input.value * 0.00019);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Pounds";
    }
    else if(temp1.value == "cambodia" && temp2.value == "south korea"){
        const solve=Number(input.value * 0.3697);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Wons";
    }
    else if(temp1.value == "cambodia" && temp2.value == "singapore"){
        const solve=Number(input.value * 0.00032);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "cambodia" && temp2.value == "mexico"){
        const solve=Number(input.value * 0.0044);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "cambodia" && temp2.value == "philippines"){
        const solve=Number(input.value * 0.0149);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Pesos";
    }
    else if(temp1.value == "cambodia" && temp2.value == "russia"){
        const solve=Number(input.value * 0.0196);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Rubles";
    }
    else if(temp1.value == "cambodia" && temp2.value == "usa"){
        const solve=Number(input.value / 4000);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Dollars";
    }
    else if(temp1.value == "cambodia" && temp2.value == "indonesia"){
        const solve=Number(input.value * 4.2503);
        const num = input.value;
        clarify.innerText="Your input: "+num+" Riels"
        result.innerText="Result: "+solve.toFixed(2)+" Rupiahs";
    }

}
convert.addEventListener("click",funConvert);

function funReset(){
    temp1.value="";
    temp2.value="";
    msg.innerText="";
    result.innerText="";
    clarify.innerText="";
    input.value="";
    temp1.selectedIndex=0;
    temp2.selectedIndex=0;
    input.disabled=true;

}
reset.addEventListener("click",funReset);


function checkSelection(){
    if(temp1.value == "cambodia" && temp2.value == "cambodia"
        ||
        temp1.value == "japan" && temp2.value == "japan"
        ||
        temp1.vaue == "china" && temp2.value == "china"
        ||
        temp1.value == "uk" && temp2.value == "uk"
        ||
        temp1.value == "south korea" && temp2.value == "south korea"
        ||
        temp1.value == "singapore" && temp2.value == "singapore"
        ||
        temp1.value == "mexico" && temp2.value == "mexico"
        ||
        temp1.value == "philippines" && temp2.value == "philippines"
        ||
        temp1.value == "russia" && temp2.value == "russia"
        ||
        temp1.value == "indonesia" && temp2.value == "indonesia"
        ||
        temp1.value == "usa" && temp2.value == "usa"
        


    ){
        msg.innerText="Sorry! We can't solve it for you.";
        input.placeholder="Can't input the value";
        input.disabled=true;
        convert.disabled=true;
        reset.disabled=true;
        clarify.innerText="No Answer";
        result.innerText="No Answer";
    }
    else{
        input.disabled=false;
        convert.disabled=false;
        reset.disabled=false;
         msg.innerText="";
         input.placeholder="Enter amount of money";
        clarify.innerText="";
        result.innerText="";
    }
}
temp1.addEventListener("change",checkSelection);
temp2.addEventListener("change",checkSelection);