const messages = [
    "My favorite picture af youuu 😍 Maneva patrone mintsy mimiko eto💖",
    "That beautiful smile... sary nalaiko tampoka ty de tsara beuuu 💖",
    "A perfect day with you ☀️ un moment inobliable 😘",
    "You make my world brighter ✨ mon mimi d'amour pour toujours💕",
    "Forever with you 💍 tiko beuuuu ",
    "Another magical moment 💖 je vais m'envoler vers toi 😭😭😭",
    "I love this picture so much 🥰 tamin'io nisy bandy nijerijery be zay 🤣🤣 kivy be lery tamin'io",
    "the most beautiful girl in the world💕😍 t'es hyper belle mon coeur 🌹",
    "nnnsssooooo,,, you're so cute 😘",
    "You and me forever 💕 forever, forever, forever 💗",
    "My favorite moment 😍 mitovitovy am ray iny hiany de tiko fona ",
    "mon mimi any andafy💗 i'll join you darline,,,, ",
    "tsy de misy ina lotra fa mba ataoko eto fotsny,,,🤣 ",
    "My bubu,,, you're my paradis 💞",
    "You are my everything 🌹😘 tiko be le roby,,, ça fais resortir ta forme 😍🥰",
    "Our journey together 🚀 niaraka tam ndry Ekena sy Evarose, sy Mario iny io,,, ",
    "bisou aingana😊,,, muuuaaaahhhhh😘muuuaaaahhhhh😘muuuaaaahhhhh😘muuuaaaahhhhh😘",
    "My heart belongs to you 💓 mon rencontre avec mes belle-famille,🙃",
    "Golden memories 🌟 j'ai en vie d'y retourner",
    "I'm lucky to have you bubu 🍀🤣🤣🤣muuuaaaaaaaaaaahhhhhhhhhhhhhhhhhhhhhh tiko be nao mimi 🤣 ",
    "You complete me mimi💘 you are my sunshine, my moonlight, my happiness🥰",
    "magnifique combinaison 💕 le kopiko parfait💌",
    "Always and forever 💖 une magnifique souvenir😘 ca me manque beaucoup❤️",
    "Just us💖💞 seulement nous💖 solo todos😘 ",
    "You will be my wife, i'll take you home with me🏡",
    "les kilometre ne sont que des mots, rien de brise notre loi💖🌞",
    "My queen 👑i miss you so much💕",
    "Pure love 💕 mmmmmmmmmmuuuuuuuuuuuuuuuuaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhhhhhh😘😘😘",
    "you are so sexy darling💖",
    "I'm not going to lie… you are incredibly sexy. Your silhouette, the way you walk, your gaze… everything about you makes me dizzy😘💝",
    "love youuuu 😘😘😘",
    "ansayy eeee 💕😍💕😍💕😍",
    "Tiko be fotsiny ty sary ty🙃 ",
    "My love 💓"
];

// ============ GALLERY PAGE ============
function showMessage(element, index) {
    const overlay = document.getElementById("overlay");
    const popupImg = document.getElementById("popupImg");
    const popupMessage = document.getElementById("popupMessage");

    if (!overlay || !popupImg || !popupMessage) return;

    popupImg.src = element.src;
    popupMessage.textContent = messages[index];
    overlay.style.display = "flex";
}

const overlay = document.getElementById("overlay");
if (overlay) {
    overlay.addEventListener("click", function(e) {
        if (e.target.id === "overlay") {
            this.style.display = "none";
        }
    });
}

// ============ HOME PAGE ============
const modal = document.getElementById("videoModal");
const btnOui = document.getElementById("btnOui");
const closeBtn = document.querySelector(".close");
const video = document.getElementById("loveVideo");

if (btnOui && modal) {
    btnOui.addEventListener("click", function() {
        modal.style.display = "flex";
    });
}

if (closeBtn && modal && video) {
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
    });
}

const btnNon = document.getElementById('btnNon');
if (btnNon) {
    btnNon.addEventListener('mouseover', () => {
        const maxX = window.innerWidth - btnNon.offsetWidth - 20;
        const maxY = window.innerHeight - btnNon.offsetHeight - 20;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        btnNon.style.position = 'fixed';
        btnNon.style.left = randomX + 'px';
        btnNon.style.top = randomY + 'px';
    });
}

// ============ ANIMATION TITRE ============
const title = document.getElementById("homeTitle");
if (title) {
    const text = title.innerText;
    title.innerText = "";
    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        if (char === " ") {
            span.innerHTML = "&nbsp;";
        } else {
            span.innerText = char;
            span.style.animationDelay = `${index * 0.3}s`;
        }
        title.appendChild(span);
    });
}

function lancerVideo(src) {
    const source = document.getElementById("videoSource");
    const video = document.getElementById("loveVideo");
    const choix = document.getElementById("videoChoix");
    const player = document.getElementById("videoPlayer");

    source.src = src;
    video.load();
    video.play();

    choix.style.display = "none";
    player.style.display = "block";
}

const btnRetour = document.getElementById("btnRetour");
if (btnRetour) {
    btnRetour.addEventListener("click", function() {
        const video = document.getElementById("loveVideo");
        const choix = document.getElementById("videoChoix");
        const player = document.getElementById("videoPlayer");

        video.pause();
        video.currentTime = 0;

        player.style.display = "none";
        choix.style.display = "block";
    });
}