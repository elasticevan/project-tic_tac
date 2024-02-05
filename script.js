// JS for Project TTT 

const container = document.querySelector(".container");

//create spaces for board
for (let i = 0; i < 9; i++) {
    const tile = document.createElement("div");
    tile.classList = "space";
    container.appendChild(tile)
}

//declare all spaces
const spaces = document.querySelectorAll(".space");

//color/player toggle



//test for win
let winners;

for (let i = 0; i <= spaces.length; i++) {
    winners = [
        [spaces[0], spaces[1], spaces[2]],
        [spaces[3], spaces[4], spaces[5]],
        [spaces[6], spaces[7], spaces[8]],
        [spaces[0], spaces[3], spaces[6]],
        [spaces[0], spaces[4], spaces[8]],
        [spaces[1], spaces[4], spaces[7]],
        [spaces[2], spaces[5], spaces[8]]
    ]
}

function win(){
    for (let win of winners) {
        if (win.forEach(space => space.style.backgroundColor = "red") == true)
        console.log("win")
    }
}

function turn(player) {
    spaces.forEach(btn =>btn.addEventListener("click", () => {
        player = (player === "one") ? "two" : "one";
        if (player === "one") {
            btn.style.backgroundColor = "red";
        } else if (player === "two") {
            btn.style.backgroundColor = "blue";
        } console.log(player)
    }));
    
}

turn()