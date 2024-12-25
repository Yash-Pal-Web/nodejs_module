const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

if(!fs.existsSync(dataFolder)){
  fs.mkdirSync(dataFolder);
 // console.log("data folder created");
}

// create file

const filePath = path.join(dataFolder, 'example.txt');
fs.writeFileSync(filePath,' Hello from nodejs');

//console.log(' file created sucsessfuly')

const  readFileContent = fs.readFileSync(filePath, 'utf8');
console.log("file content :" , readFileContent);
fs.appendFileSync(filePath, "\n This is new file");
console.log('new file added succussfull');


// using async way

const asyncFilePath = path.join(dataFolder, 'async example.txt');
fs.writeFile(asyncFilePath, ' hello async nodejs', (err)=>{
  if(err) throw err;
  console.log("async file created successfully");
  fs.readFile(asyncFilePath, 'utf8', (err, data)=>{
    if(err) throw err;
    console.log(data, 'async file conytent');
    fs.appendFile(asyncFilePath, '\n new line added',(err)=>{
      if(err) throw err;
      console.log("append file successfully");
      fs.readFile(asyncFilePath,  'utf8',(err, updateddata)=>{
        if(err) throw err;
        console.log("reade updated data", updateddata);
      })
    })
  })
})