 const core=localStorage.getItem("leaderboard");
 let array = core ? JSON.parse(core) : { Wins: 0, losses: 0, tie: 0 };

function reset(){
    array.Wins=0;
    array.losses=0;
    array.tie=0;

     localStorage.setItem("leaderboard", JSON.stringify(array));

    let reply=document.querySelector('.para');
     let replies=reply.innerHTML=`<div>Wins : ${array.Wins}</div> <div>losses :  ${array.losses} </div> <div>tie :  ${array.tie}</div>`;
}
function Computermove() {
    const number=Math.random();
    let computermove ="";
    
    if (number>=0 && number<1/3){
        computermove="Rock";
    }else if (number>=1/3 && number<2/3){
        computermove="Paper";
    }else if(number>=2/3 && number< 1){
        computermove="Scissor";
    }
    return computermove;
}

function playerMove(move){

    let result='';
    const computermove=Computermove();

    if(move==='Rock'){

        if(move===computermove){
            result="tie";
        }else if(computermove==="Paper"){
            result="You lose"
        }else{
            result="You win"
        }

    }else if(move==='Paper'){

        if(move===computermove){
        result="tie";
    }else if(computermove==="Rock"){
        result="You win"
    }else{
        result="You lose"
    }

    }else if(move==='Scissor'){
     
        if(move===computermove){
        result="tie";
    }else if(computermove==="Rock"){
        result="You lose"
    }else{
        result="You win"
    }

    }
    score(result);

    let reply=document.querySelector('.para');
     let replies=reply.innerHTML=`<p>you choose <span class="color"> ${move} </span> computer choose <span class="color">${computermove}</span> The result is <span class="color">${result}</span></p>
     <div>Wins : ${array.Wins}</div> <div>losses :  ${array.losses} </div> <div>tie :  ${array.tie}</div>`;
}


function score(result){
 if(result==="You win"){
    array.Wins+=1;
 }else if(result==="You lose"){
    array.losses+=1;
 }
 if(result==="tie"){
    array.tie+=1;
 }

 localStorage.setItem( "leaderboard",JSON.stringify(array));
}


function show(array){
document.querySelector('.para').innerHTML = `
<div>Wins : ${array.Wins}</div>
<div>losses : ${array.losses}</div>
<div>tie : ${array.tie}</div>
`;}

show(array);


/* function convertTofarenheit(celcius){
            let farenheit=(celcius*9/5)+32;
            return console.log(farenheit);
}
convertTofarenheit(25)

function convertTocelcius(faren){
    let celcius=(faren-32)*5/9;
    return console.log(celcius);
}
convertTocelcius(86)


function converTtemp(temp , unit){
    
        if(unit==='f'||unit==='F'){
            let celcius=(temp-32)*5/9;
            return console.log(celcius);
        }else if(unit==='c'||unit==='C'){
            let farenheit=(temp*9/5)+32;
            return console.log(farenheit);
        }
}
converTtemp(86, 'F')


function distance(long , unit){
    
        if(unit==='km'||unit==='Km'){
            console.log(long*1.6);
        }else if(unit==='miles'||unit==='Miles'){
            console.log(long/1.6);
        }else if((unit !='km' || unit != 'Km')&&(unit != 'miles' || unit !='Miles')){
            console.log(`invalid unit : ${unit}`)
        }
}
distance(50, 'ilb') */





/* function Rock(){
    let result="";
    const usermove="Rock"
    let computermove=Computermove();

    if(usermove===computermove){
        result="tie";
    }else if(computermove==="Paper"){
        result="You lose"
    }else{
        result="You win"
    }
    return `computer choose ${computermove} ${result}`;
}
function paper(){
    let result="";
    const usermove="Paper"
    let computermove=Computermove();

    if(usermove===computermove){
        result="tie";
    }else if(computermove==="Rock"){
        result="You win"
    }else{
        result="You lose"
    }
     return `computer choose ${computermove} ${result}`;
}
function scissor(){
    let result="";
    const usermove="Scissor"
    let computermove=Computermove();

    if(usermove===computermove){
        result="tie";
    }else if(computermove==="Rock"){
        result="You lose"
    }else{
        result="You win"
    }
     return `computer choose ${computermove} ${result}`;
} */






/* const hour = 7;
const name ='Umar ihtisham'

function counting(hour,name) {
    // 1. Use 'let' instead of 'const' so the variable can be changed
    let stri = ''; 
    
    if (hour >= 6 && hour <= 12) {
        stri = 'good morning';
    } else if (hour >= 13 && hour <= 17) {
        stri = 'good afternoon';
    } else {
        stri = 'good evening';
    }

    // 2. Correct the method name to 'getElementById'
    // 3. Use '.innerText' or '.innerHTML' to set the text
    return document.getElementById('timing').innerText = `${stri}  ${name}! `;
}
counting(hour,name);


const age = 3;


function discounting(age) {

    const isHoliday=new Date().getDay()===0||5;

   /*  console.log(day); */

   /*  let discount= 10; * /

let discount =(age <= 6 || age >= 65) && isHoliday ? 10 : 0;
    
/*     if ((age <= 6 || age >= 65) && isHoliday) {
        return discount;
    } else {
         return '';
    } * /

         return discount;

}
console.log(discounting(age));
 

let full={
    wote:23,
    shote:34
}
console.log(full['wote'])*/