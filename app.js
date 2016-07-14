"use strict"

function* ns(init, n){
    let index = init;
    while(index <= n)
        yield index++;
}
let equal = (arr_a, arr_b) => arr_a.join('_') == arr_b.join('_');
let isLower = (ch) => ch == ch.toLowerCase();
let map = Function.prototype.call.bind(Array.prototype.map);
let filter = Function.prototype.call.bind(Array.prototype.filter);
let reduce = Function.prototype.call.bind(Array.prototype.reduce);
let concat = Function.prototype.call.bind(Array.prototype.concat);
let min = (args) => Math.min.apply(Math, args);
let max = (args) => Math.max.apply(Math, args);

var zip = (xs, ...yss) => {
   let input = concat([xs], yss);
   let minLength = min.apply(null, map(input, (xs) => xs.length))
   return map([...ns(0, minLength)], (i) => map(input, (xs) => xs[i]))
};

// let factors = (n) => [...ns(1, n)].filter((x) => n % x == 0);
// let prime = (n) => equal(factors(n), [1, n]);
// let primes = (n) => [...ns(2, n)].filter(prime);

let take = (xs, n) => xs.slice(0, n);

// let zip = (xs, ys) => take(xs, Math.min(xs.length, ys.length)).map((x, i) => [x, ys[i]]);

let pairs = (xs) => zip(xs, xs.slice(1));

let sorted = (xs) => pairs(xs).every( (pair) => pair[0] <= pair[1] );

// let positions = (x, xs) => xs.reduce((last, curent, i) => {
//    if (curent == x) {
//       last.push(i);
//    }
//    return last;
// }, []);

// let positions = (x, xs) =>
//       zip(xs, [...ns(0, xs.length)])
//       .filter( pair => pair[0] == x)
//       .map( pair => pair[1])
// positions(0, [1,0,0,1,0,1,1,0])

let lowers = (str) => str.split("").filter(isLower).length;

// console.log(zip(zip([1,2,3], [4,5,6]), [7,8,9]))
