// console.log("Hello");

// console.log(document);
// console.log(window);

// console.log(global);

// const double = (a) => a * 2;

// const [, , n] = process.argv;
// console.log(sum(n));

const add = (n1, n2) => n1 + n2;

const [, , n1, n2] = process.argv;
console.log(add(+n1, +n2));
