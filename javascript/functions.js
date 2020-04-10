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
function arrMax(elem) {
  var arr = elem[0];
elem.forEach(maxSoFar => {
  if(maxSoFar > arr) {
    arr = maxSoFar;
      }
  });
  return arr;
}

//Req. 3d
let sumEvens = (arr) => {
  var sum = 0;
    for(var x of arr){
        if(x%2==0){
            sum=sum+x;
        }
    }
    return sum;
};
