/* 0=rock
    1=paper
    2=scissors */

let score="";
let userScore=0;
let compScore=0;

function computerPlay(){
    let num=getRandom();
    console.log("cumputer "+num);
    return num;
}
function getRandom(){
    return Math.floor(Math.random()*3);
}

function playerSelection(){
    let choice=prompt("Please enter the number: ")
    choice=choice.toLowerCase();
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
    else{
        console.log("please enter \"rock\" or \"paper\" or \"scissors\"");
    }
}

function compare(user, comp){
    console.log(user);
    if(user==undefined){
        start();
    }
    else if(user==comp){
        console.log("draw");
        return 0;
    }
    else if(user==0){
        if(comp==1){
            console.log("loss");
            return -1;
        }
        else{
            console.log("win");
            return 1;
        }
    }
    else if(user==1){
        if(comp==2){
            console.log("loss");
            return -1;
        }
        else{
            console.log("win");
            return 1;
        }
    }
    else{
        if(comp==0){
            console.log("loss");
            return -1;
        }
        else{
            console.log("win");
            return 1;
        }
    }
}

function start(){
    for(i=1;i<=5;i++)
    {
    let result=compare(playerSelection(), computerPlay());
    if(result==1){
        userScore+=1;
    }
    else if(result==-1){
        compScore+=1;
    }
    }
    score=userScore+ " : " + compScore;
    console.log("Score: "+ score);
}

console.log("working");

start()