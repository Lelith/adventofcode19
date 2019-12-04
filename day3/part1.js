const utils = require('../utils');

function convertData(data) {
  return data.split('\n').map((item) => item.split(','));
}

function calculatePoints(wire) {
  let x = 0;
  let y = 0;
  let newPoint;
  const wirePoints = [];
  wire.map((wirePath) => {
    const direction = wirePath.slice(0, 1);
    const steps = parseInt(wirePath.slice(1).trim(), 10);
    let i = steps;
    switch (direction) {
      case 'U':
        for (i; i > 0; i -= 1) {
          y += 1;
          newPoint = `${x},${y}`;
          wirePoints.push(newPoint);
        }
        break;
      case 'D':
        for (i; i > 0; i -= 1) {
          y -= 1;
          newPoint = `${x},${y}`;
          wirePoints.push(newPoint);
        }
        break;
      case 'R':
        for (i; i > 0; i -= 1) {
          x += 1;
          newPoint = `${x},${y}`;
          wirePoints.push(newPoint);
        }
        break;
      case 'L':
        for (i; i > 0; i -= 1) {
          x -= 1;
          newPoint = `${x},${y}`;
          wirePoints.push(newPoint);
        }
        break;
      default: return false;
    }
  });
  return wirePoints;
}

function calculateCrosspoints(wire, wire1Points) {
  const crossPoints = [];
  let x = 0;
  let y = 0;
  let newPoint;
  wire.map((wirePath) => {
    const direction = wirePath.slice(0, 1);
    const steps = parseInt(wirePath.slice(1).trim(), 10);
    let i = steps;
    switch (direction) {
      case 'U':
        for (i; i > 0; i -= 1) {
          y += 1;
          newPoint = `${x},${y}`;
          if (wire1Points.indexOf(newPoint) > 0) {
            crossPoints.push([x, y]);
          }
        }
        break;
      case 'D':
        for (i; i > 0; i -= 1) {
          y -= 1;
          newPoint = `${x},${y}`;
          if (wire1Points.indexOf(newPoint) > 0) {
            crossPoints.push([x, y]);
          }
        }
        break;
      case 'R':
        for (i; i > 0; i -= 1) {
          x += 1;
          newPoint = `${x},${y}`;
          if (wire1Points.indexOf(newPoint) > 0) {
            crossPoints.push([x, y]);
          }
        }
        break;
      case 'L':
        for (i; i > 0; i -= 1) {
          x -= 1;
          newPoint = `${x},${y}`;
          if (wire1Points.indexOf(newPoint) > 0) {
            crossPoints.push([x, y]);
          }
        }
        break;
      default: return false;
    }
  });
  return crossPoints;
}

try {
  // const data = utils.readInput('./example.txt');
  const data = utils.readInput('./input.txt');

  const wirePlan = convertData(data);
  const wire1Points = calculatePoints(wirePlan[0]);
  const crossPoints = calculateCrosspoints(wirePlan[1], wire1Points);
  const distances = [];
  crossPoints.map((cross) => {
    distances.push(utils.calcManhattandistance(cross, [0, 0]));
  });
  console.log(Math.min.apply(null, distances));
} catch (e) {
  console.log('Error', e.stack);
}
