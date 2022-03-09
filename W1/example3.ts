const sum = (a: number, b): any => {
    return a + b;
};

import data = require("./data.json");

console.log(sum(+data.value1, +data.value2));
