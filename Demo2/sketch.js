let array = [];
let images = [];
let selected;

function preload() {
  // preload() runs once
  for (let k = 0; k < 6; k++)
  {
    images[k] = loadImage(`assets/${k}.png`);
  }
}


function setup() {
  createCanvas(800, 800);
  background(240);

  selected = int(random(images.length));
  image (images[selected],0,0);

  strokeWeight(7);
  noFill();

}

function draw() {

  if (mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
  }


}

function keyTyped(){

  //console.log(`key ${key} is being typed`)

  if (key === 's'){
    // Save this image
    saveCanvas(`fileName`, 'png');
  } else if (key ==='c') {
    //Clear the image
    clear();
    background(240);
    image (images[selected],0,0);
  }

  return false;

}
