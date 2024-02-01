/*
 * create types by combining simple ones
 * two ways to create types: unions, generics
 */

// unions: declare that a type could be one of the many types
// ex: parameter item that could be a string or array of strings
function getLen(item: string | string[]) {
  return item.length;
}

console.log(getLen(["a", "b", "c"]));

// generics: like a template, allows us to define placeholder types which are then replaced when code is executed with special types passed in
type arr = Array<string>;
const fruits: arr = ["apple", "banana"];

/*
 * structural type system or "duck typing"
 * if two objects have the same shape, they're considered to be the same type
 * note: requires only a subset of object's fields to match
 */
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26, z: 21 }; // works!
logPoint(point);
