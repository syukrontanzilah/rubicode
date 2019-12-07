//the break keyword
for (let i = 0 ; i<99; i++){
    if (i > 5){
        break;
    }
    console.log('Banana.');
}

// latihan
const rapperArray = ['lil kim', 'jay-Z', 'Notorious','tupac'];
for(let rap = 0; rap<rapperArray.length; rap++){
    if(rap>2){
        break;
    }
    console.log(rapperArray[rap])
}

//latihan 2
var class2 = ['zain','mika','ola','sri','ukasyah','kiki']
for(var cl=0; cl<class2.length; cl++){
    if(cl>4){
        break;
    }
    console.log('name of class 2 is :'+class2[cl])
}
