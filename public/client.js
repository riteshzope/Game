const socket = io();
let names;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
do{
 names = prompt('please enter your name:')
}while(!names)
textarea.addEventListener('keyup',(e)=>{
  if(e.key === 'Enter'){
    sendMessage(e.target.value)
  }
})
function sendMessage(message){
    let msg = {
      user : names,
      message: message.trim()
    }
    appendMessage(msg, 'outgoing')
    textarea.value =''
    scrolltobottom()
    socket.emit('message',msg)
}
function appendMessage(msg , type){
  let mainDiv = document.createElement('div')
  let className = type
  mainDiv.classList.add(className ,'message')
  let markup = `<h4>
  ${msg.user}
  </h4>
  <p>${msg.message}</p>`
  mainDiv.innerHTML = markup
  messageArea.appendChild(mainDiv)
}

//recieving msg
socket.on('message',(msg)=>{
  appendMessage(msg,'incoming')
  scrolltobottom()
})

function scrolltobottom(){
  messageArea.scrollTop = messageArea.scrollHeight
}

function myFunction() {
   let element = document.body;
   element.classList.toggle("dark-mode");
   
}
let sum  =0;
function roll(){
  const dice = Number(Math.floor(Math.random() * (6 - 1 + 1) ) + 1);
  document.getElementById("dice").innerHTML=dice;
  sum = sum +dice;
  let fs = laddersnakelogic(sum)
  sum = fs ;
  logic(dice,fs)
  if(fs == 100){
    alert("winner")
  }
}

let counter = 1;
function logic(dice,fs){
  
  let current_position = Number(fs) ;
  document.getElementById("current_position").innerHTML = current_position;
  highlight(current_position);
  console.log(counter++)
}
function laddersnakelogic(sum)
{
  
  switch (sum) {
    case 10:
      sum = 2;
      break;
    case 11:
      sum = 2;
      break;
    case 12:
      sum = 2;
      break;
   
  }
  let finalsum = sum;
  return finalsum;
}

function highlight(current_position){
  var anchors = document.getElementsByClassName("grid-item");
    
  for(var i=0;i<anchors.length;i++){
  
  if(anchors[i].innerHTML == current_position){
    anchors[i].style.backgroundColor = "red";
  }
}
}