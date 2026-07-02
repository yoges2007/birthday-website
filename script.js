const btn = document.getElementById("surpriseBtn");

btn.onclick = function(){

    document.getElementById("wishBox").style.display = "block";
    document.getElementById("bgMusic").play();
    btn.innerHTML = "🎉 Enjoy Your Birthday 🎉";

}
function openGift(){
document.querySelector(".gift-box").innerHTML="❤️";
document.getElementById("bgMusic").play();
confetti({
    particleCount:250,
    spread:180,
    origin:{y:0.6}
});
const msg=document.getElementById("finalMessage");

msg.style.opacity="1";

msg.innerHTML=
"🎉 Happy Birthday Gokul 🎉<br><br>May God Bless You With Happiness, Success, Good Health and Endless Smiles.<br><br>❤️ From Your Loving Brother Vetri ❤️";

}
