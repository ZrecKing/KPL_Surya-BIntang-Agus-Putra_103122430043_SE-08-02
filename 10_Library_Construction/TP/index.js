function countLetters(text) {
    const letters = text.match(/[a-zA-Z]/g) || [];
    return letters.length;
}

function countWords(text) {
    const words = text.match(/[a-zA-Z]+/g) || [];
    return words.length;
}

module.exports = {
    countLetters,
    countWords
};

const text = "Halo dunia saya Surya, Dan saya adalah raja iblis. Mhuawaha!";

console.log("Jumlah huruf:", countLetters(text));
console.log("Jumlah kata:", countWords(text));