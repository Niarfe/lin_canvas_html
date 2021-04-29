let img = new Image();
//img.src = 'https://image.shutterstock.com/image-vector/green-digital-font-letters-numbers-260nw-1715806156.jpg'
//img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
//img.src = 'https://www.rodanjewellers.ca/media/uploads/74a527fe9c3e7c66f0740f4d7f7da25f.png'
//img.src = 'https://cottagejeweler.com/images/gem-cuts/Cottage-Jewelry-gemstone-colors-650x671.png'
//img.src = 'https://cdn5.vectorstock.com/i/1000x1000/34/79/set-precious-stones-different-colors-vector-11643479.jpg'
img.src = 'http://1.bp.blogspot.com/-CAkAnzPph7g/UWMJua716jI/AAAAAAAAMPg/m4lLh1xlris/s1600/Jewels_Stock.png'
img.onload = function() {
    init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const scale = 1;
const width = 224;
const height = 208;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

const cycleLoop  = [0, 1, 2, 3];
const cycleLoop2 = [1, 2, 3, 0];
const cycleLoop3 = [2, 3, 0, 1];
const gem = {
  clear:   [0,0],
  red:     [1,0],
  blue:    [2,0],
  green:   [3,0],
  pink:    [4,0],
  yellow:  [5,0]
}

let currentLoopIndex = 0;
let frameCount = 0;

function drawFrame(gem_obj, canvasX, canvasY) {
    ctx.drawImage(img, gem_obj[0]*width, gem_obj[1]*height, width, height,
        canvasX, canvasY, scaledWidth, scaledHeight
    );
}

function init() {
    window.requestAnimationFrame(step);
}

function step() {
    frameCount++;
    if (frameCount < 50) {
        window.requestAnimationFrame(step);
        return;
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (currentLoopIndex == 0) {
        drawFrame(gem.green,         0,           0);
        drawFrame(gem.red,         0+width,       0);
        currentLoopIndex = 1;
    } else {
        drawFrame(gem.clear,         0,           0);
        drawFrame(gem.pink,         0+width,    0);
        currentLoopIndex = 0;
    }
    drawFrame(gem.yellow, 0+width*1*2, 0);

    window.requestAnimationFrame(step);
}
