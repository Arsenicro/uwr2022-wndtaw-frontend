const sum = (a, b) => {
    return a + b;
};

const data = require("./data.json");

console.log(sum(data.value1, data.value2));
