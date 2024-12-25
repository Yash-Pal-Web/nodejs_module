const path = require('path');
console.log("Directory name", path.dirname(__filename))
console.log("file name", path.basename(__filename));
console.log("file extension name", path.extname(__filename))

const joinPath = path.join("/user", 'document', 'node', ' project');
console.log('Join path', joinPath);

const resolvePath = path.resolve("user", "documentr", "node", "project");
console.log(" resolve path", resolvePath);