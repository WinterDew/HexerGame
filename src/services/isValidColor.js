function isValidColor(hex) {
    const regex = /^[0-9A-Fa-f]{6}$/;
    return regex.test(hex);
}

export default isValidColor;