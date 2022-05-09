
function first() {
  console.log("A")
};

function second() {
  console.log("B");
  first();
  console.log("C")
}

const p = new Promise(function executor(resolve, reject) {
  const a = 1 + 1;
  if (a === 2) {
    resolve("Done!");
  } else {
    reject("Rejected!");
  }
})

setTimeout(function cb() { console.log("E") }, 0)

p.then(
  function fullfiled(value) { console.log(value) },
  function onRejected(value) { console.log(value) })
.f

console.log("D");
second();