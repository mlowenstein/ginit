const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryPath: () => {
    return path.basename(process.cwd());
  },
  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  }
};