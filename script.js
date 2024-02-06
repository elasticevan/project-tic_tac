// JS for Project TTT 

const container = document.querySelector(".container");
//toggle 
const toggle = document.querySelector(".toggle");

//create spaces for board
function board(){
    for (let i = 0; i < 9; i++) {
        const tile = document.createElement("div");
        tile.classList = "space";
        container.appendChild(tile)
    }
}
board();

//declare all spaces
const spaces = document.querySelectorAll(".space");

//test for win
let winners;
for (let i = 0; i <= spaces.length; i++) {
    winners = [
        [spaces[0], spaces[1], spaces[2]],
        [spaces[3], spaces[4], spaces[5]],
        [spaces[6], spaces[7], spaces[8]],
        [spaces[0], spaces[3], spaces[6]],
        [spaces[1], spaces[4], spaces[7]],
        [spaces[2], spaces[5], spaces[8]],
        [spaces[0], spaces[4], spaces[8]],
        [spaces[2], spaces[4], spaces[6]]
    ]
}
/* help from chatGPT
function win(){
    for (let win of winners) {
        const [a, b, c] = win;
        if (a.style.backgroundColor === "red" && b.style.backgroundColor === "red" && c.style.backgroundColor === "red") {
            console.log("red wins")
        } else if (a.style.backgroundColor === "blue" && b.style.backgroundColor === "blue" && c.style.backgroundColor === "blue") {
            console.log("blue wins")
        };
    }
}
*/
// my iteration/understanding
function checkForWin() {
    for (let win of winners) {
        for (let i = 0; i < win.length; i++) {
            if(win[0].style.backgroundColor === "red" && win[1].style.backgroundColor === "red" && win[2].style.backgroundColor === "red") {
                console.log("red wins");
                container.innerHTML = "";
                board();
            }
             else if(win[0].style.backgroundColor === "blue" && win[1].style.backgroundColor === "blue" && win[2].style.backgroundColor === "blue") {
                console.log("blue wins");
                container.innerHTML = "";
                board();
            }
            
        }
    }
}
/*
function turn(player) {
    for (const space of spaces) {
        space.addEventListener("click", e => {
            player = (player === "one") ? "two" : "one";
            if (player === "one") {
                space.style.backgroundColor = "red";
            } else if (player === "two") {
                space.style.backgroundColor = "blue";
            } 
            space.removeEventListener("click", e)
            console.log(player);
            checkForWin();
        })
    }
}
*/
function turn(player) {
    //create function for color change
    function colorChange(e) {
        player = (player === "one") ? "two" : "one";
        e.target.style.backgroundColor = (player === "one") ? "red" : "blue";
        toggle.style.backgroundColor = (player === "one") ? "blue" : "red"; 
        toggle.style.justifyContent = (player === "one") ? "flex-end" : "flex-start";
        e.target.removeEventListener("click", colorChange)
        checkForWin();
    }
    //call for event listener
    for (const space of spaces) {
        space.addEventListener("click", colorChange);
    }
}
turn()


