let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");
let turn0=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0==true){
            box.innerText="O";
            let c=box;
            c.style.color="red";
            turn0=false;
        }
        else{
            box.innerText="X";
            let c=box;
            c.style.color="green";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(pos1)=>{
    msg.innerHTML=`<strong>Congratulations ,winner is ${pos1} </strong>`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){

        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
