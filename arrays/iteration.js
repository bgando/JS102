var box = [];

box[0] = true;
box[1] = 'meow';
box['size'] = 9;
box.area = 100;
box.push({ 'hello': 'goodbye' });

console.log('\n')

for (const key in box) {
    console.log(key + ':' + box[key])
}

console.log('\n')
console.log('number of indices in box is : ' + box.length);
console.log('\n')


for (let index = 0; index < box.length; index++) {
    console.log(box[index])
}