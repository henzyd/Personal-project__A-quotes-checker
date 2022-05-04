'use strict';

// buttons
const btnRight = document.querySelector('.btnRight'); 
const btnLeft = document.querySelector('.btnLeft'); 

const images = document.querySelector('.images');


// pictures
const artistPic = './images/pexels-andrea-piacquadio-3789888.jpg';
const engineerPic = './images/pexels-andrea-piacquadio-3767392.jpg';
const actressPic = './images/pexels-christina-morillo-1181690.jpg';
const musicianPic = './images/pexels-christina-morillo-1181519.jpg';

const pictures = [engineerPic, actressPic, musicianPic, artistPic];


// Names
const engineerName = 'Mother Teresa';
const actressName = 'Diana';
const musicianName = 'Lizzo';
const artistName = 'Bob The Mob';

const namesArray = [engineerName, actressName, musicianName, artistName];

const nameHtml = document.querySelector('.name');


// Career
const careerHtml = document.querySelector('.career');

const careerArray = ['Engineer', 'Actress', 'Musician', 'Artist']


// Qoutes - words
const qoute = document.querySelector('.words');

const engineerQoute = 'Spread love everywhere you go. Let no one ever come to you without leaving happier.';
const actressQoute = 'Many of life’s failures are people who did not realize how close they were to success when they gave up.';
const musicianQoute = 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.';
const artistQoute = 'Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.';

const qouteArray = [engineerQoute, actressQoute, musicianQoute, artistQoute];


let randomPic = Math.floor(Math.random() * pictures.length);
function loadedPage() {
    images.src = pictures[randomPic];
    nameHtml.innerText = namesArray[randomPic];
    careerHtml.innerText = careerArray[randomPic];
    qoute.innerText = qouteArray[randomPic];
}

function rightBtnClicked() {
    let failRight = randomPic++;
    if (failRight >= pictures.length || failRight <= -1) {
        // pictures
        let shift = pictures.shift();
        pictures.push(shift); 
        images.src = shift;

        // Names
        let shiftName = namesArray.shift();
        namesArray.push(shiftName);
        nameHtml.innerText = shiftName;

        // Career
        let shiftCareer = careerArray.shift();
        careerArray.push(shiftCareer);
        careerHtml.innerText = shiftCareer;

        // Quotes
        let shiftQoutes = qouteArray.shift();
        qouteArray.push(shiftQoutes);
        qoute.innerText = shiftQoutes;
    } else if (failRight >= 0 || failRight < pictures.length) {
        images.src = pictures[failRight]; // pictures
        nameHtml.innerText = namesArray[failRight]; // Names
        careerHtml.innerText = careerArray[failRight]; // Career
        qoute.innerText = qouteArray[failRight]; // Quotes
    }
}

function leftBtnClicked() {
    let failLeft = randomPic--;
    if (failLeft <= -1 || failLeft >= pictures.length) {
        // Pictures
        let pop = pictures.pop();
        pictures.splice(0, 0, pop);
        images.src = pop;

        // Names
        let popName = namesArray.pop();
        namesArray.splice(0, 0, popName);
        nameHtml.innerText = popName;

        // Career
        let popCareer = careerArray.pop();
        careerArray.splice(0, 0, popCareer);
        careerHtml.innerText = popCareer;

        // Qoutes
        let popQoutes = qouteArray.pop();
        qouteArray.splice(0, 0, popQoutes);
        qoute.innerText = popQoutes;
    } else if (failLeft >= 0 || failLeft < pictures.length) {
        images.src = pictures[failLeft]; // Pictures
        nameHtml.innerText = namesArray[failLeft]; // Names
        careerHtml.innerText = careerArray[failLeft]; // Career
        qoute.innerText = qouteArray[failLeft]; // Qoutes
    }
    
}
