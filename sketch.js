var weight = [35,38,40,45]
var sum = 0
var average

function setup() 
{
  createCanvas(400,400);
  sum = weight[0]+weight[1]+weight[2]+weight[3]
  average = sum/weight.length
  console.log(average)
}

function draw() 
{
background(51);

}

