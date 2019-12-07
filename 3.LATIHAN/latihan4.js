// SWITCH

//latihan 1
let groceryItem = 'papaya';
switch (groceryItem) {
    case 'papaya':
        console.log('papaya are $3');
        break;
case 'tomatto':
    console.log('Tomatto are $4');
    break;
case 'lime':
    console.log('Lime are $5');
    break;
case 'orange':
    console.log('Orange are $6');
    break;
default :
console.log('Invalid item');
break;
} // output: papaya are $3



// latihan 2
let colour = 'black';
switch (colour) {
    case 'yellow':
        console.log('Very dark');
        break;
    case 'black':
        console.log('dark');
        break;
    case 'green':
        console.log('light');
        break;
    default:
        console.log('Nice')
        break;
} // output : dark



// latihan 3
let country = 'USA';
switch (country) {
    case 'USA':
        console.log('I will study there');
        break;
    case 'Germany':
        console.log('I will chose germany');
        break;
    case 'Japan':
        console.log('I will chose Japan');
        break;
    default:
        console.log('Nice');
        break;
} // I will study there



// latihan 4
let ligaChampions = 'champion'
switch (ligaChampions) {
    case 'champion':
        console.log('The club will get throphy')
        break;
    case 'second place':
        console.log('The club will get runner up position')

    default:
        console.log('The club will degradate')
        break;
} // output : The club will get throphy



// latihan 5
let city = 'jakarta'
switch (city) {
    case 'jakarta':
        console.log('the city is hot');
        break;
    case 'bandung':
        console.log('the city is cold');
        break;
    case 'bogor':
        console.log('the city is raining');
        break;
    default:
        console.log('no city')
        break;
}  // output: the city is hot



//latihan 6
let number = 0
switch (number) {
    case 0:
        console.log('you must learn very hard');
        break;
    case 5:
        console.log ('you have try again');
        break
    default:
        console.log('you have try it')
        break;
} //output: you must learn very hard