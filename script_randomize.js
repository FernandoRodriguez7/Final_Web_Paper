/*document.getElementById('generateButton').addEventListener('click', function() {
    const randomText = generateRandomText();
    document.getElementById('randomText').innerText = randomText;
});

function generateRandomText() {
    const phrases = ["Knock knock. Who's there? An organic being with a finite life span!", "They say that true beauty is on the inside. But all you have on the inside is excessive radiation poisoning!", "Nice outfit. Really, I mean it! I had no idea that the 'smelling wandering vagrant' look was back in style!"];
    let text = '';
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        text += phrases[randomIndex] + ' ';
    }
    return text.trim();
}
*/

document.getElementById('generateButton').addEventListener('click', function() {
    const randomText = generateRandomText();
    document.getElementById('randomText').innerText = randomText;
});

function generateRandomText() {
    const phrases = [
        "Knock knock. Who's there? An organic being with a finite life span!",
        "They say that true beauty is on the inside. But all you have on the inside is excessive radiation poisoning!",
        "Life is like a box of chocolates, but this box is empty.",
        "Error 404: Meaning of life not found.",
        "Genetic mutation detected. Issuing congratulations card..."
    ];
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex]; // Return a single random phrase
}
