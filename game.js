var xposR = 10;
var yposR = 520;
var xspeedR = 5;
var xposG = 350;
var yposG = 520;
var xspeedG = 5;
var xposB =660;
var yposB = 520;
var xspeedB = 5;
var ellipsexpos = 425;
var ellipseypos = 65;
var speedEllipse = 5;
var score = 0;
var timer = 25;

function setup(){
	createCanvas(850,580);
}

function draw(){
	background (100);					//bg color
	fill (255,0,0);						//fill color of rectangle
	noStroke();				
	rect (xposR,yposR,120,40);			//draw rectangle

	if (xposR == width){				//constrain of red brick
		xspeedR=-5;
	}
	if (xposR == 0){											
		xspeedR=+5;
	}

	fill (0,255,0);
	rect (xposG,yposG,120,40);
	if (xposG == 0){				//constrain of green brick
		xspeedG =+5;
	}
	if (xposG == width){
		xspeedG=-5;
	}
	
	fill (0,0,255);
	rect (xposB,yposB,120,40);
	if (xposB == 0){				//constrain of blue brick
		xspeedB =+5;
	}
	if (xposB == width){
		xspeedB=-5;
	}

	xposR+=xspeedR;
	xposG+=xspeedG;
	xposB+=xspeedB;

	var colorOfXposR = get(xposR + 120, yposR + 20);
	var colorOfXposG = get(xposG + 120, yposG + 20);
	var colorOfXposB= get(xposB + 120, yposB + 20);
	fill(100,30,200);
	ellipse (ellipsexpos,ellipseypos,30,30);
//console.log(color);
	
	if (keyIsDown(DOWN_ARROW)){
	ellipseypos+=speedEllipse;
	}

	if (keyIsDown(RIGHT_ARROW)){
		ellipsexpos+=5;
	}
	if (ellipsexpos>=850){
		ellipsexpos=1
	}

	if (keyIsDown(LEFT_ARROW)){
		ellipsexpos-=5;
	}
	if (ellipsexpos<=0){
		ellipsexpos=699
	}

	ellipseypos+=speedEllipse;

	if (ellipseypos>=height){
		ellipseypos=0;
	}
	var oldellipsexpos = ellipsexpos;
	var oldellipseypos = ellipseypos;
	
	var color = get(ellipsexpos, ellipseypos);
	var colorright = get(ellipsexpos+10, ellipseypos+8);
	var colordown = get(ellipsexpos, ellipseypos+8);
	text(colordown,90,30);
	
//green block
	if (color [1] ==255) {
		ellipseypos = 0;
		score+=2;
	}
	if (colorright [1] ==255) {
		ellipseypos = 0;
		score+=2;
	}
	if (colordown [1] ==255) {
		ellipseypos = 0;
		score+=2;
	}
//red block
	if (color [2] ==0) {
		ellipseypos = 0;
		score-=2;
	}
	if (colorright [2] ==0) {
		ellipseypos = 0;
		score-=2;
	}
	if (colordown [2] ==0) {
		ellipseypos = 0;
		score-=2;
	}
//blue block
	if (color [0] ==0) {
		ellipseypos = 0;
		score+=1;
	}
	if (colorright [0] ==0) {
		ellipseypos = 0;
		score+=1;
	}
	if (colordown [0] ==0) {
		ellipseypos = 0;
		score+=1;
	} 
	
//display timer
	textSize (15);
	fill (255,255,0);
	text ("timer:"+timer,780,20);

	if (frameCount % 60 == 0){
		timer -=1;
	}

//display scores
	textSize (15);
	fill (255,255,0);
	text ("score:"+score,0,20);

	

	if (timer <=0){
		background (100);
		textSize (30);
		fill (255,0,0);
		text ("GAME OVER!!!PLEASE PRESS F5 TO TRY AGAIN",50,260);
		timer = 0;
		stopScore;
	}

	if(score >=20){
		background(100);
		fill(0,255,0);
		textSize(25);
		text("CONGRATS!!!YOU HAVE PASSED THIS LEVEL,score is:"+score,20,250);
		stopScore;
		clear();
		timer = 0;
		reload;
	}
}
