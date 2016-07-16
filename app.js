"use strict"

function* ns(init, n){
    let index = init;
    while(index <= n)
        yield index++;
}
let range = (n) => [...ns(0, n)];
let equal = (arr_a, arr_b) => arr_a.join('_') == arr_b.join('_');
let isLower = (ch) => ch == ch.toLowerCase();
let forEach = Function.prototype.call.bind(Array.prototype.forEach);
let map = Function.prototype.call.bind(Array.prototype.map);
let filter = Function.prototype.call.bind(Array.prototype.filter);
let reduce = Function.prototype.call.bind(Array.prototype.reduce);
let concat = Function.prototype.call.bind(Array.prototype.concat);
let min = (...args) => Math.min.apply(Math, args);
let max = (...args) => Math.max.apply(Math, args);
let squer = (x) => Math.pow(x, 2);
let minLength = (...xss) => min.apply(null, map(xss, (xs) => xs.length));
let times = (count, fn) => map(range(count -1), fn); 
let zip = (...xss) => times(minLength.apply(null, xss), (i) => map(xss, (xs) => xs[i]));
let take = (xs, n) => xs.slice(0, n);
let lowers = (str) => str.split("").filter(isLower).length;

let factors = (n) => [...ns(1, n)].filter((x) => n % x == 0);
let prime = (n) => equal(factors(n), [1, n]);
let primes = (n) => [...ns(2, n)].filter(prime);

let tuples = (n) => (xs) => zip.apply(null, times(n, (i) => xs.slice(i)));
let pairs = tuples(2);
let triples = tuples(3);
let sorted = (xs) => pairs(xs).every( (pair) => pair[0] <= pair[1] );
let positions = (x, xs) =>
      zip(xs, [...ns(0, xs.length)])
      .filter( pair => pair[0] == x)
      .map( pair => pair[1])

// console.log(triples([...ns(1, 5)]))

let allTripls = (xs) => {
    let res = []
    for (let i = 0; i < xs.length; i++) {
        for (let j = 0; j < xs.length; j++) {
            for (let l = 0; l < xs.length; l++) {
                res.push([xs[i], xs[j], xs[l]]);
            }       
        }    
    }

    return res;
}
let pyths = (x) => filter(allTripls([...ns(1, x)]), (xs) => squer(xs[0]) + squer(xs[1]) == squer(xs[2]));
let empty = (xs) => xs.length === 0; 
function combinations(xs) {
    var fn = function(x, rest, a) {
        if (empty(x) && empty(rest))
            return;
        if (empty(rest)) {
            a.push([x]);
        } else {
            fn(concat(x,[rest[0]]), rest.slice(1), a);
            fn(x, rest.slice(1), a);
        }

        return a;
    }
    return fn([], xs, []);
}
let remove = (index, arr) => arr.filter((elem, i) => i != index); 
function allCombinations(n, xs){
    var fn = function(rest, res) {
        for (var i = 0; i < rest.lenght; i++){
            res.push(concat([rest[i]]), fn(remove(i, rest), res))
        }

        return res;
    }
    return fn(xs, []);
} 
// console.log(allCombinations([1,2,3]))



// var c = [
//   ['a','b','c','d'],
//   ['1','2','3', '4'],
//   ['q','w','e', 'r'],
//   ['5','6','7','8'],
//   ['z','x','c','v'],
//   ['!','"','£','$'],
//   ['H','J','K','L'],
//   ['9','8','7','6']
// ];

function permutate(abc, memo) {
    var options;
    memo = memo || abc.shift().slice(0);
    
    if(abc.length) {
        options = abc.shift();

        return permutate(abc, memo.reduce(function(all, item){
            return all.concat(options.map(function(option){
                return option + item;
            }))
        }, []))        
    }

    return memo;
};

console.log(permutate([['1','2','3'], ['1','2','3'], ['1','2','3']]));