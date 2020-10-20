let drawing = [];
let images = [];
let mirror = false;
let selectedImage = null;

function preload()
{
  for (let k = 0; k < 4; k++)
  {
    images[k] = loadImage(`images/img_${k}.jpg`);
    console.log("Loaded image : " + images[k]);
  }
}

function setup()
{
  createCanvas(600, 600);
  background(200);

  strokeWeight(4);
  noFill();
}

function draw()
{
  // Record user input as a drawing
  if (mouseIsPressed)
  {
    drawing.push([mouseX, mouseY]);
  }

  // Redraw the canvas
  background(200);
  if (selectedImage != null)
  {
    image(images[selectedImage], 0, 0);
  }

  // Display the drawing
  beginShape();
  for (let i = 0; i < drawing.length; i++)
  {
    curveVertex(drawing[i][0], drawing[i][1])
  }
  endShape();

  if (mirror)
  {
    beginShape();
    for (let i = 0; i < drawing.length; i++)
    {
      curveVertex(600 - drawing[i][0], drawing[i][1])
    }
    endShape();
  }
}

function keyTyped()
{
  if (key === 's')
  {
    // Save this image
    saveCanvas("myPicture", 'png');
  }
  else if (key === 'c')
  {
    drawing = [];
    selectedImage = null
  }
  else if (key === 'u')
  {
    for (let i = 0; i < 10 && drawing.length > 0; i++)
    {
      drawing.pop();
    }
  }
  else if (key === 'm')
  {
    mirror = !mirror;
  }
  else if (key === 'p')
  {
    // Pick a different image from the current loaded one
    let newImage = selectedImage;
    while (newImage == selectedImage)
    {
      newImage = int(random(3));
    }
    selectedImage = newImage;
  }
  else if (key === 'h')
  {
    selectedImage = null;
  }
}
