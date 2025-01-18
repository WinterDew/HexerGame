function generateRandomHex(){
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
}

export default function generateRandomColor(){
    return (
        `#${generateRandomHex()}${generateRandomHex()}${generateRandomHex()}`
    );
}