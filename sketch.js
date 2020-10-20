let array = [];
let mirror = false;

function setup()
{
  createCanvas(600, 600);
  background(200);

  strokeWeight(7);
  noFill();
}

function draw()
{
  // Record user input as a drawing
  if (mouseIsPressed)
  {
    array.push([mouseX, mouseY]);
  }

  // Display the drawing
  background(200);
  beginShape();
  for (let i = 0; i < array.length; i++)
  {
    curveVertex(array[i][0], array[i][1])
  }
  endShape();

  if (mirror)
  {
    beginShape();
    for (let i = 0; i < array.length; i++)
    {
      curveVertex(600 - array[i][0], array[i][1])
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
    array = [];
  }
  else if (key === 'u')
  {
    for (let i = 0; i < 10 && array.length > 0; i++)
    {
      array.pop();
    }
  }
  else if (key === 'm')
  {
    mirror = !mirror;
  }
}
