
let mainresult=JSON.parse(localStorage.getItem('mainresult'))
||{
        win:0,
        losses:0,
        ties:0
    };

/* if (!mainresult){
    mainresult={
        win:0,
        losses:0,
        ties:0
    };
} */

function pickmove(){
     let computerchoice='';
const randomnum = Math.random();
    if (randomnum>=0 && randomnum<0.33){
        computerchoice='Rock';}
        else if (randomnum>=0.33 && randomnum<0.67){
            computerchoice='Paper';
    }else {
        computerchoice='Scissor'
    }
   return computerchoice;
}
function finalresult(userchoice){
    let computermove =pickmove();
   let result='';
   if(userchoice==='Rock'){
   if(computermove==='Rock'){
    result='its tie';
   }else if(computermove==='Paper'){
    result='you lose';}
    else{result='you win';}}
    else if(userchoice==='Paper'){
        if(computermove==='Paper'){
        result='its tie';
       }else if(computermove==='Scissor'){
        result='you lose';}
        else{result='you win';}}
        else if(userchoice==='Scissor'){
            if(computermove==='Scissor'){
        result='its tie';
       }else if(computermove==='Rock'){
        result='you lose';}
        else{result='you win';}
        }
        if(result==='you win'){
            mainresult.win+=1;
        }else if(result==='you lose'){
            mainresult.losses+=1;
        }else{
            mainresult.ties+=1;
        }

localStorage.setItem('mainresult',JSON.stringify(mainresult));

   alert(`you chose ${userchoice}. computer chose ${computermove}. ${result} 
    Wins: ${mainresult.win}, Losses: ${mainresult.losses}, Ties: ${mainresult.ties}`);
}
