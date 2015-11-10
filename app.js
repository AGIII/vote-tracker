var cars = [];

var CarVoteTracker =function(name, photo) {
  this.name = name;
  this.photo = photo;
  this.votes= 0;
  cars.push(this);
}

var img1 = new CarVoteTracker('img1', 'images/1.jpg');
var img2 = new CarVoteTracker('img2', 'images/2.jpg');
var img3 = new CarVoteTracker('img3', 'images/3.jpg');
var img4 = new CarVoteTracker('img4', 'images/4.jpg');
var img5 = new CarVoteTracker('img5', 'images/5.jpg');
var img6 = new CarVoteTracker('img6', 'images/6.jpg');
var img7 = new CarVoteTracker('img7', 'images/7.jpg');
var img8 = new CarVoteTracker('img8', 'images/8.jpg');
var img9 = new CarVoteTracker('img9', 'images/9.jpg');
var img10 = new CarVoteTracker('img10', 'images/10.jpg');
var img11 = new CarVoteTracker('img11', 'images/11.jpg');
var img12 = new CarVoteTracker('img12', 'images/12.jpg');

//Random Image Selector Function
randomImage = function() {
  return Math.floor(Math.random() * cars.length);
};



compareImages = function() {
  //Link to HTML/DOM Setup
var imageLeft = document.getElementById('imageLeft');
var imageRight = document.getElementById('imageRight');

  var imgLeft = randomImage();
  console.log(imgLeft);
  do {
    var imgRight = randomImage();
    console.log(imgRight);
  } while (imgLeft === imgRight);

imageLeft.src = cars[imgLeft].photo;
imageRight.src = cars[imgRight].photo;

};
compareImages();

var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
]

