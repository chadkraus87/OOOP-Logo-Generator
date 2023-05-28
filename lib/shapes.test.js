const { Shape, Circle, Triangle, Square } = require('./shapes');

// Tests using Jest
describe('Shape', () => {
  it('should create a Shape object with the given shape color', () => {
    const shape = new Shape('red');
    expect(shape.shapeColor).toBe('red');
  });

  it('should have an empty shape point string by default', () => {
    const shape = new Shape('red');
    expect(shape.getShapePoints()).toBe('');
  });

  it('should draw the SVG with the given text and text color', () => {
    const shape = new Shape('red');
    shape.draw('ABC', 'blue');
    // Add your assertion for checking the SVG output here
  });
});

describe('Circle', () => {
  it('should create a Circle object with the given shape color', () => {
    const circle = new Circle('blue');
    expect(circle.shapeColor).toBe('blue');
  });

  it('should calculate and return the circle shape points', () => {
    const circle = new Circle('blue');
    const points = circle.getShapePoints();
    // Add your assertion for checking the circle shape points here
  });
});

describe('Triangle', () => {
  it('should create a Triangle object with the given shape color', () => {
    const triangle = new Triangle('green');
    expect(triangle.shapeColor).toBe('green');
  });

  it('should return the triangle shape points', () => {
    const triangle = new Triangle('green');
    const points = triangle.getShapePoints();
    // Add your assertion for checking the triangle shape points here
  });
});

describe('Square', () => {
  it('should create a Square object with the given shape color', () => {
    const square = new Square('yellow');
    expect(square.shapeColor).toBe('yellow');
  });

  it('should return the square shape points', () => {
    const square = new Square('yellow');
    const points = square.getShapePoints();
    // Add your assertion for checking the square shape points here
  });
});

