const things = ['desk', 'chair', 5, 'backpack', 3.4, 100]
const onlyNumber = things.filter(thing =>{
    return typeof thing === 'number';
});
console.log(onlyNumber)
// output: [5, 3.4, 100]

const eggs = ['circle', 2, 'white', 9, '5 kg']
const forYou = eggs.filter(egg =>{
    return typeof egg === 'string';
});
console.log(forYou)
// output : [ 'circle', 'white', '5 kg']

const hh = ['hen','chicken','duck', 9, 7 , 10]
const hhhh = hh.filter(hh=>{
    return typeof hh === 'string';
});
console.log(hhhh)