var cars = [];

var CarVoteTracker =function(name, photo, color) {
  this.name = name;
  this.photo = photo;
  this.color = color;
  this.votes= 0;
  cars.push(this);
}

var img1 = new CarVoteTracker('img1', 'images/1.jpg', '#123456');
var img2 = new CarVoteTracker('img2', 'images/2.jpg', '#234567');
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

var imgLeft,imgRight;

compareImages = function() {
  //Link to HTML/DOM Setup
var imageLeft = document.getElementById('imageLeft');
var imageRight = document.getElementById('imageRight');

  imgLeft = randomImage();
  console.log(imgLeft);
  do {
  imgRight = randomImage();
  console.log(imgRight);
  } while (imgLeft === imgRight);

imageLeft.src = cars[imgLeft].photo;
imageRight.src = cars[imgRight].photo;

};
compareImages();

var voteFor = function(CarVoteTracker) {
  for (var i in cars) {
    if(cars[i].src === cars) {
      cars.votes +=1;
      console.log(cars.votes);
    }
  }
};

function makeChart() {
  // var data = [
  //   {
  //       value: cars[imgLeft].votes,
  //       // value: 1,
  //       color:"#F7464A",
  //       highlight: "#FF5A5E",
  //       label: "Red"
  //   },
  //   {
  //       value: cars[imgRight].votes,
  //       // value: 1,
  //       color: "#46BFBD",
  //       highlight: "#5AD3D1",
  //       label: "Green"
  //   }
  // ];
  var data = [];
  for (var i = 0; i < cars.length; i++) {
    data.push({
      value: cars[i].votes,
      label: cars[i].name,
      color: cars[i].color
    })
  }

  var context = document.getElementById('chartchart').getContext('2d');
  console.log(context);

  var skillsChart = new Chart(context).Doughnut(data, {
    //Number - Amount of animation steps
    animationSteps : 1,
    //String - Animation easing effect
    animationEasing : "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : false,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true,
    scaleShowLabelBackdrop : true
  });
}

makeChart();

imageLeft.addEventListener('click', function() {
  console.log(cars[imgLeft].photo);
  cars[imgLeft].votes += 1;
  console.log(cars[imgLeft].name + ' has ' + cars[imgRight].votes + ' votes.');
  voteFor(imgLeft.src);
  compareImages();
  makeChart();


});



imageRight.addEventListener('click', function() {
 console.log(cars[imgRight].photo);
 cars[imgRight].votes += 1;
 console.log(cars[imgRight].name + ' has ' + cars[imgRight].votes + ' votes.');
 voteFor(imgRight.src);
 compareImages();
 makeChart();


});


