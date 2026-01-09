// js object to json conversion

const myInfo ={
    Name: "Deepanshu",
    Address: "Meerut",
    Age: "20",
    Height: '5feet7in'
};

const DataInJsonFormat = JSON.stringify(myInfo);

console.log(DataInJsonFormat);

const jsonToJsObject = JSON.parse(DataInJsonFormat);

console.log(jsonToJsObject);