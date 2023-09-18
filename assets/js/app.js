let button = document.getElementById("add");
let p = document.getElementById("text");
let buttons = document.getElementById("save");
let saved = document.getElementById("saved");
let reset = document.getElementById("reset")
button.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1;
    saved.classList.remove("disable");
});
buttons.addEventListener("click", function () {
    if (p.innerHTML == 0) {
        saved.classList.add("disable");
    } else if (saved.innerHTML == 0) {
        saved.innerHTML = p.innerHTML;
        p.innerHTML = 0
    } else {
        saved.innerHTML = saved.innerHTML + "," + p.innerHTML;
        p.innerHTML = 0
    }
})
reset.addEventListener("click", function () {
    p.innerHTML = 0
    saved.innerHTML = 0
})