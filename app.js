var cars = []

var CarVoteTracker =function(image1, image2) {
  this.image1 = image1;
  this.image2 = image2;
  this.carImages= [];
}

CarVoteTracker.generaterandom = function(min, max) {
  return Math.floor(Math.random()) * (max - min + 1)) + min;
}
