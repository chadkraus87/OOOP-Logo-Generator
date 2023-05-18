const sum = require('./sum');
// Require my classes
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');