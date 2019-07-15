import "p5/lib/addons/p5.dom";
//import personImg from "./rejini.png";
export default function circles(p) {
  //let rotation = 0;
  p.setup = function () {
    var circles = [],
      circle = {},
      overlapping = false,
      NumCircles = 10,
      protection = 10000,
      counter = 0,
      canvasWidth = window.innerWidth,
      canvasHeight = window.innerHeight;

    p.createCanvas(canvasWidth, canvasHeight);

    //p.image(img, 40, 50);
    // populate circles array
    // brute force method continues until # of circles target is reached
    // or until the protection value is reached
    while (circles.length < NumCircles && counter < protection) {
      circle = {
        x: p.random(2500),
        y: p.random(3000),
        r: p.random(3, 36)
      };
      overlapping = false;

      // check that it is not overlapping with any existing circle
      // another brute force approach
      for (var i = 0; i < circles.length; i++) {
        var existing = circles[i];
        var d = p.dist(circle.x, circle.y, existing.x, existing.y);
        if (d < circle.r + existing.r) {
          // They are overlapping
          overlapping = true;
          // do not add to array
          break;
        }
      }

      // add valid circles to array
      if (!overlapping) {
        circles.push(circle);
      }

      counter++;
    }

  };


}