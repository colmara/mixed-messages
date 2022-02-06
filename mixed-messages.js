const emotionOptions = ['happy', 'excited', 'hopeful', 'amazed'];
const descriptionOptions = ['bright', 'shining', 'mesmerizing', 'magical'];
const objectOptions = ['star', 'opportunity', 'memory', 'experience'];

let emotion = emotionOptions[Math.floor(Math.random() * emotionOptions.length)];
let description = descriptionOptions[Math.floor(Math.random() * descriptionOptions.length)];
let object = objectOptions[Math.floor(Math.random() * objectOptions.length)];

console.log(`Don't worry, be ${emotion}.  I see a ${description} ${object} on the horizon.`);
