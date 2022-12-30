const arr = [10, 20, 30, 40];

arr.map((i) => console.log(i));

const obj = {
    p1: "aaaa",
    p2: "bbbb"
}

const { p1 } = obj;

console.log(p1);

// destructuring array

const [a, b] = arr;

console.log(a,b);
