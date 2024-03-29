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
        container.appendChild(tile);
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
        ]};
    switcher.addEventListener("click", colorToggle);
    spaces.forEach(space => space.addEventListener("click", colorChange)); 
};
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
//watch for spaces in image links or between equals sign
const red ='<img src="./images/red_x.png">';
const blue ='<img src="./images/blue_circle.png">';

// my iteration/understanding
let count = 0;
function checkForWin() {
    //check to see if all spaces are filled
    for (let win of winners) {
        // (chatGPT) use every() method to check if all spaces in the win array contain the same content,
        // instead of win[0].innerHTML === red && win[1].innerHTML === red && etc....
        if(win.every(space => space.innerHTML === red)) {
            result.textContent= "red wins";
            popUp('open');
            return; //exit loop once winner is found *chatGPT assist
        }
        else if(win.every(space => space.innerHTML === blue)) {
            result.textContent= "blue wins";
            popUp('open');
            return; //exit loop once winner is found
        }
    }
    //if no winner is found after checking all winners
    if(count === 9) {
        result.textContent='draw';
        popUp('open');
    }
}

//switch func
function colorToggle(){
    toggle.classList.toggle("color")
    switcher.classList.toggle("blue")
};

//check if all spaces are filled
// redo, not working on reset, if red wins
function colorChange(e){
    count++;
    e.target.innerHTML = (toggle.classList.contains("color")) ? blue : red;
    e.target.removeEventListener("click", colorChange);
    switcher.removeEventListener("click", colorToggle);
    colorToggle();
    checkForWin();
};

//popup function
function popUp(state) {
    if(state === 'open') {
        popup.classList.toggle("open-popup");
        //reset button
        const resetBtn = document.querySelector("#reset");
        resetBtn.addEventListener("click", () => popUp("close"));
        //remove clicks on spaces
        spaces.forEach(space => space.removeEventListener("click", colorChange));
    } else if (state === 'close') {
        popup.classList.remove("open-popup");
        container.innerHTML = "";
        board();
        count = 0;
    }
};

