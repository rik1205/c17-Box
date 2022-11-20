var box1
var box2
var box3

function setup() {
  createCanvas(400, 400);

  box1 = new Box(200, 198, 79, 99, 4);
  box2 = new Box(300, 300, 50, 90, 2)
  box3 = new Box(10, 50, 20, 70, 3)

}

function draw() {
  background(220);

  box1.show()
  box1.move()
  box2.show()
  box2.move()
  box3.show()
  box3.move()

}