function showMessage() {

    // Click Now button hide
    document.querySelector(".luxuryBtn").style.display = "none";

    // Intro Card show
    document.querySelector(".introCard").style.display = "block";

    // Continue button show
    document.getElementById("continueBtn").style.display = "inline-block";

}

function showFinalMessage() {

    // Intro Card hide
    document.querySelector(".introCard").style.display = "none";

    // Continue button hide
    document.getElementById("continueBtn").style.display = "none";

    // Final Message show
    document.getElementById("message").style.display = "block";

    // Cake button show
    document.getElementById("cakeBtn").style.display = "inline-block";

}

function showCake() {

    // Cake Button hide
    document.getElementById("cakeBtn").style.display = "none";

    // Cake show
    document.getElementById("cake-section").style.display = "block";

    // Cake tak scroll
    document.getElementById("cake-section").scrollIntoView({
        behavior: "smooth"
    });

}
// --------------------
// Hearts Animation
// --------------------

function createHeart() {

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}


// --------------------
// Cake
// --------------------

function cutCake() {

    const knife = document.getElementById("knife");
    const cake = document.getElementById("cake");
    const cakeText = document.getElementById("cakeText");

    // Knife animation
    knife.style.transform = "translate(-140px,70px) rotate(-45deg)";

    setTimeout(() => {

        // Cake change
        cake.src = "images/cake/cake-cut.png";

        // Cake zoom
        cake.style.transform = "scale(1.05)";

        // Text
        cakeText.innerHTML =
        "🎉 Happy Birthday Zargull Rani ❤️";

        // Confetti
        launchConfetti();

        // Gift show
        document.getElementById("gift-section").style.display = "block";

    },700);

}

// --------------------
// Confetti
// --------------------

function launchConfetti() {

    for (let i = 0; i < 30; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        const colors = [
            "#ff1493",
            "#ff69b4",
            "#ffd700",
            "#00bfff",
            "#7fff00",
            "#ffffff"
        ];

        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        document.getElementById("confetti")
            .appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}

// --------------------
// Gift
// --------------------

function openGift() {

    const gift = document.getElementById("gift");
    const giftText = document.getElementById("giftText");

    gift.innerHTML = "🎀";
    gift.style.transform = "scale(1.2)";

    giftText.innerHTML =
    "💖 Surprise! Ap meri zindagi ka sab se khoobsurat tohfa ho. 💖";

    document.getElementById("letterSection").style.display = "block";

    document.getElementById("letterSection").scrollIntoView({
        behavior:"smooth"
    });

}

// --------------------
// Welcome Screen
// --------------------

function startSurprise() {

    // Music Play
    const music = document.getElementById("bgMusic");
    music.play().catch(() => {});

    // Welcome Screen
    const welcome = document.getElementById("welcomeScreen");

    // Fade Animation
    welcome.classList.add("fadeOut");

    // 1 second baad hide
    setTimeout(() => {

        welcome.style.display = "none";

        // Sirf Hero Section dikhana
        document.querySelector(".luxuryHeader").style.display = "flex";
        document.querySelector(".luxuryBtn").style.display = "inline-block";

        // Intro Card hidden rahega
        document.querySelector(".introCard").style.display = "none";

        // Message hidden
        document.getElementById("message").style.display = "none";

        // Cake hidden
        document.getElementById("cake-section").style.display = "none";

        // Gift hidden
        document.getElementById("gift-section").style.display = "none";

        // Letter hidden
        document.getElementById("letterSection").style.display = "none";

        // Gallery hidden
        document.getElementById("gallery").style.display = "none";

    }, 1000);

}

const letter =
`Happy Birthday Meri Jaan 😘❤️🎂

Allah Pak aapko lambi aur sehatmand zindagi ata farmaye. 🤲🏻,
Allah Pak aapko har mushkil se mehfooz rakhe.✨🌹`;

let index = 0;

function startLetter() {

    index = 0;

    document.getElementById("typingText").innerHTML = "";

    typeLetter();

}

function typeLetter() {

    if (index < letter.length) {

        document.getElementById("typingText").innerHTML +=
        letter.charAt(index);

        index++;

        setTimeout(typeLetter, 50);

    } else {

        // Letter complete hone ke baad Gallery show hogi
        document.getElementById("gallery").style.display = "block";

        document.getElementById("gallery").scrollIntoView({
            behavior: "smooth"
        });

    }

}

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.innerHTML = "✨";

    sparkle.style.left =
        Math.random() * window.innerWidth + "px";

    sparkle.style.top =
        Math.random() * window.innerHeight + "px";

    document.getElementById("sparkles")
        .appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 3000);

}

let isPlaying = false;

function toggleMusic() {

    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    if (!music) {
        alert("🎵 Music element nahi mila.");
        return;
    }

    if (!isPlaying) {

        music.play()
            .then(() => {

                btn.innerHTML = "⏸ Pause Music";
                isPlaying = true;

            })
            .catch((error) => {

                console.log(error);

                alert("🎵 Music play nahi ho saki. Check karo ke music.mp3 file project me mojood hai.");

            });

    } else {

        music.pause();

        btn.innerHTML = "🎵 Play Music";

        isPlaying = false;

    }

}
const photos = [
    "images/gallery/photo1.jpg",
    "images/gallery/photo2.jpg",
    "images/gallery/photo3.jpg",
    "images/gallery/photo4.jpg",
    "images/gallery/photo5.jpg"
];

let currentPhoto = 0;

function nextPhoto() {

    currentPhoto++;

    if(currentPhoto >= photos.length){

        showFinalSurprise();

        currentPhoto = 0;

        return;

    }

    document.getElementById("photo").src = photos[currentPhoto];

}
function showFinalSurprise() {

    document.getElementById("finalSurprise").style.display = "flex";
    document.getElementById("finalText").innerHTML = "";
typeFinalMessage();

    launchConfetti();
    launchFireworks();

    for(let i = 0; i < 80; i++){

        setTimeout(() => {
            createHeart();
            createSparkle();
            createPetal();
        }, i * 80);

    }

}
const finalMessage =
"Happy Birthday Zargull Rani  ❤️\n\nMain Allah ka shukar ada karta hun ke unhon ne meri zindagi me aap jaisi khoobsurat dost bheji.\n\nAap ki muskurahat meri duniya hai.\n\nAllah pak hamesha aap ko khush rakhain, sehat de aur har buri nazar se mehfooz rakhain meri nzr ke ilawa.😜😅\n\n  I Love You Jaan 😇❤️";

let finalIndex = 0;

function typeFinalMessage(){

    if(finalIndex < finalMessage.length){

        document.getElementById("finalText").innerHTML += finalMessage.charAt(finalIndex);

        finalIndex++;

        setTimeout(typeFinalMessage,40);

    }else{

        document.getElementById("proposalBtn").style.display = "inline-block";

    }

}

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration =
        (Math.random() * 3 + 4) + "s";

    document.getElementById("petals").appendChild(petal);

    setTimeout(() => {
        petal.remove();
    },7000);

}

function showProposal(){

    document.getElementById("proposalScreen").style.display = "flex";

}

function acceptProposal(){  
    const proposal = document.getElementById("proposalScreen"); 
 
    proposal.style.transition = "opacity 1s ease"; 
    proposal.style.opacity = "0"; 
 
    setTimeout(() => {  
        proposal.style.display = "none";  
        proposal.style.opacity = "1"; 
 
        const bgMusic = document.getElementById("bgMusic");

        if (bgMusic) { 
            let volume = bgMusic.volume;

            const fadeOut = setInterval(() => {
                volume -= 0.05;

                if (volume <= 0) {
                    bgMusic.volume = 0;
                    bgMusic.pause();
                    clearInterval(fadeOut);
                } else {
                    bgMusic.volume = volume;
                }
            }, 100);
        }
 
        showFinalVideo();  
    }, 1000); 
}

function createStar(){

    const star = document.createElement("div");

    star.className = "star";

    star.innerHTML = "✨";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDuration =
        (Math.random() * 2 + 2) + "s";

    document.getElementById("stars").appendChild(star);

    setTimeout(() => {
        star.remove();
    },4000);

}

setInterval(createStar,250);

function showFinalVideo(){  
    const videoScreen = document.createElement("div");  
    videoScreen.id = "finalVideoScreen";  

    videoScreen.innerHTML = ` 
        <video id="finalVideo" playsinline autoplay> 
            <source src="media/finale.mp4" type="video/mp4"> 
        </video> 

        <audio id="finalMusic"> 
            <source src="media/finale-music.mp3" type="audio/mpeg"> 
        </audio> 

        <div id="theEnd">❤️ The End ❤️</div> 
    `; 

    document.body.appendChild(videoScreen);  

    const video = document.getElementById("finalVideo");  
    const music = document.getElementById("finalMusic");  
    const theEnd = document.getElementById("theEnd"); 

    video.play().catch(error => { 
        console.log("Video error:", error); 
    }); 

    music.currentTime = 0; 

    music.volume = 1;

    music.play().catch(error => { 
        console.log("Music error:", error); 
    }); 

    // Video ke actual end par movie-style transition
    video.addEventListener("ended", () => {

        // Video smoothly fade out
        video.style.opacity = "0";

        // Thoda cinematic pause, phir The End fade in
        setTimeout(() => {
            videoScreen.style.background = "#000";
            theEnd.style.opacity = "1";

            // Music dheere dheere fade out
            let volume = 1;

            const fadeMusic = setInterval(() => {
                volume -= 0.05;

                if(volume <= 0){
                    volume = 0;
                    music.pause();
                    clearInterval(fadeMusic);
                }

                music.volume = volume;
            }, 150);

        }, 800);

    });
}