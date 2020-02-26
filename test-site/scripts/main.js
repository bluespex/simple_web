document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'ONE PIECE specially for, ' + myName;
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/onepiece.png') {
      myImage.setAttribute ('src','images/onepiece2.jpeg');
    } else {
      myImage.setAttribute ('src','images/onepiece.png');
    }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'ONE PIECE specially for, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}