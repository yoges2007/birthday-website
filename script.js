// Get elements
const btn = document.getElementById("surpriseBtn");
const music = document.getElementById("bgMusic");
const wishBox = document.getElementById("wishBox");
const giftBox = document.querySelector(".gift-box");
const finalMessage = document.getElementById("finalMessage");

// Open Surprise Button
btn.addEventListener("click", function () {

    // Show Birthday Wish
    wishBox.style.display = "block";

    // Change Button Text
    btn.innerHTML = "🎉 Enjoy Your Birthday 🎉";

    // Play Music
    music.play()
        .then(() => {
            console.log("Music Started");
        })
        .catch((error) => {
            console.log("Music Error:", error);
        });
});

// Gift Box Click
function openGift() {

    // Change Gift Emoji
    giftBox.innerHTML = "❤️";

    // Play Music
    music.play()
        .then(() => {
            console.log("Music Playing");
        })
        .catch((error) => {
            console.log("Music Error:", error);
        });

    // Confetti Animation
    confetti({
        particleCount: 250,
        spread: 180,
        origin: {
            y: 0.6
        }
    });

    // Show Final Message
    finalMessage.style.opacity = "1";

    finalMessage.innerHTML = `
        🎉 Happy Birthday Gokul 🎉
        <br><br>
        May God Bless You With Happiness,
        Success, Good Health and Endless Smiles.
        <br><br>
        ❤️ From Your Loving Brother Vetri ❤️
    `;
}
