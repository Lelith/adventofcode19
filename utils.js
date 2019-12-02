const fs = require('fs');


module.exports = {
  modDataNewline: (data) => {
    const formatData = data.split('\n').map((item) => parseInt(item.trim(), 10));
    return formatData;
  },
  modDataCommas: (data) => {
    const formatData = data.split(',').map((item) => parseInt(item.trim(), 10));
    return formatData;
  },
  readInput: (path) => {
    try {
      const data = fs.readFileSync(path, 'utf8');
      return data;
    } catch (e) {
      console.log('Error:', e.stack);
    }
    return false;
  },
};
