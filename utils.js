const fs = require('fs');

function modData(data) {
  const formatData = data.split('\n').map(item => parseInt(item.trim(), 10));
  return formatData;
}

module.exports = {
  readInput: (path) => {
    try {
      let data = fs.readFileSync(path, 'utf8');
      data = modData(data);
      return data;
    } catch (e) {
      console.log('Error:', e.stack);
    }
    return false;
  },
};
