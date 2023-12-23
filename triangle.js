class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    this.total = this.sideA + this.sideB + this.sideC;
    this.sides = 3;
    this.average = this.total / this.sides;
  }

  equilateral() {
    return this.average === this.sideA;
  }

  isosceles() {
      let arrOne = [this.sideA, this.sideB];
      let arrTwo = [this.sideB, this.sideC];
      let arrThree = [this.sideA, this.sideC];

      function testSides(arr) {
        return ((arr[0] + arr[1]) / 2 === arr[0]);
      }

      return (testSides(arrOne) || testSides(arrTwo) || testSides(arrThree));
    }

  scalene() {
    return (!this.isosceles() && !this.equilateral());
  }

  kind() {
    if (this.scalene()) {
      return "scalene";
    } else if (this.isosceles()) {
      return "isosceles";
    } else {
      return "equilateral";
    }
  }
}

let tri = new Triangle(3, 3, 3);

console.log(tri.scalene());

