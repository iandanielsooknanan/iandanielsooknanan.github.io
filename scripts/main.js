let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/open_source_mnt.jpg') {
      myImage.setAttribute('src','images/mnt.jpg');
    } else {
      myImage.setAttribute('src','images/open_source_mnt.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();}
        else 
    {    
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Manatees are cool, ' + myName;
    }
  }


if(!localStorage.getItem('name')) {
   setUserName();
} else {
   let storedName = localStorage.getItem('name');
   myHeading.textContent = 'Manatees are cool, ' + storedName;
}  

myButton.onclick = function() {
   setUserName();
}