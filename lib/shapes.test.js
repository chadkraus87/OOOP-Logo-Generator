const { shapes } = require('./shapes');

describe('Shapes', () => {
  it('should contain three shapes', () => {
    expect(shapes).toHaveLength(3);
  });

  it('should have valid shape types', () => {
    const validShapeTypes = ['circle', 'triangle', 'square'];
    const shapeTypes = shapes.map((shape) => shape.shape);
    expect(shapeTypes).toEqual(expect.arrayContaining(validShapeTypes));
  });

  it('should have valid points for each shape', () => {
    shapes.forEach((shape) => {
      const { shape: shapeType, points } = shape;
      expect(shapeType).toBeDefined();
      expect(points).toBeDefined();

      if (shapeType === 'circle') {
        const circlePoints = points.split(' ');
        expect(circlePoints).toHaveLength(4);
        expect(circlePoints.every((point) => !isNaN(Number(point)))).toBe(true);
      } else if (shapeType === 'triangle') {
        const trianglePoints = points.split(' ');
        expect(trianglePoints).toHaveLength(6);
        expect(trianglePoints.every((point) => !isNaN(Number(point)))).toBe(true);
      } else if (shapeType === 'square') {
        const squarePoints = points.split(' ');
        expect(squarePoints).toHaveLength(8);
        expect(squarePoints.every((point) => !isNaN(Number(point)))).toBe(true);
      }
    });
  });
});
