var bg = document.getElementById("backgroundImg");
var lm = document.getElementById("leftmodal");
var rm = document.getElementById("rightmodal");
var dm = document.getElementById("downmodal");
const textModal = document.getElementById("textModal");
var area = 0;
var subarea = 0;
var inSubarea = false;
var dialogue = 0;
var dialogueOpen = false;
var canClick = true;
var textEnd = false;
var puzzlePart = 0;
var seconds = 90;
var secondsPause = false;
var ambiencePlay = false;
var textList = [
  "Play his game and I'll let you in.",
  "Explore the forest and dig up what he's left for you.",
  "Don't let him get too close, listen for him and look behind you to scare him off.",
  "Each letter in the word corresponds to the first letter of an animal's name.",
  "What's the password?",
];

const timerEl = document.getElementById("timer");

setInterval(() => {
  timerEl.textContent = seconds;
  if (ambiencePlay == false) {
    document.getElementById("ambience").play();
    ambiencePlay = true;
  }
  if (secondsPause == false) {
    if (inSubarea == false) {
      seconds--;
    } else {
      seconds = seconds - 2;
    }
  }
  if (seconds >= 20 && seconds < 45) {
    document.getElementById("footstepSound").play();
  } else if (seconds >= 1 && seconds < 20) {
    document.getElementById("breathingSound").play();
  } else if (seconds < 0) {
    document.getElementById("breathingSound").pause();
    document.getElementById("footstepSound").pause();
    document.getElementById("ambience").pause();
    document.getElementById("chaseMusic").pause();
    document.getElementById("jeffModal").style.display = "flex";
    document.getElementById("jeffScare").play();
    setTimeout(() => {
      window.location.href = "https://jordojumbo.github.io/JeffTheKiller-EscapeRoom3/";
    }, 3000);
  }
  if (area == 3 && puzzlePart == 1) {
    if (seconds >= 20 && seconds < 45) {
      bg.src = "images/SnowyForestBackJeff.png";
    } else if (seconds < 20) {
      bg.src = "images/SnowyForestBackJeff2.png";
    }
  }
}, 1000);

function showModal1() {
  document.getElementById("noteModal1").style.display = "flex";
  pageSound();
}

function showModal2() {
  document.getElementById("noteModal2").style.display = "flex";
  pageSound();
}

function showModal3() {
  document.getElementById("noteModal3").style.display = "flex";
  pageSound();
}
function showModal4() {
  document.getElementById("noteModal4").style.display = "flex";
  pageSound();
}

function hideModal1() {
  document.getElementById("noteModal1").style.display = "none";
  document.getElementById("noteModal2").style.display = "none";
  document.getElementById("noteModal3").style.display = "none";
  document.getElementById("noteModal4").style.display = "none";
  pageSound();
}

function jeffMove() {
  document.getElementById("footstepSound").pause();
  document.getElementById("footstepSound").currentTime = 0;
  document.getElementById("breathingSound").pause();
  document.getElementById("breathingSound").currentTime = 0;
  if (seconds >= 45) {
    bg.src = "images/SnowyForestBack.png";
  } else if (seconds >= 20 && seconds < 45) {
    bg.src = "images/SnowyForestBackJeff.png";
    if (puzzlePart == 0) {
      canClick = false;
    }
  } else if (seconds < 20) {
    bg.src = "images/SnowyForestBackJeff2.png";
    if (puzzlePart == 0) {
      canClick = false;
    }
  }
  if (puzzlePart == 0) {
    if (seconds < 45) {
      document.getElementById("shovelingSnow").currentTime = 0;
      document.getElementById("jeffCatch").play();
      setTimeout(() => {
        canClick = true;
        bg.src = "images/SnowyForestBack.png";
      }, 2000);
    }
    seconds = 90;
    secondsPause = true;
  }
}

function pageSound() {
  document.getElementById("pageInteract").pause();
  document.getElementById("pageInteract").currentTime = 0;
  document.getElementById("pageInteract").play();
}

function moveSound() {
  document.getElementById("moveSound").pause();
  document.getElementById("moveSound").currentTime = 0;
  document.getElementById("moveSound").play();
}

function downButton() {
  if (canClick == true) {
    if (area == 0) {
      jeffMove();
      document.getElementById("doormodal").style.display = "none";
      area = 3;
    } else if (area == 1) {
      bg.src = "images/SnowyForestRight5.png";
      document.getElementById("allPages").style.display = "none";
      area = 2;
      if (subarea < 5) {
        document.getElementById("bloodArrow").style.display = "flex";
      }
    } else if (area == 2 && inSubarea == false) {
      bg.src = "images/SnowyForestLeft4.png";
      document.getElementById("bloodArrow").style.display = "none";
      area = 1;
      if (puzzlePart == 1) {
        document.getElementById("allPages").style.display = "flex";
      }
    } else if (area == 3) {
      bg.src = "images/Bunkerdoor2.png";
      document.getElementById("doormodal").style.display = "flex";
      area = 0;
      secondsPause = false;
    } else if (inSubarea == true) {
      bg.src = "images/SnowyForestRight5.png";
      document.getElementById("rightmodal").style.display = "flex";
      document.getElementById("leftmodal").style.display = "flex";
      document.getElementById("bloodS").style.display = "none";
      document.getElementById("bloodE").style.display = "none";
      document.getElementById("bloodL").style.display = "none";
      document.getElementById("bloodP").style.display = "none";
      inSubarea = false;
      if (puzzlePart == 1) {
        document.getElementById("timer").style.display = "flex";
        secondsPause = false;
        document.getElementById("ambience").pause();
        document.getElementById("chaseMusic").play();
      }
      if (subarea < 5) {
        document.getElementById("bloodArrow").style.display = "flex";
      }
    }
    moveSound();
  }
}

function leftButton() {
  if (canClick == true) {
    if (area == 0) {
      bg.src = "images/SnowyForestLeft4.png";
      document.getElementById("doormodal").style.display = "none";
      area = 1;
      if (puzzlePart == 1) {
        document.getElementById("allPages").style.display = "flex";
      }
    } else if (area == 1) {
      jeffMove();
      document.getElementById("allPages").style.display = "none";
      area = 3;
    } else if (area == 3) {
      bg.src = "images/SnowyForestRight5.png";
      area = 2;
      secondsPause = false;
      if (subarea < 5) {
        document.getElementById("bloodArrow").style.display = "flex";
      }
    } else if (area == 2) {
      bg.src = "images/Bunkerdoor2.png";
      document.getElementById("doormodal").style.display = "flex";
      document.getElementById("bloodArrow").style.display = "none";
      area = 0;
    }
    moveSound();
  }
}

function rightButton() {
  if (canClick == true) {
    if (area == 0) {
      bg.src = "images/SnowyForestRight5.png";
      document.getElementById("doormodal").style.display = "none";
      area = 2;
      if (subarea < 5) {
        document.getElementById("bloodArrow").style.display = "flex";
      }
    } else if (area == 1) {
      bg.src = "images/Bunkerdoor2.png";
      document.getElementById("doormodal").style.display = "flex";
      document.getElementById("allPages").style.display = "none";
      area = 0;
    } else if (area == 3) {
      bg.src = "images/SnowyForestLeft4.png";
      area = 1;
      secondsPause = false;
      if (puzzlePart == 1) {
        document.getElementById("allPages").style.display = "flex";
      }
    } else if (area == 2) {
      jeffMove();
      document.getElementById("bloodArrow").style.display = "none";
      area = 3;
    }
    moveSound();
  }
}

var dialogueModal = document.getElementById("dialogueModal");
var dialogueText = document.getElementById("dialogueText");
var dialogueImg = document.getElementById("dialogueImg");

function openDialogue() {
  if (dialogueOpen == false) {
    canClick = false;
    dialogueOpen = true;
    dialogueModal.style.display = "flex";
    document.getElementById("bunkerSound").pause();
    document.getElementById("bunkerSound").currentTime = 0;
    document.getElementById("bunkerSound").play();
    dialoguePlay();
    //Call this function to type out stuff
  } else if (textEnd == true) {
    closeDialogue();
    canClick = true;
    dialogueOpen = false;
    textEnd = false;
    if (puzzlePart == 1 && dialogue == 5) {
      canClick = false;
      document.getElementById("textModal").style.display = "flex";
      document.getElementById("closeText").style.display = "flex";
      canClick = false;
      dialogueOpen = true;
      dialogue = 3;
    }
  }
}

function dialoguePlay() {
  typeText(textList[dialogue]);
  if (puzzlePart == 0) {
    if (dialogue == 2) {
      dialogue = 0;
    } else {
      dialogue = dialogue + 1;
    }
  } else if (puzzlePart == 1) {
    if (dialogue == 5) {
      dialogue = 3;
    } else {
      dialogue = dialogue + 1;
    }
  }
}

textModal.addEventListener("keydown", function (event) {
  // Check if the pressed key is Enter
  if (event.key == "Enter") {
    const value = textModal.value.trim().toLowerCase();
    textModal.value = ""; // clear the input
    canClick = true; // reset any flags
    dialogueOpen = false; // reset dialogue state
    if (value == "56990") {
      window.location.href =
        "https://austijn.github.io/slenderman-maze-room-4/";
    } else {
      seconds = seconds - 10;
      document.getElementById("wrongInput").currentTime = 0;
      document.getElementById("wrongInput").play();
    }
  }
});

function hideModal2() {
  document.getElementById("textModal").style.display = "none";
  document.getElementById("closeText").style.display = "none";
  canClick = true;
  dialogueOpen = false;
}

function closeDialogue() {
  //Guess what this does
  dialogueModal.style.display = "none";
}

function typeText(text, speed = 50) {
  //Use for typing out text
  dialogueText.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      dialogueText.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      textEnd = true;
    }
  }

  type();
}

function bloodArrowHover() {
  document.getElementById("bloodArrowimg").src = "images/BloodArrow2.png";
}

function bloodArrowLeave() {
  document.getElementById("bloodArrowimg").src = "images/BloodArrow.png";
}

function forestAdvance() {
  a = 0.1;
  if (subarea == 0) {
    bg.src = "images/SnowyForestGraveyard8.png";
    document.getElementById("bloodS").style.display = "flex";
  } else if (subarea == 1) {
    bg.src = "images/SnowyForestLeft3.png";
    document.getElementById("bloodL").style.display = "flex";
  } else if (subarea == 2) {
    bg.src = "images/SnowyForestRight4.png";
    document.getElementById("bloodE").style.display = "flex";
  } else if (subarea == 3) {
    bg.src = "images/SubForest4.png";
    document.getElementById("bloodEB").style.display = "flex";
  } else if (subarea == 4) {
    bg.src = "images/SubForest5.png";
    document.getElementById("bloodP").style.display = "flex";
  }
  moveSound();
  document.getElementById("rightmodal").style.display = "none";
  document.getElementById("leftmodal").style.display = "none";
  document.getElementById("downmodal").style.display = "none";
  document.getElementById("bloodArrow").style.display = "none";
  inSubarea = true;
}

var a = 0.1;

function letterClick(elem) {
  if (a < 1) {
    a = a + 0.1;
    elem.style.opacity = a;
    document.getElementById("shovelingSnow").play();
  } else {
    document.getElementById("shovelingSnow").pause();
    document.getElementById("shovelingSnow").currentTime = 0;
    document.getElementById("letterGetSound").play();
    displayInventory();
    elem.style.display = "none";
    a = 0;
    subarea = subarea + 1;
    document.getElementById("downmodal").style.display = "flex";
    if (subarea == 5) {
      secondsPause = true;
      puzzlePart = 1;
      seconds = 90;
      document.getElementById("breathingSound").currentTime = 0;
      document.getElementById("footstepSound").currentTime = 0;
      document.getElementById("breathingSound").pause();
      document.getElementById("footstepSound").pause();
    }
  }
}

function displayInventory() {
  if (subarea == 0) {
    document.getElementById("inventoryBoxImg").style.display = "flex";
    document.getElementById("inventoryBox").style.display = "flex";
    document.getElementById("inventory").style.display = "flex";
    document.getElementById("bloodS2").style.display = "flex";
  } else if (subarea == 1) {
    document.getElementById("bloodL2").style.display = "flex";
  } else if (subarea == 2) {
    document.getElementById("bloodE2").style.display = "flex";
  } else if (subarea == 3) {
    document.getElementById("bloodEB2").style.display = "flex";
  } else if (subarea == 4) {
    document.getElementById("bloodP2").style.display = "flex";
    dialogue = 3;
  }
}


