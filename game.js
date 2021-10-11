/* 0=rock
    1=paper
    2=scissors */

let score="";
let userScore=0;
let compScore=0;
let score2='';
let temp=[];

function computerPlay(){
    let num=getRandom();
    /* console.log("cumputer "+num); */
    return num;
}
function getRandom(){
    return Math.floor(Math.random()*3);
}

function playerSelection(buttonid){
    /* let choice=prompt("Please enter the number: ") */
    //choice must be picked by button:
    choice=buttonid
    /* choice=choice.toLowerCase(); */
    if(choice=="rock"){
        return 0;
    }
    /* return parseInt(prompt("Please enter the number: ")); */
    else if(choice=="scissors"){
        return 2;
    }
    else if(choice=="paper"){
        return 1;
    }
    /* else{
        console.log("please enter \"rock\" or \"paper\" or \"scissors\"");
    } */
}

function compare(user, comp){
    /* console.log(user); */
    if(user==undefined){
        start();
    }
    else if(user==comp){
        /* console.log("draw"); */
        return 0;
    }
    else if(user==0){
        if(comp==1){
            /* console.log("loss"); */
            return -1;
        }
        else{
            /* console.log("win"); */
            return 1;
        }
    }
    else if(user==1){
        if(comp==2){
            /* console.log("loss"); */
            return -1;
        }
        else{
            /* console.log("win"); */
            return 1;
        }
    }
    else{
        if(comp==0){
            /* console.log("loss"); */
            return -1;
        }
        else{
            /* console.log("win"); */
            return 1;
        }
    }
}

function start(id){
    /* console.log("start triggered"); */
    userScore=0;
    compScore=0;
    for(i=1;i<=5;i++)
    {
    let result=compare(playerSelection(id), computerPlay());
    if(result==1){
        userScore+=1;
    }
    else if(result==-1){
        compScore+=1;
    }
    }
    score=userScore+ " : " + compScore;
    console.log("Score: "+ score);
    temp[0]=userScore;
    temp[1]=compScore;
    if(userScore>compScore){
        temp[2]=1;
    }
    else if(userScore<compScore){
        temp[2]=0;
    }
    else if(userScore==compScore){
        temp[2]=2;
    }
    
    return temp;
}

function makeScore(scorelist){
    score2=scorelist[0]+ " : " + scorelist[1];
    console.log("Score2: "+ score2);
    return score2;
}

function checkWin(list){
    if (list[2]==0){
        return "The ai overlords have beaten you";
    }
    else if (list[2]==1){
        return "You won, for now";
    }
    else{
        return "its a draw, the ai has cought up, soon..."
    }
}

const buttons = document.querySelectorAll("button");
const result= document.querySelector(".resultbox");
const resulttext= document.querySelector(".resulttext");
let win=[];

buttons.forEach((button)=>{

    button.addEventListener('click', ()=>{
    win=start(button.id);
    result.textContent="Final Score is: " + makeScore(win);
    resulttext.textContent=checkWin(win); 
    });

    button.addEventListener('mouseover', (e)=>{
    e.target.style.background= "rgba(3, 100, 3, 0.582)";
    });
    button.addEventListener('mouseout', (e)=>{
        e.target.style.background= "";
        });
});

//imrove it


