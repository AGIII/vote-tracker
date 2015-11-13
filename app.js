if (localStorage.cars) {
  var cars = JSON.parse(localStorage.cars);
} else {
  var cars = [];
  var img1 = new CarVoteTracker('Pagani Huayra', 'images/1.jpg', 'red');
  var img2 = new CarVoteTracker('Ferrari LaFerrari', 'images/2.jpg', 'green');
  var img3 = new CarVoteTracker('Ferrari 488', 'images/3.jpg', 'blue');
  var img4 = new CarVoteTracker('McLaren F1', 'images/4.jpg', 'orange');
  var img5 = new CarVoteTracker('McLaren P1', 'images/5.jpg', 'yellow');
  var img6 = new CarVoteTracker('Mercedes SLR', 'images/6.jpg', 'pink');
  var img7 = new CarVoteTracker('Lamborghini Miura SV', 'images/7.jpg', 'purple');
  var img8 = new CarVoteTracker('Ferrari 288 GTO', 'images/8.jpg', 'gray');
  var img9 = new CarVoteTracker('Ferrari F50', 'images/9.jpg', 'black');
  var img10 = new CarVoteTracker('Ferrari F40', 'images/10.jpg', 'brown' );
  var img11 = new CarVoteTracker('Lamborghini Aventador', 'images/11.jpg', 'white');
  var img12 = new CarVoteTracker('Lamborghini Diablo GT', 'images/12.jpg', 'turquoise');
}

function CarVoteTracker (name, photo, color) {
  this.name = name;
  this.photo = photo;
  this.color = color;
  this.votes= 0;
  cars.push(this);
}

//Random Image Selector Function
randomImage = function() {
  return Math.floor(Math.random() * cars.length);
};

var imgLeft,imgRight;

compareImages = function() {
  //Link to HTML/DOM Setup
var imageLeft = document.getElementById('imageLeft');
var carOne = document.getElementById('carOne');
var imageRight = document.getElementById('imageRight');
var carTwo = document.getElementById('carTwo');

  imgLeft = randomImage();
  console.log(imgLeft);
  do {
  imgRight = randomImage();
  console.log(imgRight);
  } while (imgLeft === imgRight);

imageLeft.src = cars[imgLeft].photo;
carOne.innerHTML = cars[imgLeft].name;
imageRight.src = cars[imgRight].photo;
carTwo.innerHTML = cars[imgRight].name;


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
    animateRotate : true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true,
    scaleShowLabelBackdrop : true
  });
}

makeChart();

// var jsonVote1 = function() {
//   localStorage.setItem('jsonVote1', JSON.stringify('cars'));
// };

// var getStg = function() {
//   var storedVote1 = localStorage.getItem('jsonVote1');
//   console.log(storedVote1);
//   cars = JSON.parse(storedVote1)
// };

imageLeft.addEventListener('click', function() {
  imageLeft.style.border = '10px groove #7FFFD4';
  imageRight.style.border = '';
  console.log(cars[imgLeft].photo);
  cars[imgLeft].votes += 1;
  console.log(cars[imgLeft].name + ' has ' + cars[imgRight].votes + ' votes.');
  voteFor(imgLeft.src);
  compareImages();
  makeChart();
  localStorage.setItem('cars', JSON.stringify(cars));
  // jsonVote1():
  // getStg();
});



imageRight.addEventListener('click', function() {
 imageRight.style.border = '10px groove #FF6EB4';
 imageLeft.style.border = '';
 console.log(cars[imgRight].photo);
 cars[imgRight].votes += 1;
 console.log(cars[imgRight].name + ' has ' + cars[imgRight].votes + ' votes.');
 voteFor(imgRight.src);
 compareImages();
 makeChart();
 localStorage.setItem('cars', JSON.stringify(cars));

 // jsonVote1();
 // getStg();
});

// if (localStorage.getItem('cars') {
//   compareImages();
//   retrieveData();
//   makechart();
// } else {
//   starTrekTotalVotes = 0;
//   starWarsTotalVotes = 0;
//   storeData();
//   makechart();
// };



