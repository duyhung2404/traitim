const video = document.getElementById("video");


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

        console.log("Đã thấy tay!");

    }

});



const camera = new Camera(video,{

    onFrame: async()=>{

        await hands.send({
            image:video
        });

    },

    width:1280,
    height:720

});


camera.start();
