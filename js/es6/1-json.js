const fs = require('fs');

const personJson = fs.readFileSync('./1-json.json') 
const personObj = JSON.parse(personJson)

personObj.name = "Dom";
personObj.age = "20";

const modifiedPersonJson = JSON.stringify(personObj);
fs.writeFileSync('./1-json.json', modifiedPersonJson);