function main() {
  let web: string = 'Hello World';
  console.log(web);
}

main()

let input = [1, 2];
let [first, second] = input;
console.log(first, second); // outputs 1

// swap variables
[first, second] = [second, first];
console.log(first, second); // outputs 1


let o = {
  a: "foo",
  b: 12,
  c: "bar"
};

let { a: newName1, b: newName2 } : {a: string, b: number} = o;

console.log(newName1);
console.log(newName2);