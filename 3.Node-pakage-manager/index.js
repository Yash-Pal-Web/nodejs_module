const lodash = require('lodash');

const names =["jsh","hjsd","shd"];
const capatalized = lodash.map(names, lodash.capitalize);
console.log(capatalized);