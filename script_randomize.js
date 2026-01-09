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
    randomTextElement.style.color = rgb(255,0,0);
});

function generateRandomText() {
    const phrases = [
        "Nice outfit. Really, I mean it! I had no idea that the 'smelling wandering vagrant' look was back in style!",//#1
        "They say that true beauty is on the inside. But all you have on the inside is excessive radiation poisoning!",//#2
        "Life is like a box of chocolates, but this box is empty.",//#3
        "Nice outfit. Really, I mean it! I had no idea that the 'smelling wandering vagrant' look was back in style!",//#4
        "Genetic mutation detected. Issuing congratulations card..."//#5
        ""//#6
    ];
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex]; // Return a single random phrase
}
