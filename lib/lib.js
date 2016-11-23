    const fs = require('fs');
    const path = require('path');
    let moduleList = [];
    let list = fs.readdirSync(path.resolve(__dirname, 'innerLib'));

    exports.getModuleList = getModuleList;

    function getModuleList(callback) {
      return callback(null, moduleList);
    }

    list.forEach(filename => {
      moduleList.push({
        name: filename
      });
    });