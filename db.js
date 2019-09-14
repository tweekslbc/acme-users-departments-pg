const fs = require('fs');
const FILE1 = './users.JSON'
const FILE2 = './departments.JSON'


const readJSON = ()=> {
  return new Promise((resolve, reject )=> {
    fs.readFile(FILE1, (err, data)=> {
      if(data){
        try {
          resolve(JSON.parse(data.toString()));
        }
        catch(ex){
          reject(ex);
        }
      }
      else {
        reject(err);
      }
    });
​
  });
};

const findAllUsers = ()=> {
  return readJSON();
}
const findAllDepartments = ()=> {
  return readJSON();
}

module.exports = {
  findAllUsers,
  findAllDepartments
}
