const socket = io();
let names;
let textarea = document.querySelector("#textarea");
let messageArea = document.querySelector(".message__area");
do {
  names = prompt("please enter your name:");
} while (!names);
textarea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    sendMessage(e.target.value);
  }
});
function sendMessage(message) {
  let msg = {
    user: names,
    message: message.trim(),
  };
  appendMessage(msg, "outgoing");
  textarea.value = "";
  scrolltobottom();
  socket.emit("message", msg);
}
function appendMessage(msg, type) {
  let mainDiv = document.createElement("div");
  let className = type;
  mainDiv.classList.add(className, "message");
  let markup = `<h4>
  ${msg.user}
  </h4>
  <p>${msg.message}</p>`;
  mainDiv.innerHTML = markup;
  messageArea.appendChild(mainDiv);
}

//recieving msg
socket.on("message", (msg) => {
  appendMessage(msg, "incoming");
  scrolltobottom();
});

function scrolltobottom() {
  messageArea.scrollTop = messageArea.scrollHeight;
}

function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
let sum = 0;
function roll() {
  const dice = Number(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
  document.getElementById("dice").innerHTML = dice;
  sum = sum + dice;
  if(sum>100){
    sum = sum-dice;
    
  }
  let fs = laddersnakelogic(sum);
  sum = fs;
  logic(dice, fs);
  if (fs === 100) {
    alert("winner");
  }
  
}

let counter = 1;
function logic(dice, fs) {
  let current_position = Number(fs);
  document.getElementById("current_position").innerHTML = current_position;
  
  highlight(current_position);
  console.log(counter++);
}
function laddersnakelogic(sum) {
  
  switch (sum) {
    case 4:
      sum = 14;
      break;
    case 9:
      sum = 31;
      break;
    case 17:
      sum = 7;
      break;
    case 1:
      sum = 38;
      break;
    case 28:
      sum = 84;
      break;
    case 21:
      sum = 2;
      break;
    case 12:
      sum = 42;
      break;
    case 51:
      sum = 67;
      break;
    case 72:
      sum = 91;
      break;
    case 80:
      sum = 99;
      break;
    case 98:
      sum = 79;
      break;
    case 94:
      sum = 75;
      break;
    case 87:
      sum = 36;
      break;
      case 64:
      sum = 60;
      break;
      case 54:
      sum = 34;
      break;
      case 62:
      sum = 19;
      break;
  }
  
  let finalsum = sum;
  return finalsum;
}

function highlight(current_position) {
  var anchors = document.getElementsByClassName("grid-item");

  for (var i = 0; i < anchors.length; i++) {
    if (anchors[i].innerHTML == current_position) {
      // anchors[i].style.backgroundColor = "red";
      anchors[i].appendChild(document.getElementById("piece"));
    }
  }
  // var c = document.getElementById("mycanvas");
  // var ctx = c.getContext("2d");
  // ctx.beginPath();
  // ctx.moveTo(0, 0);
  // ctx.moveTo(300, 150);
  // ctx.stroke();
}
