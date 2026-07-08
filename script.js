const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


function resize(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resize();

window.addEventListener(
    "resize",
    resize
);



const hearts=[];


for(let i=0;i<500;i++){

    hearts.push(
        new Heart(canvas)
    );

}



function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.fillStyle="#ff3366";


    for(let heart of hearts){

        heart.update();
        heart.draw(ctx);

    }


    requestAnimationFrame(animate);

}


animate();
