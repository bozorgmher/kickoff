const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const navLink = document.querySelectorAll(".navLink");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
}
function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    
}
function detail(str){
  var description = window.open("", "MsgWindow", "width= 300px, height= 500px");
  var parag = "test";
  switch (str){
    case 0 :
      parag = "Connect Four is a two-player game with perfect information for both sides. This term describes games where one player at a time plays, players have all the information about moves that have taken place and all moves that can take place, for a given game state. Connect Four also belongs to the classification of an adversarial, zero-sum game, since a player's advantage is an opponent's disadvantage.";
    break;
    case 1 :
      parag = "Doodle Jump is a platforming video game developed and published by American studio Lima Sky, for Windows Phone, iPhone OS, BlackBerry, Android, Java Mobile (J2ME), Nokia Symbian, and Xbox 360 for the Kinect platform.[1] It was released worldwide for iPhone OS on March 15, 2009, and was later released for Android and Blackberry on March 2, 2010, Symbian on May 1, 2010, Windows Phone 7 on June 1, 2011,[2] and August 21, 2013, on Windows Phone 8.[3][4] It was released for the iPad on September 1, 2011. Since its release, the game has been generally well received. The game is currently available on nine platforms.";
    break;
    case 2 :
      parag = "Nine men's morris is a strategy board game for two players dating at least to the Roman Empire.[1] The game is also known as nine-man morris, mill, mills, the mill game, merels, merrills, merelles, marelles, morelles, and ninepenny marl[2] in English. The game has also been called cowboy checkers and is sometimes printed on the back of checkerboards. Nine men's morris is a solved game, that is, a game whose optimal strategy has been calculated. It has been shown that with perfect play from both players, the game results in a draw.[3] ";
    break;
    case 3 :
      parag = "Everyone loves to play PONG! This gameboy was made from scratch. From PCB design and electronics to programming, mechanical design and 3D printing.";
    break;
    case 4 :
      parag = '';
    break;
    case 5 :
      parag = '';
    break;
    default:
      parag = '';
    break;

  }
  description.document.write("<p>parag</p>");
}

function detail_1(){
  var description = window.open("", "MsgWindow", "width= 300px, height= 500px");
  description.document.write("<p>Connect Four is a two-player game with perfect information for both sides. This term describes games where one player at a time plays, players have all the information about moves that have taken place and all moves that can take place, for a given game state. Connect Four also belongs to the classification of an adversarial, zero-sum game, since a player's advantage is an opponent's disadvantage.</p>";
}

function detail_2(){
  var description = window.open("", "MsgWindow", "width= 300px, height= 500px");
  description.document.write("<p>Doodle Jump is a platforming video game developed and published by American studio Lima Sky, for Windows Phone, iPhone OS, BlackBerry, Android, Java Mobile (J2ME), Nokia Symbian, and Xbox 360 for the Kinect platform.[1] It was released worldwide for iPhone OS on March 15, 2009, and was later released for Android and Blackberry on March 2, 2010, Symbian on May 1, 2010, Windows Phone 7 on June 1, 2011,[2] and August 21, 2013, on Windows Phone 8.[3][4] It was released for the iPad on September 1, 2011. Since its release, the game has been generally well received. The game is currently available on nine platforms.</p>";
}

function detail_3(){
  var description = window.open("", "MsgWindow", "width= 300px, height= 500px");
  description.document.write("<p>Nine men's morris is a strategy board game for two players dating at least to the Roman Empire.[1] The game is also known as nine-man morris, mill, mills, the mill game, merels, merrills, merelles, marelles, morelles, and ninepenny marl[2] in English. The game has also been called cowboy checkers and is sometimes printed on the back of checkerboards. Nine men's morris is a solved game, that is, a game whose optimal strategy has been calculated. It has been shown that with perfect play from both players, the game results in a draw.</p>");
}

function detail_4(){
  var description = window.open("", "MsgWindow", "width= 300px, height= 500px");
  description.document.write("<p>Everyone loves to play PONG! This gameboy was made from scratch. From PCB design and electronics to programming, mechanical design and 3D printing.</p>";
}

function detail_5(){
  var description = window.open("", "MsgWindow", "width= 300px, height= 500px");
  
  description.document.write("<p>parag</p>");
}

function detail_6(){
  var description = window.open("", "MsgWindow", "width= 300px, height= 500px");
  description.document.write("<p>parag</p>");
}