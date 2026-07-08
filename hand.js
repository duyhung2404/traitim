const video = document.getElementById("video");

let pinch = false;


const hands = new Hands({

    locateFile:(file)=>{
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }

});


hands.setOptions({

    maxNumHands:1,
    modelComplexity:1,
    minDetectionConfidence:0.7,
    minTrackingConfidence:0.7

});



hands.onResults(results=>{


    if(results.multiHandLandmarks){


        let hand =
        results.multiHandLandmarks[0];


        let thumb =
        hand[4];


        let index =
        hand[8];


        let distance =
        Math.sqrt(
            Math.pow(
                thumb.x-index.x,2
            )
            +
            Math.pow(
                thumb.y-index.y,2
            )
        );


        // khoảng cách nhỏ = chụm

        if(distance < 0.05){

            pinch=true;

            console.log("CHỤM TAY 🤏");

        }

        else{

            pinch=false;

            console.log("MỞ TAY 🖐");

        }


    }


});




const camera = new Camera(video,{

    onFrame:async()=>{

        await hands.send({
            image:video
        });

    },

    width:1280,
    height:720

});


camera.start();
