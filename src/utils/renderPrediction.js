import { throttle } from "lodash";

export const renderPredictions = (predictions, context) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    const font = '16px sans-serif'
    context.font = font;
    context.textBaseline = 'top'

    predictions.forEach((prediction) => {
        const [x, y, width, height] = prediction["bbox"];
        const isPerson = prediction.class === 'person';

        // bounding box
        context.strokeStyle = isPerson ? "#FF0000" : "#00FFFF";
        context.lineWidth = 4;
        context.strokeRect(x, y, width, height);

        // fill the color
        context.fillStyle = `rgba(255, 0, 0, ${isPerson ? 0.2 : 0}`;
        context.fillRect(x, y, width, height);

        // Draw the label background
        context.fillStyle = isPerson ? "#FF0000" : "#00FFFF";
        const textWidth = context.measureText(prediction.class).width;
        const textHeight = parseInt(font, 10);
        context.fillRect(x, y, textWidth + 4, textHeight + 4);

        context.fillStyle = "#000000";
        context.fillText(prediction.class, x, y);

        if(isPerson){
            playAudio();
        }
    })
}

const playAudio = throttle(() => {
    const audio = new Audio('/thief-detection-alarm.mp3');
    audio.play();
}, 1000);