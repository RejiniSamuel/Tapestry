import "p5/lib/addons/p5.dom";
import {
  persons
} from "../../persons";
//const stats = require(`./${process.env.STATS}`);

//import(personImg from `${persons[0].pPhotoLink}`);
//let imageName = persons[1].pPhotoLink;
//import( /* webpackMode: "eager" */ `(${imageName})`);
//import personImg from `${imageName}`");
// imagine we had a method to get language from cookies or other storage
//const pathToImages = require.context("./", true);

export default function sketch2(p) {
  let img;
  let textEach;
  // let tempImg;
  let personImg;
  for (let m = 0; m < 1; m++) {
    personImg = "./" + persons[m].pPhotoLink;
    personImg = require(`${personImg}`);

    img = p.loadImage(personImg);

    // console.log(img[m]);
  }

  let circles = [];
  //let rotation = 0;

  /* const getImages = () =>
    pathToImages.map(
      name => `<img src='${pathToImages(name, true)}' alt='${name}' />`
    );
 */


  /*   personImg = persons[0].pPhotoLink;
    personImg = require(`${personImg}`); */

  //import(`${personImg}`).then(img => {
  // do something with the translations
  // console.log(personImg);
  //img = p.loadImage(personImg);
  //});
  //import(`${personImg}`);

  //const personImg = require('./' + imageName)
  /*   p.preload = function () {
      img = p.loadImage(personImg);
    }; */
  /*   p.loadImage('apple-touch-icon.png', img => { //
      p.image(img, 0, 0);
    }); */
  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    this.circles();
  };

  //clean up after redirect
  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.clicked) {
      p.remove();
      props.history.push("/signup");
    }
  };

  p.circles = function () {
    for (let i = 0; i < persons.length; i++) {
      textEach = persons[i].pFirstName + " " + persons[i].pLastName
      personImg = "./" + persons[i].pPhotoLink;
      personImg = require(`${personImg}`);

      img = p.loadImage(personImg);

      let circle = {
        x: Math.floor(Math.random() * (window.innerWidth - 80) + 60),
        y: Math.floor(Math.random() * (window.innerHeight - 80) + 60),
        diameter: Math.floor(Math.random() * 30 + 20),
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4,
        img: img,
        textEach: textEach
      };
      circles.push(circle);
    }
  };

  const changeVelocity = c => {
    if (c.x + c.diameter / 5 > window.innerWidth || c.x - c.diameter / 5 < 0) {
      c.dx = -c.dx;
    }
    if (c.y + c.diameter / 5 > window.innerHeight || c.y - c.diameter / 5 < 0) {
      c.dy = -c.dy;
    }
    c.x += c.dx;
    c.y += c.dy;
  };

  const text = () => {
    //title
    p.noStroke();
    p.fill(235, 81, 96);
    p.textFont("Libre Franklin");
    p.textSize(75);
    p.textStyle(p.ITALIC);
    p.textAlign(p.CENTER);
    p.text("Tapestry", window.innerWidth / 2, window.innerHeight / 2 - 70);
    //subheading
    p.fill(179, 172, 167);
    p.textSize(24);
    p.textStyle(p.NORMAL);
    p.textFont("Muli");
    p.text(
      "weaving our immigrant stories onto the stage",
      window.innerWidth / 2,
      window.innerHeight / 2
    );
  };

  p.draw = () => {
    p.background(50);
    //loop through circles to draw them and draw lines between
    circles.forEach(c => {
      p.noStroke();
      p.fill(255, 255, 255, 50);
      p.image(c.img, c.x, c.y, 100, 100);
      // p.ellipse(c.x, c.y, c.diameter, c.diameter);
      changeVelocity(c);
      circles.forEach(circleTwo => {
        let a = Math.abs(c.x - circleTwo.x);
        let b = Math.abs(c.y - circleTwo.y);
        let distance = Math.sqrt(a * a + b * b);
        p.fill(255, 255, 255, 50);
        p.textSize(14);
        p.textStyle(p.NORMAL);
        p.textFont("Muli");
        p.text(
          c.textEach,
          c.x, c.y
        );

        if (distance < 500) {
          p.stroke(255, 255, 255, 20);
          p.line(c.x, c.y, circleTwo.x, circleTwo.y);

        }
      });
    });
    text();
  };
}