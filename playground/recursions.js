function isObject(myVariable) {
  return typeof myVariable === 'object' && myVariable !== null;
}

function calcObjectLength(myObject) {
Object.entries(myObject).forEach(([key, value]) => {
    console.log(value);
    if (isObject(value)) {
      return length + calcOjectLength(value);
    }
    //console.log(length);
});
  return 1;
}

try {
  const myObject = {
    fruit: {
      banana: 'yellow',
      strawberry: 'red',
    },
    vegetables: {
      cucumber: 'green',
      pumpkin: 'orange',
    },
    fruchtgemuese: 'tomaten',
  };

  const objectLength = calcObjectLength(myObject);
  console.log(objectLength);
} catch (e) {
  console.log('error');
}
