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

  strokeWeight(7);
  noFill();

}

function draw() {

  if (mouseIsPressed){
    //line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);

    //stroke(map(mouseX, 0, 600, 0, 255, true));
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY );
    //line(mouseX, mouseY, pmouseX, pmouseY );
  }


  image (images[selected],0,0);

  beginShape();
  for(let i = 0; i < array.length; i++){
    //line(array[i][0], array [i][1], array[i + 1][0], array[i + 1][1]);
    curveVertex(array[i][0], array [i][1])
  }
  endShape();


}

function keyTyped(){

  //console.log(`key ${key} is being typed`)

  if (key === 's'){
    // Save this image
    saveCanvas(`fileName`, 'png');
  }

  return false;
}
