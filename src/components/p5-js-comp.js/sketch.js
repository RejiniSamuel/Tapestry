import "p5/lib/addons/p5.dom";
import personImg from "./rejini.png";
export default function sketch(p) {
  //let rotation = 0;
  let img;
  p.preload = function () {
    img = p.loadImage(personImg);
  };

  p.setup = function () {
    var circles = [],
      circle = {},
      overlapping = false,
      NumCircles = 200,
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

    //let img = p.loadImage('apple-touch-icon.png');
    /*     p.loadImage('apple-touch-icon.png', img => {
          p.image(img, 0, 0);
        }); */

    // circles array is complete
    // draw canvas once
    p.background("#233");
    p.fill("#2AC1A6");
    //p.texture(img);
    p.noStroke();
    for (i = 0; i < circles.length; i++) {
      p.image(
        img,
        circles[i].x,
        circles[i].y,
        circles[i].r * 2,
        circles[i].r * 2
      );
      //p.ellipse(circles[i].x, circles[i].y,circles[i].r * 2, circles[i].r * 2);
    }
  };

  /*   p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if (props.rotation) {
        rotation = props.rotation * Math.PI / 180;
      }
    }; */

  /*   p.draw = function () {
      p.background(100);
      p.normalMaterial();
      p.noStroke();
      p.push();
      p.rotateY(rotation);
      p.box(100);
      p.pop();
    }; */
}

// follows this tutorial:
// https://www.youtube.com/watch?v=XATr_jdh-44

// Uses P5.js for canvas creation and drawing