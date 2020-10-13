let array = [];

function setup() {
  createCanvas(600, 600);
  background(255, 134, 20);

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

}

function keyTyped(){

  //console.log(`key ${key} is being typed`)

  if (key === 's'){
    // Save this image
    saveCanvas(`fileName`, 'png');
  } else if (key === 'd'){
    //display image

    beginShape();
    for(let i = 0; i < array.length; i++){
      //line(array[i][0], array [i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array [i][1])
    }
    endShape();


  }

  return false;
}
