let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".newgame")
let newgame=document.querySelector("#newgame1")
let msg=document.querySelector(".hide1")
let turno=true;

const winpatt=[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],

];
//use function 
//box diseble
const diseble =()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
//box eneble
const enable =()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerHTML=""

        
    }
};

//worl reset button
const resetgame=()=>{
    turno=true;
    enable();
    msg.classList.add("hide1")
    newgame.classList.add("hide1")
}
reset.addEventListener("click",resetgame);
//new game button
newgame.addEventListener("click",resetgame)


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
    
            box.innerHTML="o"
           box.classList.add("yellow")
            turno=false
            
        }
        else{
            box.innerHTML="x"
            turno=true
            box.classList.remove("yellow")
        }
        box.disabled=true;
        chackwinner();
    
    });
    
});



//print winner
const showwin=(winner)=>{
    
    newgame.classList.remove("hide1")
    msg.classList.remove("hide1")
    msg.innerHTML=`congratulations winner is ${winner}`
}

const chackwinner=()=>{
    for(let patt of winpatt){
        let pos1=boxes[patt[0]].innerHTML;
        let pos2=boxes[patt[1]].innerHTML;
        let pos3=boxes[patt[2]].innerHTML;
        if(pos1 !="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                diseble();
                showwin(pos1);
                console.log(patt)
                
                
                
            }
           
        }

    }
}
 

