
function setup(){
  createCanvas(1000, 14  00);
  background('#2f5c7a');
}

function draw(){
  var today = new Date();
  
  var second=today.getSeconds();
  var radSecond = second*5;

  var minute=today.getMinutes();
  var radMinute = minute*5;

  var hour=today.getHours();
  var radHour = hour*5;

  /***************2nd Cirlcle**************/
  /*seconds*/
  noFill();
  stroke('#fcb49a');
  strokeWeight('1');
  ellipse(500, 200, radSecond, radSecond);
  if(second===59){
    fill('#2f5c7a');
    noStroke();
    ellipse(500, 200, 300, 300);
    }

  /*minutes*/
  stroke('#f57180');
  strokeWeight('2');
  ellipse(500, 200, radMinute, radMinute);

  /*hours*/
  stroke('#bf6d88');
  strokeWeight('3');
  ellipse(500, 200, radHour, radHour);

   /***************3rd Cirlcle**************/
  /*seconds*/
  noFill();
  stroke('#fcb49a');
  strokeWeight('1');
  ellipse(500, 800, radSecond+420, radSecond+420);
  if(second===59){
    fill('#2f5c7a');
    noStroke();
    ellipse(500, 800, 720, 720);
    }

  /*minutes*/
  stroke('#f57180');
  strokeWeight('2');
  ellipse(500, 800, radMinute+120, radMinute+120);

  /*hours*/
  stroke('#bf6d88');
  strokeWeight('3');
  ellipse(500, 800, radHour, radHour);
}



