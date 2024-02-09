// JS for Project TTT 

const container = document.querySelector(".container");
//toggle 
const toggle = document.querySelector(".toggle");
//popup
let popup = document.querySelector(".popup");
let result = document.querySelector(".popup .result");

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
        //cool option to split into array
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
                result.innerHTML = "red wins";
                openPopUp()
            }
             else if(win[0].style.backgroundColor === "blue" && win[1].style.backgroundColor === "blue" && win[2].style.backgroundColor === "blue") {
                result.innerHTML = "blue wins";
                openPopUp()
            }
            
        }
    }
}

// redo so event listener is separate

//create function for color change !!! redo this so upon reset we're back to player one everytime
let player = "one";

/*
function colorChange(e) {
    player = (player === "one") ? "two" : "one";
    e.target.style.backgroundColor = (player === "one") ? "red" : "blue";
    toggle.style.backgroundColor = (player === "one") ? "blue" : "red"; 
    toggle.style.justifyContent = (player === "one") ? "flex-end" : "flex-start";
    e.target.removeEventListener("click", colorChange)
    checkForWin();
}

*/
// redo, not working on reset, if red wins
function colorChange(e){
    if(player === "one") {
        e.target.style.backgroundColor = "red";
    } else if (player === "two") {
        e.target.style.backgroundColor = "blue";
    }
    toggle.classList.toggle("color")
    player = (player === "one") ? "two" : "one";
    e.target.removeEventListener("click", colorChange);
    checkForWin();
}
//call for event listener
spaces.forEach(space => space.addEventListener("click", colorChange))

//popup functions
function openPopUp() {
        popup.classList.toggle("open-popup");
}
function closePopUp() {
        popup.classList.remove("open-popup");
}

//resets game
function reset() {
    closePopUp();
    container.innerHTML = "";
    board();
    spaces.forEach(space => space.addEventListener("click", colorChange))
}