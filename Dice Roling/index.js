
let images = [
    "dice-01.svg",
    "dice-02.svg",
    "dice-03.svg",
    "dice-04.svg",
    "dice-05.svg",
    "dice-06.svg",   
]

let dice = document.querySelectorAll("img")
console.log(dice)

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake")

    })

    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake")
        })

        let dieonevalue = Math.floor(Math.random()*6)

        let dietwoevalue = Math.floor(Math.random()*6)

        console.log(dieonevalue,dietwoevalue)

        document.querySelector("#dice-01").setAttribute("src", images[dieonevalue])

        document.querySelector("#dice-02").setAttribute("src", images[dietwoevalue])

        document.querySelector("#total").innerHTML = "your roll is " + ( (dieonevalue + 1 )+ (dietwoevalue + 1)
    )



    },
    1000
    )
}