// JS for Project TTT 

const container = document.querySelector(".container");
//toggle 
const toggle = document.querySelector(".toggle");
const switcher = document.querySelector(".switch");
//popup
const popup = document.querySelector(".popup");
const result = document.querySelector(".popup .result");

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
    switcher.addEventListener("click", colorToggle);
    spaces.forEach(space => space.addEventListener("click", colorChange)); 
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
                popUp("open")
            }
             else if(win[0].style.backgroundColor === "blue" && win[1].style.backgroundColor === "blue" && win[2].style.backgroundColor === "blue") {
                result.innerHTML = "blue wins";
                popUp("open")
            }
            
        }
    }
}

//switch func
function colorToggle(){
    toggle.classList.toggle("color")
};

// redo, not working on reset, if red wins
function colorChange(e){
    e.target.style.backgroundColor = (toggle.classList.contains("color")) ? "blue" : "red";
    e.target.removeEventListener("click", colorChange);
    switcher.removeEventListener("click", colorToggle);
    colorToggle();
    checkForWin();
};

//popup function
function popUp(state) {
    if(state === "open") {
        popup.classList.toggle("open-popup");
        //reset button
        const resetBtn = document.querySelector("#reset");
        resetBtn.addEventListener("click", () => popUp("close"));
        //remove clicks on spaces
        spaces.forEach(space => space.removeEventListener("click", colorChange));
    } else if (state === "close") {
        popup.classList.remove("open-popup");
        container.innerHTML = "";
        board();
    }
}

