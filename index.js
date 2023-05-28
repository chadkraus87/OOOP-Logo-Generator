const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const shapes = ['circle', 'triangle', 'square'];
const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white','orange', 'purple', 'pink', 'brown', 'gray', 'custom'];

class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  getShapePoints() {
    return '';
  }

  draw(text, textColor) {
    const shape = this.getShapePoints();
    const shapeColor = this.shapeColor === 'custom' ? this.customColor : this.shapeColor;

    const svg = `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <g>
        <polygon points="${shape}" fill="${shapeColor}" />
        <text x="150" y="100" text-anchor="middle" fill="${textColor}">${text}</text>
      </g>
    </svg>`;

    // save svg file
    const filePath = path.join(__dirname, 'examples', 'logo.svg');
    fs.writeFileSync(filePath, svg);

    // print output message
    console.log('Generated logo.svg');
  }
}

class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  getShapePoints() {
    const centerX = 150;
    const centerY = 100;
    const radius = 50;
    const points = [];
    for (let angle = 0; angle < 360; angle += 10) {
      const x = centerX + radius * Math.cos(angle * Math.PI / 180);
      const y = centerY + radius * Math.sin(angle * Math.PI / 180);
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  }
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  getShapePoints() {
    return '150,50 250,150 50,150';
  }
}

class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  getShapePoints() {
    return '100,50 200,50 200,150 100,150';
  }
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: function(value) {
        const valid = /^[a-zA-Z]{1,3}$/.test(value);
        return valid || 'Please enter up to three alphabetical characters.';
      },
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'Select a text color or enter a custom color:',
      choices: [...colors, 'custom'],
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: shapes,
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'Select a shape color or enter a custom color:',
      choices: [...colors, 'custom'],
    },
    {
      type: 'input',
      name: 'customColor',
      message: 'Enter a custom color:',
      validate: function(value) {
        const validKeyword = colors.includes(value.toLowerCase());
        const validHex = /^#[0-9A-F]{6}$/i.test(value);
        return validKeyword || validHex || 'Please enter a valid color (e.g., "red" or "#FF0000" for red).';
      },
      when: function(answers) {
        return answers.textColor === 'custom' || answers.shapeColor === 'custom';
      },
    },
  ])
  .then(answers => {
    let shape;
    switch (answers.shape) {
      case 'circle':
        shape = new Circle(answers.shapeColor);
        break;
      case 'triangle':
        shape = new Triangle(answers.shapeColor);
        break;
      case 'square':
        shape = new Square(answers.shapeColor);
        break;
      default:
        shape = new Shape(answers.shapeColor);
        break;
    }

    const text = answers.text;
    const textColor = answers.textColor === 'custom' ? answers.customColor : answers.textColor;

    shape.draw(text, textColor);
  })
  .catch(error => {
    console.log(error);
  });