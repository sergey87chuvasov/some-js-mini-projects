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

// 91 - Что выведет консоль?
const obj91 = {a: 1, b: 2, c: 3};
Object.prototype.keys = function() {
  return Object.values(this).reverse()
}
console.log(obj91.keys()); // [ 3, 2, 1 ]

// 92 - Что выведет консоль?
let a92 = 20;
let b92 = a92++;
let c92 = ++a92;
let d92 = (a92 = b92 + c92);
console.log(a92, b92, c92, d92);

// 93 - Что выведет консоль?
// Метод flat() возвращает новый массив и уменьшает вложенность массива на заданное количество уровней.
// Метод принимает необязательный аргумент depth — количество уровней, на которые нужно уменьшить вложенность. 
// Значение по умолчанию — 1. Результатом вызова метода flat() будет новый массив меньшей вложенности.
const arr93 = [
  '1 stage',
  [
    '2 stage',
    [
      ' 3 stage'
    ]
  ]
]

const flat93 = arr93.flat();
console.log(flat93);// [ '1 stage', '2 stage', [ ' 3 stage' ] ]

// 94- Что выведет консоль?
const arr94 = [1,2,3];
const newArr94 = arr94.slice(0,2);
console.log(newArr94); // [ 1, 2 ]

// 95- Что выведет консоль?
var b95 = 10;
if (b95 % 3 === 0) {
  var i93 = 10;
}

console.log(i93); // undefined  or 9 /3 => // 10

// 96- Что выведет консоль?
console.log(1 + '2' + '2'); // 122
console.log(+'1' + '1' + '2'); // 112
console.log('A' - 'B' + '2'); // NaN2
console.log('A' - 'B' + 2); // NaN

// 97- Что выведет консоль?
let x97 = [1,2,3,4];
x97.push(4);
x97.pop();
x97.unshift(0);
console.log(x97); // [ 0, 1, 2, 3, 4 ]

// 98- Что выведет консоль?
const a98 = 1;

function foo98() {
  const b98 = 2;

  function bar98() {
    const c98 = 3;
    console.log(a98 + b98 + c98);
  }

  bar98();
}

foo98(); // 6

// 99- Что выведет консоль?
let a99 = 10;

function test99() {
  console.log(a99);
  let a99 = 20;
}

test99(); // ReferenceError

// 100 - Что выведет консоль?
const getlist100 = ([x, ...y]) => [x, y];
const list100 = [1,2,3,4];

console.log(getlist100(list100)); // [ 1, [ 2, 3, 4 ] ]

// 101 - Что выведет консоль?
console.log('2' + 2 - '1'); // 21

// 102 - Что выведет консоль?
let date102 = new Date('December 25, 1995 23:15:30');
let result102 = date102.getHours();
console.log(result102); //23

// 103 - Что выведет консоль?
// Метод массива .every() позволяет узнать, удовлетворяют ли все элементы в массиве условию в функции-колбэке
const users103 = [
  {name : 'Serge', online: true},
  {name : 'Anna', online: true},
  {name : 'Peter', online: true},
]

const isOnline = users103.every(user => {
  return user.online
})

console.log(isOnline); // true

// 104 - Что выведет консоль?
// indexOf() - ищет вхождение элемента в массив или подстроки в строку и возвращает индекс.
const example104 = ['apple', 'grape', 'vine'];
console.log(example104.indexOf('grape')); // 1
console.log(example104.indexOf('rrrrr')); // -1

// 105 - Что выведет консоль?
for ( i = 5; i < 8; i++) {
  for (j = i; j < i + 1; j++) {
    console.log(j); // 5 6 7
  }
}

// 106 - Что выведет консоль?
let a106 = 3;
let b106 = new Number(3);
let c106 = 3;

console.log(a106 == b106); // true
console.log(a106 === b106); // fALSE
console.log(b106 === c106); // false

// 107 - Что выведет консоль?
// Статический метод Array.isArray() проверяет, является ли переданный аргумент массивом. 
const arr107 = [1,2,3,4,5,6];
const emptyArr107 = [];
const bool107 = true;
const num107 = 5;

console.log(Array.isArray(arr107)); // true
console.log(Array.isArray(emptyArr107)); // true
console.log(Array.isArray(bool107)); // false
console.log(Array.isArray(num107)); // false

// 108 - Что выведет консоль?
console.log([1 + 2, 1 * 2, 1 / 2]); // [ 3, 2, 0.5 ]

// 109 - Что выведет консоль?
console.log(!['test']); // false
console.log(![]); // false
console.log(!![null]); // true

// 110 - Что выведет консоль?
console.log([1,2] + [3,4]); // 1,23,4
console.log(null == undefined); // true
console.log(null === undefined); // false

// 111 - Что выведет консоль?
// clearTimeout() - очищает таймаут установленный с помощью setTimeout()
const timerId = setTimeout(() => {
  console.log('Прошла секунда')
})

clearTimeout(timerId); //-

// 112 - Что выведет консоль?
function myFunc112(a,b,c) {
  arguments[2] = 99;
  console.log(c)
}

myFunc112(10, 20 ,30); // 99

// 113 - Что выведет консоль?
function test113() {
  var x = 101;
  if(x > 99) {
    x = 77;
  }
  console.log(x); // 77
}

test113();

// 114 - Что выведет консоль?
const arr114 = [1,2,3];
const sum114 = arr114.reduce((acc, val) => {
  return acc + val * 2
}, 0);

console.log(sum114); // 12

// 115 - Что выведет консоль?
// Этот метод используется для добавления символов в начале строки, 
// чтобы результирующая строка достигла указанной длины.
var str115 = "15"
var newStr115 = str115.padStart(4, "3")
console.log(newStr115); // 3315

// 116 - Что выведет консоль?
let a116 = 10;
let b116 = 20;
let c116 = 50;

let result116 = (a116 + b116) * c116 / a116;
console.log(result116); 150

// 117 - Что выведет консоль?
let a117 = 10;
setTimeout(() => {
  a117 = 99;
},0)

console.log(a117); //10  ,1000 => 10

// 118 - Что выведет консоль?
const a118 = [1,2,3,5];
const b118 = a118;
b118.push(999);
console.log(a118); // [ 1, 2, 3, 5, 999 ]

// 119 - Что выведет консоль?
console.log(Promise.resolve('test')); // Promise {<fulfilled>: 'test'}  - в консоле

// 120 - Что выведет консоль?
const arr120 = Array.from('invasion');
console.log(arr120); // (8) ['i', 'n', 'v', 'a', 's', 'i', 'o', 'n']

// 121 - Что выведет консоль?
const a121 = {
  x: 10,
  y: 20,
  z: 30
};

const b121 = { ...a121, y: 999};
console.log(a121); // { x: 10, y: 20, z: 30 }
console.log(b121); // { x: 10, y: 999, z: 30 }

// 122 - Что выведет консоль?
const nums122 = [1,2,3,4,5,6,7,8,9,10];
const evenOnly = nums122.filter(function(n) {
  const remainder = n % 2;
  console.log(remainder); // 1 0 1 0 1 0 1 0 1 0
  return remainder === 0;
})

console.log(evenOnly); // [ 2, 4, 6, 8, 10 ]

// 123 - Что выведет консоль?
const a123 = () => console.log('a');
const b123 = () => console.log('b');

setTimeout(a123, 1000); // a
setTimeout(b123, 1000); // b

// 124 - Что выведет консоль?
const obj124 = {
  a: 1,
  b: 2,
  c: 3
}

for (const prop in obj124) {
  console.log(prop); // a b c
}

// 125 - Что выведет консоль?
let x125 = 1;
let y125 = 2;
let z125 = x125+++y125;
console.log(z125); // 3 тк 1+2

// 126 - Что выведет консоль?
// Возвращает число, полученное из разобранной строки или NaN, 
// если первый символ не удалось преобразовать в число.
console.log(parseFloat('12.12')); // 12.12
console.log(parseFloat('12')); // 12
console.log(parseFloat('    12.12')); // 12.12
console.log(parseFloat('abc')); // NaN

// 127 - Что выведет консоль?
const a127 = [1,2,3,4,5];
const b127 = a127.slice(0,2);
b127.push(676);

console.log(a127); // [ 1, 2, 3, 4, 5 ]
console.log(b127); // [ 1, 2, 676 ]

// 128 - Что выведет консоль?
var x128 = 10;
function foo128() {
  console.log(x128); // undefined
  var x128 = 5;
  console.log(x128); // 5
}

foo128();

// 129 - Что выведет консоль?
var b129 = 10;

if(b129 % 3 == 0) {
  var i129 = 20;
}

console.log(i129); // undefined  9 => 20

// 130 - Что выведет консоль?
let array130 = [1,2,3,4,5];
array130.unshift(1);

console.log(array130); // [ 1, 1, 2, 3, 4, 5 ]

// 131 - Что выведет консоль?
// Метод values() возвращает значения объекта.
const object131 = {
  name: 'Jo',
  age: 25,
};
console.log(Object.values(object131)); // [ 'Jo', 25 ]


// 132 - Что выведет консоль?
const object132 = {
  name: 'Jo',
  age: 28,
};
console.log(Object.keys(object132)); // [ 'name', 'age' ]

// 133 - Что выведет консоль?
// В данной задаче используется оператор запятая, следовательно будут выполняться все действия слево направо.
let num133 = 13;
const minusEight133 = x => x - 8;

num133 = (num133--, num133 *= 3, num133 = minusEight133(num133), num133 -= 4);

console.log(num133); // 24
/*
1) 13-- = 12
2) 12 *=3 = 36
3) 36 - 8 = 28
4) 28 -= 4 = 24
*/

// 134 - Что выведет консоль?
// Метод Math.log2() возвращает двоичный (по основанию 2) логарифм числа.
// 2 в степени result должно быть равно 32. Это 5.
const num134 = 32;
const result134 = Math.log2(num134);
console.log(result134); //5 2*2*2*2*2


// 135 - Что выведет консоль?
// Объект arguments - это объект типа Array, соответствующий агрументам, переданным в функцию. 
// Объект arguments не является массивом. 
// Он похож на массив, но не имеет никаких свойств массива, кроме длины (length). У него нет метода join().
const func135 = function () {
  return arguments.join("");
}
const front_tests135 = func135(43, 78);
console.log(front_tests135); // arguments.join is not a function

// 136 - Что выведет консоль?
// Вызов Promise создают так называемую микро таску (микро задачу), а setTimeout создаёт макро таску. 
// Микро таска будет выполнена быстрее, поэтому выведется 'three', а уже после 'two'.
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four');  // one four three two

// 137 - Что выведет консоль?
// метод foreach не будет вызвана для удалённых или пропущенных элементов массива. 
// Однако, она будет вызвана для элементов, которые присутствуют в массиве и имеют значение undefined.
const array137 = [1, 3, , 7];
array137.forEach((element) => {
  console.log(element); // 1 3 7
});

// 138 - Что выведет консоль?
// Оператор запятой оценивает каждый из своих операндов(слева направо) 
// и возвращает значение последнего операнда. В нашем случае это 5
const func138_1 = () => true; 
const func138_2 = () => 'Hello world'; 
const func138_3 = () => 5;
const front_tests138 = (func138_1(), func138_2(), func138_3()); 
console.log(front_tests138); // 5

// 139 - Что выведет консоль?
// Метод push() добавляет один или несколько элементов в конец массива и возвращает новую длину массива.
// Метод apply() вызывает функцию с переданным значением this и аргументами, предоставленными в виде массива. 
// Это то же самое, что и const front_tests = arr1.push(...arr2);
const push139 = Array.prototype.push; 
const arr1_139 = [100, 200]; 
const arr2_139 = [200, 100]; 
const front_tests139 = push139.apply(arr1_139, arr2_139); 
console.log(front_tests139); // 4

// 140 - Что выведет консоль?
/*
Array.from() имеет необязательный параметр mapFn, который позволяет вам выполнять функцию map для каждого элемента 
создаваемого массива (или его подкласса). 
Проще говоря, вызов Array.from(obj, mapFn, thisArg) эквивалентен цепочке 
Array.from(obj).map(mapFn, thisArg), за исключением того, что он не создаёт промежуточного массива.
*/
let other140 = item => item * 5.5;
let arrFrom140 = Array.from([0, 3, 5.5], other140);
let result140 = arrFrom140.join("-");
console.log(result140); // 0-16.5-30.25

// 141 - Что выведет консоль?
const obj141 = {};
obj141['1'] = 1;
obj141[1] = 1;
obj141[null] = 1;
obj141['null'] = 1;

console.log(Object.values(obj141).length); // 2

// 142 - Что выведет консоль?
// Функция isNaN() определяет является ли литерал или переменная нечисловым значением (NaN) или нет.
console.log(isNaN()); // true
console.log(isNaN(undefined)); // true
console.log(isNaN({})) // true

// 143 - Что выведет консоль?
const numbers143 = [33, 2, 8];
numbers143.sort();
console.log(numbers143[1]); // 33

// 144 - Что выведет консоль?
const x144 = [1,2,3,4,5,6];
console.log(x144.slice(1, 3)); // [ 2, 3 ]

// 145 - Что выведет консоль?
let obj145 = {a: 1, b: 2};
let arr145 = [3, 4];
let str145 = 'Hello World';

console.log(obj145.a, arr145[0], str145.length, arr145.length, obj145.c); // 1 3 11 2 undefined

// 146 - Что выведет консоль?
let squares146 = [2, 4, 6].map(x => x * x);
[a146, b146] = squares146;
console.log(a146 + b146); // 20

// 147 - Что выведет консоль?
const x147 = [1,2,3,4,5];
const y147 = x147.reverse();
console.log(x147 === y147); // true

// 148 - Что выведет консоль?
console.log('test script.' instanceof String); // false

// 149 - Что выведет консоль?
var x149 = 5;
(function() {
  console.log(x149); // undef
  var x149 = 10;
  console.log(x149); // 10
})();

// 150 - Что выведет консоль?
// потеря точности 
const a150 = 0.1;
const b150 = 0.2;
const c150 = 0.3;

console.log(a150 + b150 === c150); // false

// 151 - Что выведет консоль?
let array151 = [1,2,3];
array151[6] = 9;
console.log(array151[5]); // undef

// 152 - Что выведет консоль?
// When using numeric keys, the values are returned in the keys' numerical order
const scram152 = {2: 'e', 5: 'o', 1: 'h', 4: 'l', 3: 'l'};
console.log(Object.values(scram152)) // [ 'h', 'e', 'l', 'l', 'o' ]
const result152 = Object.values(scram152).reduce((agg, el) => agg + el, '');
console.log(result152); // hello

// 153 - Что выведет консоль?
// Метод flat() возвращает новый массив и уменьшает вложенность массива на заданное количество уровней.
const arr153 = [1, [2, [3, [4, [5, [6, [7], 8], 9], 10]]], 12];
const result153 = arr153.flat(5);
console.log(result153); // [1, 2, 3, 4, 5, 6, [7], 8, 9, 10, 12]

// 154 - Что выведет консоль?
const person154 = {
  name: "John",
  introduction: function() {
    console.log(`My name is ${this.name}`);
  }
};
const me154 = Object.create(person154);
me154.name = 'Robert'; 
me154.introduction(); // My name is Robert

// 155 - Что выведет консоль?
console.log(1 + '1'); // 11
console.log('1' - 1); // 0

// 156 - Что выведет консоль?
function getUser156() {
  return {
    name: 'Jhon',
    age: 30,
  }
}

const user156 = getUser156();
console.log(user156.name);

// 157 - Что выведет консоль?
console.log(Math.round(15.52)); //16
console.log(Math.ceil(15.52)); // 16
console.log(Math.round(15.2)); // 15
console.log(Math.ceil(15.3)); // 16
console.log(Math.floor(15.3)); // 15
console.log(Math.floor(-15.3)); // -16
console.log(Math.floor(15.52)); // 15
console.log(Math.trunc(15.52)); // 15
console.log(Math.trunc(-15.3)); // -15
/*
✓  round() — округление по обычным правилам;
✓  floor() — округление вниз;
✓  ceil() — округление вверх;
✓  trunc() — отбрасывание дробной части, не обращая внимания на знак аргумента.
*/

// 158 - Что выведет консоль?
const isTrue158 = true == []; // false
const isFalse158 = true ==![]; // false
console.log(isTrue158, isFalse158, isTrue158 + isFalse158); // 0

// 159 - Что выведет консоль?
let arr159 = [1,2,3,4,5];
let newArr159 = arr159.filter(num => num > 2).map(num => num * 2);
console.log(newArr159); // [ 6, 8, 10 ]

// 160 - Что выведет консоль?
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-118)); // 118