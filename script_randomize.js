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
        "Knock knock. Who's there? An organic being with a finite life span!",//#2
        "My insult for you was well-crafted, witty... a true masterwork. Then I saw you and decided to save it for someone who will understand.",//#3
        "They say that true beauty is on the inside. But all you have on the inside is excessive radiation poisoning!",//#4
        "Rumor has it that you put a bounty on yourself... so for once in your life you would be Wanted!"//#5
        "One of us is slow, friendless and completely devoid of personality. The other... is a Protectron!"//#6
    ];
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex]; // Return a single random phrase
}
