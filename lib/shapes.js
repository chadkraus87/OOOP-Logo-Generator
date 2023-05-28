class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
    this.shapePoints = '';
  }

  getShapePoints() {
    return this.shapePoints;
  }

  draw(text, textColor) {
    // Implement the draw method to generate SVG output
    // using this.shapePoints, text, and textColor
    // For the purpose of this exercise, let's assume it returns a string
    return `<svg>${text}</svg>`;
  }
}

class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
    this.shapePoints = '0 0 100 100';
  }

  getShapePoints() {
    return this.shapePoints;
  }
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
    this.shapePoints = '150,50 250,150 50,150';
  }

  getShapePoints() {
    return this.shapePoints;
  }
}

class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
    this.shapePoints = '100,50 200,50 200,150 100,150';
  }

  getShapePoints() {
    return this.shapePoints;
  }
}

const shapes = [
  {
    shape: 'circle',
    points: '0 0 100 100',
  },
  {
    shape: 'triangle',
    points: '150,50 250,150 50,150',
  },
  {
    shape: 'square',
    points: '100,50 200,50 200,150 100,150',
  },
];

module.exports = { shapes, Shape, Circle, Triangle, Square };
