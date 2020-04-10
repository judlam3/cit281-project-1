//jshint esversion: 6

//Req. 3b
let arrAvg = (arr) => {
  let sum = 0, avg;
  for (var i=0; i < arr.length; i++){
      sum = sum + arr[i];
  }
  avg = sum/arr.length;
  return avg;
};

//Req. 3c
var arrMax = [2, 3, 5, 7, 9];
var maxSoFar = 0;

arrMax.forEach((elem) => {
  if(maxSoFar < elem)
  maxSoFar = elem;
});

console.log(maxSoFar);

var arrMax = [6, 2, 4];
var maxSoFar = 0;

arrMax.forEach((elem) => {
  if(maxSoFar < elem)
  maxSoFar = elem;
});

console.log(maxSoFar);

//Req. 3d
