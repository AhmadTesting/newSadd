/****************************************************************************
 * 
 *  =============== Set vs WeakSet And Garbage Collection  =================
 *                                         
 ***************************************************************************/


// let mainObject = { A: 1 };

// let mySet = new Set([mainObject]);

// let objectOne = { B: 2 };
// let objectTwo = { C: 3 };
// mySet.add(objectOne).add(objectTwo);

// console.log(mySet);
// console.log(mySet.has(objectOne));
// console.log(mySet.has(objectTwo));
// console.log(mySet.size);
// console.log(mySet.keys());
// mySet.delete(objectOne);
// console.log(mySet.has(objectOne));
// objectTwo = null;
// console.log(mySet.has(objectTwo));
// console.log(mySet);

// mySet.add("string").add(12);

// console.log(mySet);
// mySet.forEach(val => {
//     console.log(val);
// })

// weakset 


let mainObject = { A: 1 };

let myWeakSet = new WeakSet([mainObject]);

let objectOne = { B: 2 };
let objectTwo = { C: 3 };
myWeakSet.add(objectOne).add(objectTwo);

console.log(myWeakSet);
console.log(myWeakSet.has(objectOne));
console.log(myWeakSet.has(objectTwo));
// console.log(myWeakSet.size); // cant get the size of weakSet
// console.log(myWeakSet.keys()); // doesn't work in weakSet
myWeakSet.delete(objectOne);
console.log(myWeakSet.has(objectOne));
objectTwo = null;
console.log(myWeakSet.has(objectTwo));
console.log(myWeakSet);

// myWeakSet.add("string").add(12); cant add it in weakSet

// console.log(myWeakSet);
// myWeakSet.forEach(val => {
//     console.log(val);
// }) 
// cant use forEach with WeakSet

console.log('#'.repeat(100));
/****************************************************************************
 * 
 *  =============== Symbol Iterator And For Of Loop  =================
 *                                         
 ***************************************************************************/
console.log('#'.repeat(100));

let myname = "ahmad",
    mynumber = 12,
    myObject = {},
    myArray = [1, 2, 3, 4, 5];
console.log(typeof(myname[Symbol.iterator]));
console.log(typeof(mynumber[Symbol.iterator]));
console.log(typeof(myObject[Symbol.iterator]));
console.log(typeof(myArray[Symbol.iterator]));

let myIteratorObject = myname[Symbol.iterator]();
console.log(myIteratorObject);
console.log(myIteratorObject.next());
console.log(myIteratorObject.next());
console.log(myIteratorObject.next());
console.log(myIteratorObject.next());
console.log(myIteratorObject.next());
console.log(myIteratorObject.next());

for (let character of myname) {
    console.log(character);
}
/**
 * 
 * @param {*} param 
 * @param {*} para 
 */
function myprint(param, para) {
    return para * param;
}

console.log('#'.repeat(100));

/****************************************************************************
 * 
 *  =============== custom iterator object  =================
 *                                         
 ***************************************************************************/

let myObj = {
    name: "ahmad",
    age: 26,
    skills: "javascript",
    [Symbol.iterator]() {
        let steps = 0;
        let properties = Object.keys(this);
        return {
            next() {
                return {
                    value: myObj[properties[steps]],
                    done: (steps++) === (properties.length)
                }
            }
        }
    }
}
let newObj = {
    name22: "ahmad",
    age22: 26,
    [Symbol.iterator]() {
        let counter = 0;
        let properties22 = Object.keys(this);
        return {
            next() {
                return {
                    value: newObj[properties22[counter]],
                    done: counter++ === properties22.length
                }
            }
        }
    }
}

for (let item of myObj) {
    console.log(item);
}
console.log('#'.repeat(100));

console.log(newObj["name22"]);

/****************************************************************************
 * 
 *  =============== generator  =================
 *                                         
 ***************************************************************************/
console.log('#'.repeat(100));
console.log('#'.repeat(100));
console.log('#'.repeat(100));

function* generateText() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
let iterator = generateText();
console.log(typeof(iterator));
console.log(iterator.next().value);
console.log('#'.repeat(100));
console.log('did something');
console.log(iterator.next().value);
console.log('did something 2');
console.log(iterator.next().value);
console.log('did something 3');
console.log(iterator.next().value);
console.log('did something 4');
console.log(iterator.next().value);
console.log('did something 5');

let someArray = [10, 20, 30, 40, 50];

function* generateNumbers(num) {
    for (let i = 0; i < num.length; i++) {
        yield num[i];
    }
}
console.log('#'.repeat(100));

let generator = generateNumbers(someArray);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

console.log('#'.repeat(100));

function* geneNumbers() {

    yield*[1, 2, 3, 4, 5];
    yield 7;
}

let myGen = geneNumbers();
console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);