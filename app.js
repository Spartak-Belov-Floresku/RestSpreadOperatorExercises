const filterOutOdds = (...nums) =>  nums.filter(num => num % 2 === 0);

const findMin = (...nums) => nums.reduce((min, next) => min < next? min : next);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr,...nums) => [...arr, ...nums.map(num => num * 2)];

const removeRandom = (items) => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index+1, items.length)];
}

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, val) => ({...obj, [key]: val});
