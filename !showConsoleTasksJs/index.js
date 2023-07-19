//  1 - Что выведет консоль ?
const set1 = new Set();
set1.add(99);
set1.add('Serge')
set1.add({name: 'Serge'});

for (let item of set1) {
    console.log(item + 333)
}

/*
432 // 333 + 99
'Serge333'
'[object Object]333' // {name: 'Serge'} - является объектом. 
Ни число, ни объект не являются строкой, поэтому они приводятся к строке.
*/

//  2 - Что выведет консоль ?
console.log(Promise.resolve(5)); //  {<fulfilled>: 5} - . 
// Сам метод возвращает обещание с разрешенным значением (<fulfilled>) В этом случае мы просто передали 
// числовое значение 5. Возвращается разрешенное обещание со значением 5.


//  3 - Что выведет консоль ?
// Объекты передаются по ссылке. Когда мы проверяем объекты на строгое равенство (===), 
// мы сравниваем их ссылки. Мы устанавливаем значение по умолчанию для person2, равное объекту person3, 
// и передаем объект person3 в качестве значения для person1. Это означает, что оба значения имеют ссылку на одно и то же место в памяти, поэтому они равны.

function compare3(person1, person2 = person3) {
    if (person1 !== person2) {
        console.log('not the same')
    } else {
        console.log('they are the same')
    }
}

const person3 = {name: 'Serge'};
compare3(person3) // they are the same

//  4 - Что выведет консоль ?
// В JavaScript у нас есть два способа доступа к свойствам объекта: нотация в скобках или нотация в точках. 
// В этом примере мы используем точечную нотацию (colorConfig.colors) вместо скобочной нотации (colorConfig["colors"]).

const colorConfig4 = {
    red: true,
    blue: false,
    green: true,
    black: true,
    yellow: false,
}

const colors4 = ['pink', 'red', 'blue'];
console.log(colorConfig4[colors4[1]]); // true


//  5 - Что выведет консоль ?
console.log('💛' === '💛'); // true
console.log('💛' == '💛'); // true
// Под капотом смайлики - это юникоды. Юникод для сердца смайликов "U+1F49B". Они всегда одинаковы для одного и того же смайлика, 
// поэтому мы сравниваем две одинаковые строки друг с другом, что возвращает true.

//  6 - Что выведет консоль ?
// С помощью метода JSON.parse () мы можем разобрать строку JSON в значение JavaScript.

// Преобразование объекта в допустимый JSON, затем преобразование строки JSON в значение JavaScript:
const jsonArray6 = JSON.stringify({ name: 'Lydia' }) // '{"name":"Lydia"}'
console.log(JSON.parse(jsonArray6)) // { name: 'Lydia' }

// Преобразование числа в допустимый JSON, затем преобразование строки JSON в значение JavaScript:
const jsonNumber6 = JSON.stringify(4) // '4'
console.log(JSON.parse(jsonNumber6)) // 4

// Преобразование значения массива в допустимый JSON, затем разбор строки JSON в значение JavaScript:
const jsonArr6 = JSON.stringify([1, 2, 3]) // '[1, 2, 3]'
console.log(JSON.parse(jsonArr6) )// [1, 2, 3]


//  7 - Что выведет консоль ?
let name7 = 'Lydia'

function getName7() {
  console.log(name7)
}

getName7() // Lydia

//  8 - Что выведет консоль ?

let name8 = 'Lydia'

function getName8() {
  console.log(name8);
  let name8 = 'Serge';
}

// getName8() // ReferenceError: Cannot access 'name8' before initialization

//  9 - Что выведет консоль ?
// Выражения внутри литералов шаблона расчитываются первыми. Это означает, что строка будет содержать 
// возвращаемое значение выражения, в данном случае немедленно исполняемую функцию (x => x)('I love'). 
// Мы передаем значение 'I love' в качестве аргумента стрелочной функции x => x. x равно 'I love', 
// которое и возвращается. Это приводит к I love to program.
console.log(`${(x => x)('i love')} to program`)

//  10 - Что выведет консоль ?
const person10 = {
    name: 'Serge',
}

Object.freeze(person10);
person10.name = 'Peter';
console.log(person10.name); // Serge

//  11 - Что выведет консоль ?
// Этот метод используется для конвертации числа в число с указанной точностью.
// Метод возвр значение в виде строки
const num11 = 10.1122;
const newNum11 = num11.toPrecision(3);
console.log(typeof newNum11, newNum11); // string 10.1

// 12- Что выведет консоль ?
const num12 = true;
console.log(Number(num12)); // 1
const num12_2 = false;
console.log(Number(num12_2)); // 0
const num12_3 = '777';
console.log(Number(num12_3)); // 777

// 13 -  Что выведет консоль ?
// Проверяем есть ли определенный элемент в массиве или нет
const arr13 = [41,42,43,44];
console.log(arr13.includes(44)); // true
console.log(arr13.includes(45)); // false

// 14 -  Что выведет консоль ?
// spread оператор принимает массив и расширяет его на отдельные элементы
const arr14 = [55,56,57,58,59];
console.log(...arr14); // 55 56 57 58 59

// 15 -  Что выведет консоль ?
// метод reduce() - сводит массив к одному значению
const arr15 = [1,2,3,4,5];
const newArr15 = arr15.reduce((first, second) => first + second, 100);
console.log(newArr15); // 115

// 16 -  Что выведет консоль ?
const arr16 = [1,2,3,4];
const result16 = arr16.filter(item => item > 2);
console.log(result16); // [ 3, 4 ]

// 17 -  Что выведет консоль ?
const arr17 = [1,2,3,4];
const result17 = arr17.map(item => item > 2);
console.log(result17); // [ false, false, true, true ]

// 18-  Что выведет консоль ?
const a18 = c => c;
const b18 = c => c;
console.log(a18 === b18); // false
console.log(a18(4) === b18(4)); // true

// 19 - Что выведет консоль ?
// Object.entries() - возвр, обработав переданн ему объект, массив, содержащ массивы - ключ значение
const user19 = {
    name: 'Serge',
    secondName: 'Ivanov',
    age: 77,
    car: 'kia'
}

console.log(Object.entries(user19));
/*
[
  [ 'name', 'Serge' ],
  [ 'secondName', 'Ivanov' ],
  [ 'age', 77 ],
  [ 'car', 'kia' ]
]
*/

// 20 - Что выведет консоль ?
// метод - Object.seal() - позволяет запечатать объект, предотвратив добавление новых свойств, при этом существ св-ва можно менять
const obj20 = {
    name: 'Anna'
}
Object.seal(obj20);
obj20.name = 'Katya';
obj20.car = 'Kia';
console.log(obj20); // { name: 'Katya' }

// 21 - Что выведет консоль ?
// flat - Это метод, который создает новый массив со всеми элементами вложенного массива, 
// рекурсивно объединенными с вышестоящим массивом до заданной глубины.
const array21 = [1, 2, [3, 4]];
console.log(array21.flat()); // [1, 2, 3, 4];

// 22 - Что выведет консоль?
const crazyArray22 = [1, 2, [3, 4], [[5], [6, [7,8]]]];
console.log(crazyArray22.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8];

// 23 - Что выведет консоль?
let arr23 = [1, 2, 3, 4, 5, 6];
let evenNumbers23 = arr23.filter(num => num % 2 === 0);
console.log(evenNumbers23); // [2, 4, 6]

// 24 - Что выведет консоль?
for (var i24 = 0; i24 < 5; i24++) {}
console.log(i24) // 5

// 25 - Что выведет консоль?
// Объект Set позволяет хранить уникальные значения любого типа, будь то примитивные значения или ссылки на объекты.
// Метод has() возвращает логическое значение, указывающее, существует ли элемент с указанным значением в объекте Set или нет. 
// Он возвращает true, даже если добавленное значение не определено.

const set25 = new Set();
set25.add(undefined);
console.log(set25.has(undefined)); // true

// 26 - Что выведет консоль?
// Метод JSON.stringify() преобразует значение JavaScript в строку JSON. У метода есть второй необязательный параметр replacer.
const user26 = {
    name: 'Serge',
    age: 35,
    email: 's@tut.by'
}

const data26 = JSON.stringify(user26,['name', 'age']);
console.log(data26); // {"name":"Serge","age":35}

// 26 - Что выведет консоль?
console.log('9' > '19'); // true
console.log('01' == '1'); // false

// 27 - Что выведет консоль?
const myArr27 = [1,2,'2',3,3,'3',4];
const mySetArr27 = [...new Set(myArr27)];
console.log(mySetArr27); // [ 1, 2, '2', 3, '3', 4 ]

// 28 - Что выведет консоль?
const myArr28 = [3,2,11,1];
console.log(myArr28.sort()); // [ 1, 11, 2, 3 ]

// 29 - Что выведет консоль?
const numbers29 = [1,2,3,4,5];
const [x29] = numbers29;
console.log(x29); // 1

// 30 - Что выведет консоль?
// Деструктуризация работает с любыми итерируемыми объектами. Строка - итерируемая, число - нет.
const [a30, ...x30] = 'hello';
console.log(a30, x30); // h [ 'e', 'l', 'l', 'o' ]

// const [a30_2, ...x30_2] = 12345;
// console.log(a30_2, x30_2); // TypeError: 12345 is not iterable

// 31 - Что выведет консоль?
// И str[index], и charAt(index) возвращают указанный символ из строки. Разница в том, что, 
// если предоставленный вами параметр index выходит за пределы этого диапазона, charAt вернёт пустую строку, тогда как str[index] - undefined.
const myCompany31 = 'helloWorld';
console.log(myCompany31[25]); // undefined
console.log(myCompany31.charAt(50)); // ''

// 32 - Что выведет консоль?
class Parent {};
class Child extends Parent{};
let item32 = new Child();
console.log(item32 instanceof Child); // true
console.log(item32 instanceof Parent); // true

// 33 - Что выведет консоль?
// Строки в JS сравниваются по значению. Несмотря на разную запись значения этих двух строк одинаковые.
const str33_1 = 'How\nare\nyou';
const str33_2 = `How
are
you`;
console.log(str33_1 === str33_2); // true   /n

// 34 - Что выведет консоль?
const date34 = new Date('Mon May 01 2023');
console.log(date34.getDate()); // 1 - day 1,2,3,4,5,6,7...31
console.log(date34.getMonth()); // 4 // may - 0,1,2,3,4

// 35 - Что выведет консоль?
console.log(1 + 2 + '1'); // 31 
console.log('1' + 1 + 2); // 112

// 36 - Что выведет консоль?
console.log(0 == '0'); // true
console.log(0 === '0'); // false
console.log(0 == []); // true
console.log(0 === []); // false
console.log('0' == []); // false
console.log('0' === []); // false

// 37 - Что выведет консоль?
console.log(null > 0, null < 0, null == 0, null >= 0); // false false false true

// 38 - Что выведет консоль?
for (var i = 0; i < 10; i++) {}
console.log(i); // 10 тк На итерации i = 9 , условие i < 10 вернет true а потом Снова проверка условия: 10 < 10 = false

// 39 - Что выведет консоль?
// Object.freeze(obj) замораживает только obj и его свойства. Он не замораживает значения этих свойств.
const obj39 = {arr: ['foo']};
Object.freeze(obj39);
obj39.arr.push('test');
console.log(obj39.arr.length); // 2

// 40 - Что выведет консоль?
let x40 = 5;
x40 = (x40++ , x40 = addFive(x40), x40 *= 2, x40 -= 5, x40 += 10);
function addFive(num){
    return num + 5;
}
console.log(x40); // 5 + 1 -- 6+5=11 --11*2=22 -- 22-5=17; 17+10 =27 ОТВЕТ: 27;

// 41 - Что выведет консоль?
let a41 = ['Javascript js frontend'];
let b41 = ['Javascript js frontend'];
console.log(a41 == b41); // false

// 42 - Что выведет консоль?
const b42 = new Boolean(false);
console.log('b42', b42, typeof b42); // object (typeof new Boolean(false) === 'object').
console.log(!!b42, b42 ? 'true' : 'false', b42 == true); // true 'true' false
const b42_2 = false;
console.log(!!b42_2, b42_2 ? 'true' : 'false', b42_2 == true); // false 'false' false

// 43 - Что выведет консоль?
console.log([0, 1, 2, 3].reduce((a, b) => a + b)); // 6

// 44 - Что выведет консоль?
const obj44 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(obj44)) {
    console.log(`${key}: ${value}`);
  }
  /*
    a: somestring
    b: 42
  */

  // 45 - Что выведет консоль?
  // Метод filter() создает новый массив со всеми элементами, которые проходят условие, реализованного предоставленной функцией.
  let users45 = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' }, 
    { id: 47, name: 'John', age: 28, group: 'admin' }, 
    { id: 85, name: 'William', age: 34, group: 'editor' }, 
    { id: 97, name: 'Oliver', age: 28, group: 'admin' } 
  ]; 
  
  let res45 = users45.filter(it => it.group === 'admin'); 
  
  console.log(res45);
/*
    [
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
]
*/

// 46 - Что выведет консоль?
// 7 - это число. Унарный + никак не преобразует его, поэтому в консоль выведется -7.
const a46 = 7;
console.log(+-a46); // -7

// 47 - Что выведет консоль?
console.log(eval('10*10+10')); // 110

// 48 - Что выведет консоль?
// Внутри блока if мы создали локальную переменную a, которая будет доступна только внутри этого блока
let a48= 10; 

if (a48 >= 3) { 
  let a = 5; 
} 

const b48 = a48; 
console.log(b48); // 10

// 49 - Что выведет консоль?
// a ??= b эквивалентно a ?? (а = б). 
// Присваивание выполняется только в том случае, если a не определено или имеет значение null.
let a49 = 0;
let b49 = 5;
console.log(a49 ??= b49); // 0

let a49_2 = null;
let b49_2 = 5;
console.log(a49_2 ??= b49_2); //5

// 50 - Что выведет консоль?
// Метод keys() возвращает новый итератор массива Array Iterator, содержащий ключи каждого индекса в массиве.
const arr50 = ['One', 'Two', 'Three', 'Four', 'Five'];
const iterator50 = arr50.keys();

for (const key of iterator50) {
  console.log(key); // 0 1 2 3 4
}

// 51 - Что выведет консоль?
function getPersonInfo51(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

// При использовании шаблонных строк первым аргументом всегда будет массив строковых значений. 
// Оставшимися аргументами будут значения переданных выражений!

const person51 = 'Serge';
const age51 = 35;
getPersonInfo51 `${person51} is ${age51} old` // ["", " is ", " years old"] "Lydia" 21

// 52 - Что выведет консоль?
function sumValues52(x,y,z) {
  return x + y + z
}

console.log(sumValues52(...[1,2,3])) // 6

// 53 - Что выведет консоль?
console.log('Hi, Dad!'[0]); // H

// 54 - Что выведет консоль?
// С помощью Object.seal мы можем предотвращать как добавление новых свойств, так и удаление существующих.
// Однако, изменение существующих свойств остаётся доступным.
const person54 = {name: 'Serge'};
Object.seal(person54);

// 55 - Что выведет консоль?
const add55 = x => x + x;
function myFunc55(num = 2, value = add55(num)) {
  console.log(num, value)
}

console.log(myFunc55()); // 2 4
console.log(myFunc55(3)); // 3 6

// 56 - Что выведет консоль?
const words56 = ['test', 'memory', 'invasion', 'kia', 'notifacation'];
const result56 = words56.filter(word => word.length > 4);
console.log(result56) // [ 'memory', 'invasion', 'notifacation' ]

// 57 - Что выведет консоль?
const moonLanding = new Date('July 20, 69 00:20:18');
console.log(moonLanding.getFullYear()) // 1969

// 58 - Что выведет консоль?
let fn58 = function() {};

console.log(!fn58() && fn58()); // undefined

// 59 - Что выведет консоль?
const arr59 = [1,2,3,4,5];
console.log(Array.from(arr59, x => x + x)); // [ 2, 4, 6, 8, 10 ]

// 60 - Что выведет консоль?
const arr60 = [4,25,66];
console.log(Math.abs(arr60)); // NaN

// 61 - Что выведет консоль?
const watchLict61 = new Set();
console.log(watchLict61.size); // 0

watchLict61.add('test');
console.log(watchLict61.size); // 1

// 62 - Что выведет консоль?
const result62 = '10' - 8 + true;
console.log(result62); // 3  тк 2 + 1

// 63 - Что выведет консоль?
const words63 = ['hey', 'test', 'abcd'];
const result63 = words63.concat(11, [22, [33]]);
console.log(result63) // [ 'hey', 'test', 'abcd', 11, 22, [ 33 ] ]

// 64 - Что выведет консоль?
// Метод Object. fromEntries() принимает список пар ключ-значение и возвращает новый объект, 
// свойства которого задаются этими записями

const entries64 = new Map([
  ['foo', 'arrghh'],
  ['doo', 'tartkt']
])

const obj64 = Object.fromEntries(entries64);
console.log(obj64) // { foo: 'arrghh', doo: 'tartkt' }

// 65 - Что выведет консоль?
const num65 = 11;
console.log(num65 === 11 ? '11' : 'no 11'); // 11

// 66 - Что выведет консоль?
const obj66 = {55: 'tom', 77: 'bob', 99: 'jack'};
console.log(Object.keys(obj66)); // [ '55', '77', '99' ]

// 67 - Что выведет консоль?
const values67 = [1,2,3,4,5,6,7,8,9];
const [first67, ...rest67] = values67;
const item67 = rest67[1];
console.log(item67); // 3

// 68 - Что выведет консоль?
const numbers68 = [1,2,3,4,5];
let sum68 = 0;

for (let i = 0; i < numbers68.length; i++) {
  sum68 += numbers68[i]
}

console.log(sum68); // 15

// 69 - Что выведет консоль?
console.log(1 + '2' + '333'); // 12333

// 70 - Что выведет консоль?
console.log(typeof typeof 'test'); // string

// 71 - Что выведет консоль?
// Метод join объединяет элементы массива в строку с указанным разделителем
const nums71 = [11, 22, 33];
const result71 = nums71.join();
console.log(result71)

// 72 - Что выведет консоль?
const age72 = 100;
const result72 = age72 >= 55 ? 'grandpapa' : 'superman';
console.log(result72); // grandpapa

// 73 - Что выведет консоль?
const obj73 = {1: 'i', 2: 'love', 3: 'beer'};
const set73 = new Set([1,2,3]);

console.log(obj73.hasOwnProperty('1')); // truw
console.log(obj73.hasOwnProperty(1)); // true
console.log(set73.has('1')); // false
console.log(set73.has(1)); // true

// 74 - Что выведет консоль?
const arr74 = [1,2,3,4,5];
const result74 = arr74.map(x => {
  setTimeout(() => console.log(x), 1000);
  return x * 2;
});
console.log(result74); // [ 2, 4, 6, 8, 10 ] а потом 1 2 3 4 5

// 75 - Что выведет консоль?
let num75 = 101;

try {
  num75 = 2/ 0
  
} catch (error) {
  delete num75
} finally {
  num75 = num75 * -1
}

console.log(num75) // -Infinity

// 76 - Что выведет консоль?
// keys возвращает массив строковых элементов, соответствующих именам перечисляемых свойств, 
// найденных непосредственно в самом объекте
const arr76 = ['aa', 'bb', 'cc'];
const iterator76 = arr76.keys();
console.log(iterator76); // Object [Array Iterator] {}

for (const key of iterator76) {
  console.log(key) // 0 1 2
}


// 77 - Что выведет консоль?
let num77 = 10;

const incNum = () => num77++;
console.log(num77); // 10
const incPassNum = number => number++;

const num77_1 = incNum();
const num77_2 = incPassNum(num77_1);
console.log(num77_1); // 10
console.log(num77_2); // 10

// 78 - Что выведет консоль?
const myObj78 = {
  x: 1,
  y: 2,
  z: {
    a: 3,
    b: 4
  }
}

const copyObj78 = { ... myObj78};
copyObj78.z.a = 555;
console.log(myObj78.z.a); // 555;

// 79 - Что выведет консоль?
const nums79 = [1,2,3,4,5,6,7,8,9];
const odds79 = [];

for (let i = 0; i < nums79.length; i++) {
  if (nums79[i] % 2 !==0) {
    odds79.push(nums79[i])
  }
}

console.log(odds79); // [ 1, 3, 5, 7, 9 ]

// 80 - Что выведет консоль?
// Унарный плюс перед e выполняется в самом начале трансормируя его в NaN 
const result80 = ('b' + 'e' + + 'e' + 'r').toLowerCase();
console.log(result80); // benanr

// 81 - Что выведет консоль?
const nums81 = [1,2,3,4,5,6,7,8,9];
const sum81 = nums81.reduce(function(currSum, currNum) {
  return currSum + currNum
}, 0);

console.log(sum81); // 45

// 82 - Что выведет консоль?
const nums82 = [1,2,3,4,5,6];

const squares82 = nums82.map(function(num) {
  return num * num;
})

console.log(squares82); // [ 1, 4, 9, 16, 25, 36 ]

// 83 - Что выведет консоль?
const obj83 = {a: 11, b: 22};
const arr83 = [3,4,5];
const { a, b} = obj83;
const [c83, ...d83] = arr83;
console.log(a, b, c83, d83); // 11 22 3 [ 4, 5 ]

// 84- Что выведет консоль?
console.log(null || 2 || undefined); // 2

// 85- Что выведет консоль?
const arr85 = [1,2,3];
const func85 = (x) => {
  console.log(x);
}

arr85.forEach(func85); // 1 2 3

// 86- Что выведет консоль?
function a86(value) {
  return true - value
}

var b86 = a86('4') + a86('-4') + a86('-4') + a86(4);
console.log(b86) // true - '4' = -3; true - -'4' = 5 // 4  true - '-4'  true - 4 = -3

// 87 - Что выведет консоль?
const person87 = {
  name: 'serge',
  age: 30,
  address: {
    city: 'Minsk',
    country: 'BLR'
  }
}

const { name, age, address: { city, country}} = person87;
console.log(name, age, city, country); // serge 30 Minsk BLR

// 88 - Что выведет консоль?
const myTeam = ['Arsenal', 'PSG', 'Bornmut', 'Milan'];
const action = myTeam.pop();

console.log(myTeam); // [ 'Arsenal', 'PSG', 'Bornmut' ]
console.log(action); // Milan

// 89 - Что выведет консоль?
console.log(Math.round(17.51)); // 18

// 90 - Что выведет консоль?
function abc90() {
  return typeof arguments;
}

console.log(abc90()) // object