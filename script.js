// JS for Project TTT 

const space = document.querySelectorAll(".space");


function move(player) {
    space.forEach(btn =>btn.addEventListener("click", () => {
        player = (player === "one") ? "two" : "one";
        if (player === "one") {
            btn.style.backgroundColor = "red";
        } else if (player === "two") {
            btn.style.backgroundColor = "blue";
        } console.log(player)
    }))
}

move()