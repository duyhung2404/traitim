const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();

window.addEventListener("resize", resize);

ctx.fillStyle = "red";
ctx.font = "50px Arial";
ctx.fillText("❤️",100,100);
