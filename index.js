const numbers=document.querySelectorAll('.numbers');
const result=document.querySelector('.result span');
const sign=document.querySelectorAll('.sign');
const equals=document.querySelector('.equals');
const clearr=document.querySelectorAll('.clear');
const percent=document.querySelector('.percent');
const negativenumbers=document.querySelector('.negative');

let firstvalue="";
let secondvalue="";
let isfirstvalue=false;
let issecondvalue=false;
let signs="";
let resultvalue=0;
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click',(e) =>{
        let atr = e.target.getAttribute('value');
        if(isfirstvalue===false){
            getfirstvalue(atr)
        }
        else if(issecondvalue==false){
            getsecondvalue(atr)
        }
    })
}
function getfirstvalue(el){
    result.innerHTML="";
    firstvalue += el;
    result.innerHTML = firstvalue;
    firstvalue = +firstvalue;
}

function getsecondvalue(el){
    if(firstvalue !="" && sign!=""){ 
    secondvalue += el;
    result.innerHTML= secondvalue;
    secondvalue = +secondvalue;
    } 
}
function getsign(){
    for(let i=0; i < sign.length ; i++){
        sign[i].addEventListener('click', (e) =>{
                signs = e.target.getAttribute('value');
                isfirstvalue=true;
        })
    }
}
getsign();
equals.addEventListener('click' ,()=>{
    result.innerHTML="";
    if(signs==="+"){
        resultvalue= firstvalue +secondvalue;
    }else if(signs==="-"){
        resultvalue= firstvalue - secondvalue;
    }else if(signs==="*"){
        resultvalue= firstvalue * secondvalue;
    }else if(signs==="/"){
        resultvalue= firstvalue /secondvalue;
    }
    result.innerHTML= resultvalue;
    firstvalue = resultvalue;
    secondvalue="";
})
function checkresultlength(){
    resultvalue= JSON.stringify(resultvalue);
    if(resultvalue.length >=8){
        resultvalue=JSON.parse(resultvalue);
        result.innerHTML= resultvalue.toFixed(5);
    }
}
percent.addEventListener('click',(e)=>{
    result.innerHTML="";
    if(firstvalue!=""){
        resultvalue= firstvalue/100;
        firstvalue=resultvalue;
     } 
    if(firstvalue!="" && secondvalue!="" && sign!="" ){
        resultvalue= resultvalue/100;
       } 
    result.innerHTML= resultvalue;
})
clearr.addEventListener("click" ,()=>{
    firstvalue="";
    isfirstvalue=false;
    secondvalue="";
    issecondvalue=false;
    sign="";
    resultvalue=0;
    result.innerHTML=0;
})
negativenumbers.addEventListener('click' ,()=>{
    result.innerHTML= "";
    if(firstvalue!=""){
     resultvalue= -firstvalue;
     firstvalue = -resultvalue;
    } 
    if(firstvalue!="" && secondvalue!="" && sign!=""){
     resultvalue = -resultvalue;
    }
    result.innerHTML=resultvalue;
 })