let button = document.querySelectorAll(".b-opt");
let popup = document.querySelector(".popup");
let newgame = document.getElementById("newgame");
let restart = document.getElementById("restart");
let message = document.getElementById("message");


let winpattern = [
                  [0,1,2],
                  [0,3,6],
                  [0,4,8],
                  [2,5,8],
                  [6,7,8],
                  [3,4,5],
                  [1,4,7],
                  [2,4,6],

];


const disableButtons = () => {
    button.forEach((element) => (element.disabled = true ));
    popup.classList.remove("hide");
};


const winfunction = (letter) => {

    disableButtons();

    if(letter =="X"){
        message.innerHTML = "&#x1F389; <br> 'X' Wins";
    }
    else{
        message.innerHTML = "&#x1F389; <br> 'O' Wins"
    }
};

const drawfunction = () =>{
    disableButtons();
    message.innerHTML = "&#x1F60E; <br> It's a Draw ";

};


const enableButtons = () => {
    button.forEach((element) => {
        element.innerText = ""
        element.disabled = false
    })
    popup.classList.add("hide")
}

newgame.addEventListener("click",()  =>  {

    count = 0;
    enableButtons();
}
)

restart.addEventListener("click", () => {


    count = 0;
    enableButtons();


})





let xturn = true
let count = 0

const checkingwin = () => {


    for( let i of winpattern ){

        let[element1,element2,element3] = [

            button[i[0]].innerText,
            button[i[1]].innerText,
            button[i[2]].innerText,

        ];

        if(element1 != "" && (element2 != "") && (element3 != "")){
            if(element1 == element2 && element2 == element3) {


                winfunction(element1);
            };
        };
    };
};








button.forEach((element) => {
element.addEventListener("click",()  => {



     if(xturn){
        xturn = false
        element.innerText = "X"
        element.disabled = true
     }
     else{
        xturn = true

        element.innerText = "O"
        element.disabled = true
     }

     count +=1;
     if( count == 9 ){
        drawfunction();
     }

    checkingwin();
  
})});
window.onload = enableButtons;
