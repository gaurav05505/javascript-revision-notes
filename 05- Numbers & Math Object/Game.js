// 0 => rock
// 1 => paper
// 2 => secsor

let compHand; 
let user = 2;

compHand = (Math.floor(Math.random()*3));


if(user==1 && compHand==2){
    console.log("you --> paper");
    console.log("computer --> secsor");
    console.log("====================================");
    console.log("computer wonn");
}

else if(user==2 && compHand==1){
    console.log("you --> secsor");
    console.log("computer --> paper");
    console.log("====================================");
    console.log("you wonn");
}


// tieee 
else if(user==0 && compHand==0){
    console.log("you --> rock");
    console.log("computer --> rock");
    console.log("====================================");
    console.log("No one won");
}

else if(user==1 && compHand==1){
    console.log("you --> paper");
    console.log("computer --> paper");
    console.log("====================================");
    console.log("No one won");
}

else if(user==2 && compHand==2){
    console.log("you --> secsor");
    console.log("computer --> secsor");
    console.log("====================================");
    console.log("No one won");
}

else if(user==0 && compHand==1){
    console.log("you --> rock");
    console.log("computer --> paper");
    console.log("====================================");
    console.log("computer won");
}

else if(user==1 && compHand==0){
    console.log("you --> paper");
    console.log("computer --> rock");
    console.log("====================================");
    console.log("you won");
}

else if(user==0 && compHand==2){
    console.log("you --> rock");
    console.log("computer --> secsor");
    console.log("====================================");
    console.log("computer won");
}

else if(user==2 && compHand==0){
    console.log("you --> secsor");
    console.log("computer --> rock");
    console.log("====================================");
    console.log("you won");
}