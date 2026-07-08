class Heart {

    constructor(canvas){

        this.canvas = canvas;

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 20 + 10;

        this.speedX = (Math.random()-0.5)*2;
        this.speedY = (Math.random()-0.5)*2;

    }


    update(){

        this.x += this.speedX;
        this.y += this.speedY;


        if(this.x < 0)
            this.x = this.canvas.width;

        if(this.x > this.canvas.width)
            this.x = 0;


        if(this.y < 0)
            this.y = this.canvas.height;

        if(this.y > this.canvas.height)
            this.y = 0;

    }


    draw(ctx){

        ctx.font = `${this.size}px Arial`;

        ctx.fillText(
            "❤",
            this.x,
            this.y
        );

    }

}
