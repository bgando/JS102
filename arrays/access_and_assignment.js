//access and assignments

var box = [];

box[0] = true;
box[1] = 'meow';

var i = 0;
console.log(box[0])
console.log(box[i])

box['size'] = 9 //it is possible because arrays is an object at its core
console.log(box[2])
console.log(box.size)
console.log(box['size'])


box.push({ 'hello': 'goodbye' });
console.log(box.pop())

console.log(box)



