//
// class for drawing boxes 
//

class Boxes {

//The count variables are updated every time a circle is drawn
count = 0;
count1 = 0;
count2 = 0;
countR = 0;

//The yCount variables
xCount = 1;
yCount = 1;
yCountT = 1;

//Determines size of circle & spacing
skip; //taking the square root of the area of the drawing
skip2;
// skipR; strange artifact from Rhonda

//Location Circle is Drawn
x;
y;
x2;
y2;

//Diameter or circle
diam;

//Splits the Screen into 'sections' based on number of voting bodies
offSet;

//how many times has the user run the vote in a signle session
passCount = 0; //artifact from Rhonda

bodyLabel;

// colors
bColor = "#012244";
pColor = "#3c1b36";

tranVal = 255;
// let fadeOpac = 255;
partyNum = 0;
moveArrow = 0;

rot = 0;

//dWidth; 
//dHeight;

loadingImage;

  constructor (loadImg) {
    loadingImage = loadImg;
  }

  //resets counts when passing to new body
  resetCount() {
    print('Resetting count');
    this.count = 0;
    this.count1 = 0;
    this.count2 = 0;
    this.countR = 0;
    this.xCount = 1;
    this.yCount = 1;
    this.yCountT = 1;
    this.moveArrow = 0;
  }

  //This function tests to see if the circles are being drawn off screen based on first pass of calculations
  testSize() {
    for (i = 0; i < 1; i++) {
      if ((this.y += this.skip) >= this.dHeight - (this.skip / 2)) {
        this.y = this.skip / 2;
        this.yCountT++;
        if ((this.x += this.skip) >= this.offSet - (this.skip / 2)) this.x = this.skip / 2;
        this.xCount++;
        //print('Y count = ' + yCount); // prints to consolde for testing
      }
    }
  }

  //loading image function
  rotLoadImage(numCon) {
    this.rot += 0.5;
    push();
    rectMode(CORNER);
    noStroke();
    fill(this.bColor);

    translate(this.offSet / 2, this.dHeight / 2);
    rectMode(CENTER);
    rect(0, 0, 160, 160);
    rotate(PI / 180 * this.rot);
    imageMode(CENTER);
    image(this.loadingImage, 0, 0, 150, 150);
    //AB: small circle to cover rotating image after
    if (this.count == numCon - 2) {
      ellipse(0, 0, 160, 160);
    }
    pop();
  }

  resetDraw() {
    if (this.yCountT * this.skip >= this.offSet) {
      this.skip = this.offSet / (1.025 * this.xCount);
    }
    noStroke();
    fill(this.bColor);
    this.tranVal = 255;
    rectMode(CORNER);

    //AB: removed this rect b/c it covers vp or president during logic
    // rect(0, 0, offSet, dHeight);

    this.x = this.skip / 2;
    this.y = this.skip / 2;
    
    this.xCount = 1;
    this.yCount = 1;
  }




}