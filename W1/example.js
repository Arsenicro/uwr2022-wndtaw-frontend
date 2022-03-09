const users = require("./users.json");

const result = users
  .filter((user) => user.isActive && user.paymentAccepted)
  .sort((u1, u2) => u1.price - u2.price)
  .map(({ isActive, paymentAccepted, ...rest }) => rest);

console.log(result);
