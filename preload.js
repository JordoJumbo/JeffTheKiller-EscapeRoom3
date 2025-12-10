console.log("Preload running...");

var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = arguments[i];
  }
}

var audio = [];
function preloadAudio() {
  for (var i = 0; i < arguments.length; i++) {
    audio[i] = new Audio();
    audio[i].src = arguments[i];
  }
}

preload(
  "images/Blood_E.png",
  "images/Blood_L.png",
  "images/Blood_P.png",
  "images/Blood_S.png",
  "images/BloodArrow.png",
  "images/BloodArrow2.png",
  "images/Bunkerdoor2.png",
  "images/DialogueBox.png",
  "images/downarrow.png",
  "images/elephantPage2.png",
  "images/JeffTheKiller.jpg",
  "images/jeffTheKiller2.jpg",
  "images/leftarrow.png",
  "images/lionPage.png",
  "images/pigPage.png",
  "images/rightarrow.png",
  "images/shovelCursor.png",
  "images/slenderPage.png",
  "images/snakePage.png",
  "images/SnowyForestBack.png",
  "images/SnowyForestBackJeff.png",
  "images/SnowyForestBackJeff2.png",
  "images/SnowyForestGraveyard8.png",
  "images/SnowyForestLeft3.png",
  "images/SnowyForestLeft4.png",
  "images/SnowyForestRight4.png",
  "images/SnowyForestRight5.png",
  "images/SubForest4.png",
  "images/SubForest5.png",
  "images/UnknownMan2.png"
);

preloadAudio(
  "sounds/breathing.mp3",
  "sounds/caughtJeff.mp3",
  "sounds/draw_default.wav",
  "sounds/footsteps3.mp3",
  "sounds/itemGet.mp3",
  "sounds/JeffScreamer.mp3",
  "sounds/LBPJeffSong.mp3",
  "sounds/pageSound.mp3",
  "sounds/pageSound2.mp3",
  "sounds/shovelingSnow.wav",
  "sounds/shutter4.mp3",
  "sounds/WinterWinds.mp3",
  "sounds/wrongInput.mp3"
);
