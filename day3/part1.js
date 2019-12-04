const utils = require('../utils');

function convertData(data) {
  return data.split('\n').map((item) => item.split(','));
}

function calculatePoints(wire) {
  let lastPoint = [0, 0];
  const wirePoints = [];
  wire.map((wirePath) => {
    const direction = wirePath.slice(0, 1);
    const steps = parseInt(wirePath.slice(1).trim(), 10);
    let newPoint = [0, 0];
    let i = steps;
    switch (direction) {
      case 'U':
        for (i; i > 0; i -= 1) {
          newPoint = [lastPoint[0], (lastPoint[1] + 1)];
          wirePoints.push(newPoint);
          lastPoint = newPoint;
        }
        break;
      case 'D':
        for (i; i > 0; i -= 1) {
          newPoint = [lastPoint[0], (lastPoint[1] - 1)];
          wirePoints.push(newPoint);
          lastPoint = newPoint;
        }
        break;
      case 'R':
        for (i; i > 0; i -= 1) {
          newPoint = [lastPoint[0] + 1, lastPoint[1]];
          wirePoints.push(newPoint);
          lastPoint = newPoint;
        }
        break;
      case 'L':
        for (i; i > 0; i -= 1) {
          newPoint = [lastPoint[0] - 1, lastPoint[1]];
          wirePoints.push(newPoint);
          lastPoint = newPoint;
        }
        break;
      default: return false;
    }
  });
  return wirePoints;
}

function calculateCrosspoints(wire1Points, wire2Points) {
  const crossPoints = [];
  let length = wire2Points.length;
  wire1Points.map((point1) => {
    let crossPoint = -1;
    const pointA = JSON.stringify(point1)
    let i = 0;
    while (i < length -1 || crossPoint > 0 ) {
      crossPoint = pointA === JSON.stringify(wire2Points[i]);
      if(crossPoint>0){
        crossPoints.push(point1);
      }
      i += 1;
    }
  });
  return crossPoints;
}

try {
  // const data = utils.readInput('./example.txt');
  let data = utils.readInput('./input.txt');

  const wirePlan = convertData(data);
  const wire1Points = calculatePoints(wirePlan[0]);
  const wire2Points = calculatePoints(wirePlan[1]);
  const crossPoints = calculateCrosspoints(wire1Points, wire2Points);
  console.log(crossPoints);
  const distances = [];
/*  crossPoints.map((cross) => {
    distances.push(utils.calcManhattandistance(cross, [0, 0]));
  });*/
  //console.log(Math.min.apply(null, distances));
} catch (e) {
  console.log('Error', e.stack);
}
