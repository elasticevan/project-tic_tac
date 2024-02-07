// JS for Project TTT 

const container = document.querySelector(".container");
//toggle 
const toggle = document.querySelector(".toggle");

//create spaces for board
let winners;
let spaces;
function board(){
    for (let i = 0; i < 9; i++) {
        const tile = document.createElement("div");
        tile.classList = "space";
        container.appendChild(tile)
    }
    //declare all spaces
    spaces = document.querySelectorAll(".space");
    //winnin formula
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
}
board();

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
                reset();
            }
             else if(win[0].style.backgroundColor === "blue" && win[1].style.backgroundColor === "blue" && win[2].style.backgroundColor === "blue") {
                console.log("blue wins");
                reset();
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

// redo so event listener is separate

//create function for color change
let player;
function colorChange(e) {
    player = (player === "one") ? "two" : "one";
    e.target.style.backgroundColor = (player === "one") ? "red" : "blue";
    toggle.style.backgroundColor = (player === "one") ? "blue" : "red"; 
    toggle.style.justifyContent = (player === "one") ? "flex-end" : "flex-start";
    e.target.removeEventListener("click", colorChange)
    checkForWin();
}
//call for event listener
spaces.forEach(space => space.addEventListener("click", colorChange))

//reset func, not working with toggle and colors
function reset() {
    container.innerHTML = "";
    board();
    player = "one"
    spaces.forEach(space => space.addEventListener("click", colorChange))
}