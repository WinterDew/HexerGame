function generateRandomHex(){
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
}

export default function generateRandomColor(){
    console.log("Welcome To Hexer...");
    return (
        `#${generateRandomHex()}${generateRandomHex()}${generateRandomHex()}`
    );
}