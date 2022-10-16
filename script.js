
let turn = true;
let arr = [];
let turnShow = document.querySelector("#box > p");
// document.querySelectorAll(".grid-item")[0].classList.add("bgColor");

function showResult(x){
    if(x){
        turnShow.innerText = "Player X Won!";
    }else{
        turnShow.innerText = "Player O Won!";
    }
}
function highlight(x, y, z){
    document.querySelectorAll(".grid-item")[x].classList.add("bgColor");
    document.querySelectorAll(".grid-item")[y].classList.add("bgColor");
    document.querySelectorAll(".grid-item")[z].classList.add("bgColor");
}

function checkDraw(){
    if(arr.length == 9){
        for(let i =0; i<9; i++){
            if(arr[i] == undefined){
                return;
            }
        }
        turnShow.innerText = "It's a Draw, Play again!"
    }
}

function fun(value){
    arr[value] = turn;
    if(turn){
        turnShow.innerText = "Turn for O";
    }else{
        turnShow.innerText = "Turn for X";
    }
    if(turn){
        document.querySelectorAll(".grid-item")[value].innerText = "X";
    }else{
        document.querySelectorAll(".grid-item")[value].innerText = "O";
    }

    turn = !turn;
    // console.log(arr.length);

    //code to check win situation
    if(arr[0] != undefined && arr[0] == arr[1] && arr[1] == arr[2]){
        showResult(arr[0]);
        highlight(0, 1, 2);
        return;
    }else if(arr[3] != undefined && arr[3] == arr[4] && arr[4] == arr[5]){
        showResult(arr[3]);
        highlight(3, 4, 5);
        return;
    }else if(arr[6] != undefined && arr[6] == arr[7] && arr[7] == arr[8]){
        showResult(arr[6]);
        highlight(6, 7, 8);
        return;
    }else if(arr[0] != undefined && arr[0] == arr[3] && arr[3] == arr[6]){
        showResult(arr[0]);
        highlight(0, 3, 6);
        return;
    }else if(arr[1] != undefined && arr[1] == arr[4] && arr[4] == arr[7]){
        showResult(arr[1]);
        highlight(1, 4, 7);
        return;
    }else if(arr[2] != undefined && arr[2] == arr[5] && arr[5] == arr[8]){
        showResult(arr[2]);
        highlight(2, 5, 8);
        return;
    }else if(arr[0] != undefined && arr[0] == arr[4] && arr[4] == arr[8]){
        showResult(arr[0]);
        highlight(0, 4, 8);
        return;
    }else if(arr[2] != undefined && arr[2] == arr[4] && arr[4] == arr[6]){
        showResult(arr[2]);
        highlight(2, 4, 6);
        return;
    }
    checkDraw();

}
// console.log(arr);
function reset(){
    arr = [];
    turn = true;
    for(let i=0; i<9; i++){
        document.querySelectorAll(".grid-item")[i].innerText = "";
        document.querySelectorAll(".grid-item")[i].classList.remove("bgColor");
    }
    turnShow.innerText = "Turn for X";
}

