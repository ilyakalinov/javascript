import $ from "jquery";
import show from './js/main';
show();

const btn = $('btn');

console.log(btn);



////////////////////////////////////////////////////////////
// 071 WebPack
// ////////////////////////////////////////////////////////////
// console.log('Ok');
// function myModul() {
//      this.hello = function() {
//           console.log('Hello');
//      };
//      this.goodbye = function() {
//           console.log('Bye!');
//      };
// }
// module.exports = myModul;
////////////////////////////////////////////////////////////
// 070 Модули
// ////////////////////////////////////////////////////////////
// const number = 1;

// (function (){
//      let number = 2;
//      console.log(number);
//      console.log(number + 3);
// }());
// console.log(number);

// const user = (function() {
//      const privat = function() {
//           console.log('Privat');
//      };

//      return {
//           sayHello: privat
//      };
// }());
// user.sayHello();
////////////////////////////////////////////////////////////
// 069 Инкапсуляция
// ////////////////////////////////////////////////////////////
// class User{
//      constructor(name, age) {
//           this.name = name;
//           this._age = age;
//      }
//      #surname = 'Petrov';

//      say = () => {
//           console.log(`Имя пользователя: ${this.name}${this.#surname}, возраст ${this._age}`);
//      }

//      get age() {
//           return this._age;
//      }

//      set age(age) {
//           if(typeof age === 'number' && age > 0 && age < 110){
//                this._age = age;  
//           } else {
//                console.log('Недопустимое значение');
//           }
//      }
// }

// const ivan = new User('Ivan', 25);
// ivan.say();
///////////////////////////////////////////////////
// function User(name, age) {
//      this.name = name;
//      let userAge = age;

//      this.say = function() {
//           console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//      };

//      this.getAge = function() {
//           return userAge;
//      };

//      this.setAge = function(age) {
//           // userAge = age;
//           if(typeof age === 'number' && age > 0 && age < 110){
//                userAge = age;  
//           } else {
//                console.log('Недопустимое значение');
//           }
//      };
// }

// const ivan = new User('Ivan', 25);
// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());

// ivan.say();
////////////////////////////////////////////////////////////
// 068 Геттеры Сеттеры
// ////////////////////////////////////////////////////////////
// const persone = {
//      name: "Alex",
//      age: 25,

//      get userAge() {
//           return this.age;
//      },

//      set userAge(num) {
//           this.age = num;
//      }
// };
// console.log(persone.userAge = 30);
// console.log(persone.userAge);
////////////////////////////////////////////////////////////
// 065 Регулярные выражения
// ////////////////////////////////////////////////////////////

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите ваше имя');

//  const reg = /n/ig;
// i      //--С этим флагом поиск не зависит от регистра: нет разницы между A и a
// g      //--С этим флагом поиск ищет все совпадения, без него – только первое.
// m      //--Многострочный режим (https://learn.javascript.ru/regexp-multiline-mode)  

// console.log(ans.search(reg));
//console.log(ans.match(reg));

//test -- проверяет на соответствие
//console.log(reg.test(ans));


// Классы

// const asw = prompt('Введите ваше число');

// const reqs = /\d/g   ;
// console.log(asw.match(reqs));

// \D - не цифры
// \W - не буквы
// \d - цифры
// \w -  Символ «слова», а точнее – буква латинского алфавита или цифра или подчёркивание _
// \s - Пробельные символы

// const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/i));
//////////////////////////////////
//replace - заменяет
// const pass = prompt('Password');
// console.log(pass.replace(/./g, '*'));
// console.log(pass.replace(/\./g, '*')); //  \ - обратный слешь экранирует

// console.log('12-34-56'.replace(/-/g, ':'));
////////////////////////////////////////////////////////////
// 064 LocalStorage
// ////////////////////////////////////////////////////////////

// const checkbox = document.querySelector('#checkbox'),
//      form = document.querySelector('form'),
//      change = document.querySelector('#color');

// if(localStorage.getItem('isChecked')) {
//      checkbox.checked = true; 
// }

// if (localStorage.getItem('bg') === 'changed' ){
//      form.style.backgroundColor = 'red';
// }

// checkbox.addEventListener('change', () => {
//      if(localStorage.getItem('isChecked')) {
//           localStorage.removeItem('isChecked');
//      } else {
//           localStorage.setItem('isChecked', true);
//      }
// });

// change.addEventListener('click', () => {
//      if (localStorage.getItem('bg') === 'changed' ){
//           localStorage.removeItem('bg');
//           form.style.backgroundColor = 'white';
//      } else {
//           localStorage.setItem('bg', 'changed');
//           form.style.backgroundColor = 'red';
//      }
// });

// const persone = {
//      name: 'Alex',
//      age: 25
// };
// const serializedPerson = JSON.stringify(persone);

// localStorage.setItem('alex', serializedPerson);

// console.log(JSON.stringify(localStorage.getItem('alex')));

// localStorage.setItem('number', '5');  //отправка 

// localStorage.removeItem('number'); // удалить объект

// localStorage.clear();   //очистка всего хранилища

// console.log(localStorage.getItem('number'));      // localStorage.getItem('number') --- получение



// ////////////////////////////////////////////////////////////
// This / Prototype
// ////////////////////////////////////////////////////////////

// function hello() {
//      console.log('Hello', this);
// }
// function sayName() {
//      console.log(`Name is ${this.name}`);
// }

// const person = {
//      name: 'Alex',
//      age: 25,
//      sayHello: hello,
//      sayHelloWindow: hello.bind(window),
//      logInfo: function() {
//           console.log(`Name is ${this.name}`);
//      },
//      sayName: sayName
// };

// const personTwo = {
//      name: 'Olga',
//      age: 25,
//      sayHello: hello,
//      sayHelloWindow: hello.bind(window),
//      logInfo: function(job, phone) {
//           console.group(`${this.name} info`);
//           console.log(`Name is ${this.name}`);
//           console.log(`Age is ${this.age}`);
//           console.log(`Job is ${job}`);
//           console.log(`Phone is ${phone}`);
//           console.groupEnd();
//      },
//      sayName: sayName
// };
// person.sayName();
// personTwo.sayName();
// personTwo.logInfo('teacher', '+75545584');

// const elena = {
//      name: 'Elena',
//      age: 23
// };

// //person.logInfo.bind(elena)();
// // const functionElena = personTwo.logInfo.bind(elena, 'frontend', '+75549578')();
// // personTwo.logInfo.call(elena, 'frontend', '+75549578');
// // personTwo.logInfo.apply(elena, ['frontend', '+75549578']);

// // const arr = [1, 2, 3, 4, 5];

// // function myltBy(arr, num) {
// //      return arr.map(function(i) {
// //           return i * num;
// //      });
// // }
// // console.log(myltBy(arr, 15));

// Array.prototype.myltBy = function(num) {
//      return this.map(function(i) {
//      return i * num;
//      });
// };
// console.log(arr.myltBy(20));
// ////////////////////////////////////////////////////////////
// Prototype
// ////////////////////////////////////////////////////////////

// const person = new Object({
//      name: 'Max',
//      age: 25,
//      greet: function() {
//           console.log('Greet!');
//      }
// });
// Object.prototype.sayHello = function() {
//      console.log(`Hello ${this.name}`);
// };

// const elena = Object.create(person);
// elena.name = 'Elena';

// const str = new String('I am string');
// ////////////////////////////////////////////////////////////
// 059 Async Await
// ////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////
// 057 методы перебора массивов
// ////////////////////////////////////////////////////////////

// // filter возвращает только те обьектыб которые подхолдят под условие

// const names = ['Anna', 'Alexandr', 'Oleg', 'Lera', 'Nicolai'];

// const shortNames = names.filter(function(name) {
//      return name.length < 5;
// });

// console.log(shortNames);



// // map позволет взять исходник изменить любой\каждый обьект внутри

// const answer = ['AleX', 'OlEg,', 'AnnA'];

// const rigtSizeName = answer.map((item) => {
//      return item.toLowerCase();
// });
// console.log(rigtSizeName);


// // every/some  
//      //some(если хотя бы 1 элемент соответствует условию возвращает true, если не один - false)
//      //every(возвращает true если все элементы соответствуют условию, если хотя бы 1 элемент не соответствует - false)

// const some = [4, 'asdsad', 'awadaad'];
// const someResult = some.some(item => {
//     return typeof(item) === 'number';
// });
// console.log(someResult);

// const every = [4, 5, 5];
// const everyResult = every.every(item => {
//     return typeof(item) === 'number';
// });
// console.log(everyResult);

// // reduce

// const arr = [4, 5, 1, 3, 2, 6];
//                     /*0   4
//                       4   5
//                       9   1
//                       10  3
//                       13  2
//                       15  6
//                       21  */ 
// const arrResult = arr.reduce((sum, current) => {
//      return sum + current;
// });
// console.log(arrResult);

// const arrFruit = ['apple', 'pear', 'plum', 'apple', 'pear', 'plum'];
                   
// const arrFruitResult = arrFruit.reduce((sum, current) => `${sum}, ${current} `
// );
// console.log(arrFruitResult);
// ///////////////////////////////

// const obj = {
//      ivan: 'persone',
//      ann: 'persone',
//      dog: 'animal',
//      cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => {
//     return item[1] === 'persone';
// })
// .map(item => item[0]);

// console.log(newArr);
// ////////////////////////////////////////////////////////////
// 056 Fetch API
// ////////////////////////////////////////////////////////////



// ////////////////////////////////////////////////////////////
// 055 Promise
// ////////////////////////////////////////////////////////////



// const test = time => {
//      return new Promise((resolve, reject) => {
//           setTimeout(() => resolve(), time);
//      });
// };

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {               //Ждет выполнение всех
//      console.log('All');
// });

// Promise.race([test(1000), test(2000)]).then(() => {                //Срабатывает вместе с первым
//      console.log('All');
// });
//////////////////////////////////////////////
// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject) {
//      setTimeout(() => {
//           console.log('Подготовка данных...');

//           const product = {
//                name: 'TV',
//                price: 2000
//           };

//           resolve(product);
//      }, 2000);
// });

// req.then((product) => {
//      return new Promise((resolve, reject) => {
//           setTimeout(() => {
//                product.status = 'order';
//                resolve(product);
//           }, 2000);
//      });

// }).then(data => {
//      data.modify = true;
//      return data;
// }).then((data) => {
//      console.log(data);     
// }).catch(() => {                          //При ошибке перемещение сразу в блок .catch
//     console.error('Произошла ошибка');  
// }).finally(() => {                          //всегда записывать                          
//      console.log('Finally');
// });

////////////////////
//При ошибке
//////////////////
// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject) {
//      setTimeout(() => {
//           console.log('Подготовка данных...');

//           const product = {
//                name: 'TV',
//                price: 2000
//           };

//           resolve(product);
//      }, 2000);
// });

// req.then((product) => {
//      return new Promise((resolve, reject) => {
//           setTimeout(() => {
//                product.status = 'order';
//                reject();                                  //вфзов при ошибке
//           }, 2000);
//      });

// }).then(data => {
//      data.modify = true;
//      return data;
// }).then((data) => {
//      console.log(data);     
// }).catch(() => {                          //При ошибке перемещение сразу в блок .catch
//     console.error('Произошла ошибка');  
// }).finally(() => {
//      console.log('Finally');
// });
////////////////////
//
//////////////////
// req.then((product) => {
//      setTimeout(() => {
//      product.status = 'order';
//      console.log(product);
// }, 2000);
// });


     
// ////////////////////////////////////////////////////////////
// 054 AJAX// //Forms
// ////////////////////////////////////////////////////////////

// const forms = document.querySelectorAll('form');

// const message = {
//     load: 'img/form/spinner.svg',
//     success: 'Спасибо! Скоро мы вам перезвоним',
//     failure: 'Что-то пошло не так'
// };

// forms.forEach(item => {
//     postData(item);
// });

// function postData(forms) {
//     forms.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const statusMessage = document.createElement('img');
//         statusMessage.src = message.load;
//         statusMessage.style.cssText = `
//             display: block;
//             margin: 0 auto;
//         `;
//         statusMessage.textContent = message.load;
//         //forms.append(statusMessage);
//         forms.insertAdjacentElement('afterend', statusMessage);

//         const request = new XMLHttpRequest();
//         request.open('POST', 'server.php');

//         request.setRequestHeader('Content-type', 'application/json');
//         const formData = new FormData(forms);

//         const object = {};
//         formData.forEach(function(value, key) {
//             object[key] = value;
//         });

//         const toJson = JSON.stringify(object);
//         request.send(toJson);

//         request.addEventListener('load', () => {
//             if (request.status === 200) {
//                 console.log(request.response);
//                     showThanksModal(message.success);
//                     statusMessage.classList.remove('show', 'fade');
//                     statusMessage.classList.add('hide');
//             } else {
//                 showThanksModal(message.failure);
//             }
//         });

//         function showThanksModal(message) {
//             const prevModalDialog = document.querySelector('.modal__dialog');
//             prevModalDialog.classList.add('hide');
//             openModal();

//             const thanksModal = document.createElement('div');
//             thanksModal.classList.add('modal__dialog');
//             thanksModal.innerHTML = `
//             <div class="modal__content">
//                 <div class="modal__close" data-close>×</div>
//                 <div class="modal__title">${message}</div>
//             </div>
//             `;

//             const thanksModalBlock = document.querySelector('.modal');
//             thanksModalBlock.append(thanksModal);
//             setTimeout(() => {
//                 thanksModal.remove();
//                 prevModalDialog.classList.add('show');
//                 prevModalDialog.classList.remove('hide');
//                 closeModal();
//                 statusMessage.style.cssText = ``;
//             }, 4000);

//         }
//     });
// }

// ////////////////////////////////////////////////////////////
// 053 AJAX
// ////////////////////////////////////////////////////////////

// const inputUsd = document.querySelector('.USD'),
//      inputByn = document.querySelector('.BYN');

//      inputUsd.addEventListener('input', () => {
// const request = new XMLHttpRequest();

//      //request.open(method, url, async, login, pass);
//      request.open('GET', 'js/current.json');
//      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//      request.send();

//      request.addEventListener('load', () => {
//           if (request.status === 200) {
//                const data = JSON.parse(request.response);
//                     inputUsd.value = (+inputByn.value * data.current.usd).toFixed(2);
//           } else {
//                inputUsd.value = "Что-то пошло не так";
//           }
//      });

//      //status
//      //statusText
//      //response
//      //readyState

// });
// ////////////////////////////////////////////////////////////
// 051 JSON
// ////////////////////////////////////////////////////////////

// const persone = {
//      name: 'Alex',
//      tel: '+7111111111',
//      parents: {
//           mom: 'Olga',
//           dad: 'Mike'
//      }
// };
// const clone = JSON.parse(JSON.stringify(persone));
// clone.parents.mom = 'Ann';
// console.log(persone);
// console.log(clone);

// ////////////////////////////////////////////////////////////
// 049 Rest
// ////////////////////////////////////////////////////////////

// const log = function(a, b, ...rest) {
//      console.log(a,b, rest);
// }

// log('basic', 'rest', 'operator', 'usage');

// function calcOrDouble(number, basis = 2) {
//      console.log(number*basis);
// }
// calcOrDouble(3);



// ////////////////////////////////////////////////////////////
// 047 Классы
// ////////////////////////////////////////////////////////////

// class Rectangle {
//      constructor(height, width) {
//           this.height = height;
//           this.width = width;
//      }

//      calcArea() {
//           return this.height * this.width;
//      }
// }

// class ColoredRectangleWithText extends Rectangle {
//      constructor(height, width, text, bgColor) {
//           super(height, width);
//           this.text = text;
//           this.bgColor = bgColor;
//      }

//      showMyProps() {
//           console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//      }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(10, 20);

// console.log(square.calcArea());
// console.log(long.calcArea());


// ////////////////////////////////////////////////////////////
// 046 Контекст вызова
// ////////////////////////////////////////////////////////////

// function showThis(a, b) {
//      console.log(this);
//      function sum() {
//           console.log(this);
//           return a + b; 
//      }
//      console.log(sum());
// }
// showThis(4, 5); 

/////////////////////////////////////////////////

// const obj = {
//      a: 20,
//      b: 15,
//      sum: function () {
//           function shout(){
//                console.log(this)
//           }
//           shout();
//      }
// };
// obj.sum();

//////////////////////////////////////////

// function user(name, id) {
//      this.name = name;
//      this.id = id;
//      this.human = true;
//      this.hello = function() {
//           console.log('Hello' + this.name);
//      }
// }
// let ivan = new user('Ivan', 23);

/////////////////////////////////////////////////

// function sayName() {
//      console.log(this);
//      console.log(this.name);
// }

// const user = {
//      name: 'John'
// };
//  sayName.call(user);
//  sayName.apply(user);

///////////////////////////////////////////

// function sayName(surname) {
//      console.log(this);
//      console.log(this.name + surname);
// }

// const user = {
//      name: 'John'
// };
//  sayName.call(user, 'Smith');
//  sayName.apply(user, ['Smith']);

//  function count(num) {
//       return this*num;
//  }

//  const double = count.bind(2);
//  console.log(double(3));
//  console.log(double(5));

//////////////////////////////////////////////

// const btnAll = document.querySelectorAll('button');
// const btn = document.querySelector('button');
// btnAll.forEach(item => {
//      item.addEventListener('click', function() {
//           console.log(this);
//      });
// });
// btn.addEventListener('click', function() {
//      this.style.backgroundColor = 'red';
// });

//////////////////////////////////////////////////////

// const obj = {
//      num: 5,
//      sayNamber: function() {
//           const say = () => {                  //Работает только стрелочная функция
//                console.log(this);
//           };
//           say();
//      }
// };
// obj.sayNamber();

///////////////////////////////////////////////////////

// const double = (a) => {
//      return a * 2;
// };
//или(если тлько 1 аргумент)
// const double = (a) => a * 2;
// console.log(double(4));
////////////////////////////////////////////////////////////
// 1) Обычная функция: this = window, но если 'use strict' будет undefined
// 2) Контекст у методов обьекта будет сам обьект
// 3) this в конструкторах и классах - это новый экземпляр обьекта
// 4) Ручная привязка this: call, apply, bind

// ////////////////////////////////////////////////////////////
// 045 Функции-конструкторы
// ////////////////////////////////////////////////////////////

// function user(name, id) {
//      this.name = name;
//      this.id = id;
//      this.human = true;
//      this.hello = function() {
//           console.log(`Hello ${this.name}`);
//      };
// }

// user.prototype.exit = function(name) {
//      console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new user('Ivan', 28);
// const alex = new user('Alex', 20);

// ivan.hello();
// alex.exit();

// console.log(ivan);
// console.log(alex);

// ////////////////////////////////////////////////////////////
// 
// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////
// FOOD
// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////
// 
// ////////////////////////////////////////////////////////////

// window.addEventListener('DOMContentLoaded', () => {
//      const btnMenu = document.querySelectorAll('.tabheader__item'),
//          menuContent = document.querySelectorAll('.tabcontent'),
//          btnParent = document.querySelector('.tabheader__items');
//  //Tabs
//          function hideMenuContent() {
//              menuContent.forEach(item => {
//                  item.classList.add('hide');
//                  item.classList.remove('show', 'fade');
//              });
//              btnMenu.forEach(item => {
//                  item.classList.remove('tabheader__item_active');
//              });
//          }
 
//          function showMenuContent(i = 0) {
//              btnMenu[i].classList.add('tabheader__item_active');
//              menuContent[i].classList.add('show', 'fade');
//              menuContent[i].classList.remove('hide');
//          };
 
//          hideMenuContent();
//          showMenuContent(0);
 
//          btnParent.addEventListener('click', (event) => {
//              const target = event.target;
//              btnMenu.forEach((item, i) => {
//                  if (target == item) {
//                      hideMenuContent();
//                      showMenuContent(i);
//                  }
//              });
//          });
 
//  //timer
 
//      const deadline = '2021-11-18';
 
//      function getTimeRemaining(endtime) {
//          const t = Date.parse(endtime) - Date.parse(new Date()),
//              days = Math.floor(t / (1000 * 60 * 60 * 24)),
//              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
//              minutes = Math.floor(t / 1000 / 60 % 60),
//              seconds = Math.floor((t / 1000) % 60);
//          return {
//              'total': t,
//              'days': days,
//              'hours': hours,
//              'minutes': minutes,
//              'seconds': seconds
//          };
//      }
 
//      function getZero(num) {
//          if (num >= 0 && num < 10) {
//              return `0${num}`;
//          } else {
//              return num;
//          }
//      }
 
//      function setClock(selector, endtime) {
//          const timer = document.querySelector(selector),
//              days = timer.querySelector('#days'),
//              hours = timer.querySelector('#hours'),
//              minutes = timer.querySelector('#minutes'),
//              seconds = timer.querySelector('#seconds'),
//              timeInterval = setInterval(updateClock, 1000);
 
//          updateClock();
 
//      function updateClock () {
//          const t = getTimeRemaining(endtime);
 
//          days.innerHTML = getZero(t.days);
//          hours.innerHTML = getZero(t.hours);
//          minutes.innerHTML = getZero(t.minutes);
//          seconds.innerHTML = getZero(t.seconds);
 
//          if (t.total <= 0) {
//              clearInterval(timeInterval);
//          }
//          }
//      }
 
//      setClock('.timer', deadline);
 
//      //Modal
 
//      const modalTrigger = document.querySelectorAll('[data-modal]'),
//          modal = document.querySelector('.modal'),
//          modalCloseBtn = document.querySelector('[data-close]');
     
//          function openModal() {
//              modal.classList.add('show');
//              document.body.style.overflow = 'hidden';
//              clearInterval(modalTimerId);
//          }
//          function closeModal() {
//              modal.classList.remove('show');
//              document.body.style.overflow = '';
//          }
 
//          modalTrigger.forEach(item => {
//              item.addEventListener('click', () => {
//                  openModal();
//              });
//          }); 
 
//          modalCloseBtn.addEventListener('click', closeModal);
 
//          modal.addEventListener('click', (e) => {
//              if(e.target === modal) {
//                  closeModal();
//              }
//          });
 
//          document.addEventListener('keydown', (e) => {
//              if(e.code === 'Escape' && modal.classList.contains('show')) {
//                  closeModal();
//              }
//          });
 
//          const modalTimerId = setTimeout(openModal, 3000);
 
//          function showModalByScroll () {
//              if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//                  openModal();
//                  window.removeEventListener('scroll', showModalByScroll);
//              }
//          }
 
//          window.addEventListener('scroll', showModalByScroll);
//  });
// ////////////////////////////////////////////////////////////
// 
// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////
// 
// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////
// 
// ////////////////////////////////////////////////////////////


// ////////////////////////////////////////////////////////////
// 040 Работа с датами
// ////////////////////////////////////////////////////////////
// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//      let some = i ** 3;
// }
// let end = new Date();

// alert(`Цикл отработал за ${end - start} миллисекунд`);
////////////////////////////////////////////////////
// const now = new Date('2021-11-15');

// console.log(now.setHours(18, 40));
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// ////////////////////////////////////////////////////////////
// 037 События на мобильных устройствах
// ////////////////////////////////////////////////////////////
// const btns = document.querySelectorAll('button'),
//      wrapper = document.querySelector('.btn__block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// btns[0].style.background = ('red');
// console.log(btns[0].classList.remove('some'));
// console.log(btns[0].classList.toggle('some'));

// if (btns[2].classList.contains('red')) {
//      console.log('Ok');
// }

// btns.forEach(item => {
//      item.addEventListener('click', () => {
//           item.classList.toggle('red');
//           if (item.classList.contains('red')) {
//                //btns[1].classList.add('red');
//                item.style.background = ('red');
//           } else {
//                //btns[1].classList.remove('red');
//                item.style.background = ('white');

//           }
//      });
// });

// btns[0].addEventListener('click', () => {
//      btns[1].classList.toggle('red');
//      if (!btns[1].classList.contains('red')) {
//           //btns[1].classList.add('red');
//           btns[1].style.background = ('red');
//      } else {
//           //btns[1].classList.remove('red');
//           btns[1].style.background = ('white');
//      }
// });

// wrapper.addEventListener('click', (event) => {
//      if (event.target && event.target.tagName == "BUTTON") {
//           console.log('Hello');
//      }
// });
// wrapper.addEventListener('click', (event) => {
//      if (event.target && event.target.matches('button.red')) {
//           console.log('Hello');
//      }
// });

// btns.forEach(btn => {
//      btn.addEventListener('click', () => {
//           console.log('Hello');
//      });
// });
// const btn = document.createElement('button');
// btn.classList.add('red');
// btn.style.background = ('green');
// wrapper.append(btn);
//console.log(btns[0].className);
// ////////////////////////////////////////////////////////////
// 034 События на мобильных устройствах
// ////////////////////////////////////////////////////////////

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel  

//touches
//targetTouches
//changetTouches

// window.addEventListener('DOMContentLoaded', () => {
//      const box = document.querySelector('.box');
//      box.addEventListener('touchstart', (e) => {
//           e.preventDefault();
//           console.log('Start');
//      });
// });
// window.addEventListener('DOMContentLoaded', () => {
//      const box = document.querySelector('.box');
//      box.addEventListener('touchmove', (e) => {
//           e.preventDefault();
//           console.log('Start');
//      });
// });
// window.addEventListener('DOMContentLoaded', () => {
//      const box = document.querySelector('.box');
//      box.addEventListener('touchend', (e) => {
//           e.preventDefault();
//           console.log('Start');
//      });
// });





// ////////////////////////////////////////////////////////////
// 032
// ////////////////////////////////////////////////////////////
//console.log(document.body.childNodes);
// ////////////////////////////////////////////////////////////
// 031
// ////////////////////////////////////////////////////////////
// const btn = document.querySelector('button'),
//      overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//      alert('click');
// };
// btn.forEach(item => {
//      item.onclick = function () {
//           alert('click'); 
//      };
// });
// btn.forEach(item => {
//      item.addEventListener('click', () => {
//           alert('click');
//      });
// });
// let i = 0;
// const deleteElement = (e) => {
//      console.log(e.target);
//      console.log(e.type);
     // i++;
     // if (i == 2) {
     //      btn.removeEventListener('click', deleteElement);
     // }
// };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// const link = document.querySelector(".overlay");

// link.addEventListener('click',(event) => {
//      event.preventDefault();
//      console.log(event.target);
// });
// btn.addEventListener('click', () => {
//      alert('click');
// });
// ////////////////////////////////////////////////////////////
// 032
// ////////////////////////////////////////////////////////////
// console.log(document.head);
// console.log(document.documentElement);

// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// for (let node of document.body.childNodes) {
//      if (node.nodeName == '#text') {
//           continue;
//      }
//      console.log(node);
// }

// ////////////////////////////////////////////////////////////
// 031
// ////////////////////////////////////////////////////////////

// const btnAll = document.querySelectorAll('button'),
//      btn = document.querySelector('.btn'),
//      overlayBtn = document.querySelector('.overlay');
     
// btn.onclick = function() {
//      alert('Hello');
// };     
// btnAll.forEach(item => {       
//           item.onclick = function() {
//           alert('Hello');
//      };                                      
// });

// let i = 0;
// const logConsole = () =>{
//      console.log("Hello");
// };
// const dlt = (e) => {
//      console.log(e.target);
//      console.log(e.type);
     // i++;
     // if (i == 2) {
     //      btn.removeEventListener('click', dlt);
     //      console.log("Hello");
     // }
// };
// btn.addEventListener('click', dlt);
// overlayBtn.addEventListener('click', dlt);
// btnAll.forEach = (item => {
//      item.addEventListener('click', dlt);
// });


// const link = document.querySelector('a');
// link.addEventListener('click', (event, dataSync) => {
//      event.preventDefault();
//      console.log(event.target);
// });
//btn.removeEventListener('click', dlt);
// btn.addEventListener('click', (e) => {
//      console.log(e.target);
//      e.target.remove();
// });                                                             //addEventListener не машают друг другу
// btn.addEventListener('click', () => {
//      alert('World');
// });

// ////////////////////////////////////////////////////////////
// 030 
// ////////////////////////////////////////////////////////////
// const movieDB = {
//      movies: [
//          "Логан",
//          "Лига справедливости",
//          "Ла-ла лэнд",
//          "Одержимость",
//          "Скотт Пилигрим против..."
//      ]
//  };
 
//  const adv = document.querySelectorAll('.promo__adv img'),
//      genre = document.querySelector('.promo__genre'),
//      bg = document.querySelector('.promo__bg'),
//      movieList= document.querySelector('.promo__interactive-list');
 
//  adv.forEach(item => {       
//      item.remove();                                             //с помощью стрелочной функции
//  });
//  // adv.forEach(function (item) {
//  //     item.remove();                                             //второй способ с помощью функции
//  // });
//  genre.textContent = "Драма";
//  bg.style.backgroundImage = 'url(./img/bg.jpg)';                  //замена фона 
//  movieList.innerHTML = '';
//  movieDB.movies.sort();                                   //метод sort сортирует содержимое по алфавиту(если там строки)
//  movieDB.movies.forEach((film, i) => {
//      movieList.innerHTML += `
//          <li class="promo__interactive-item">                      
//              ${i + 1} ${film}
//              <div class="delete"></div>
//          </li>
//      `;                                                    
//  });// +=  дополнительное присваивание( a = a + 1; равно a += 1)
 

// ////////////////////////////////////////////////////////////
// 029 Действия с элементами на странице
// ////////////////////////////////////////////////////////////

// const box = document.getElementById("box"),
//       btns = document.getElementsByTagName('button'),
//       className = document.getElementsByClassName('box'),
//       hearts = document.querySelectorAll('.box'),
//       oneHeart = document.querySelector('.box'),
//       boxDiv = document.querySelector('.box'),
//       circles = document.querySelectorAll('.circle');

// box.style.backgroundColor = 'red';
// box.style.width = '500px';
// btns[2].style.borderRadius = '100%';

// box.style.cssText = 'background-color: blue; width: 500px;';


// for (let i = 0; i < hearts.length; i++) {
//      hearts[i].style.backgroundColor = 'red';               //присвоить свойство всем обьектам под этим классом с помощью цикла
// }

// hearts.forEach(item => {
//      item.style.backgroundColor = 'blue';                      //присвоить свойство всем обьектам под этим классом с помощью forEach
// });

// const div = document.createElement('div');                         //добавление нового блока(только JS)      
//const text = document.createTextNode('Тут былд я');

// div.classList.add('black');
// document.body.append(div);

//boxDiv.append(div);                                            //вставить до
//boxDiv.appendChild (div);                                        //старый метод
//boxDiv.prepend(div);                                                //вставить после

// hearts[1].before(div);                                                  //вставить после [2] номера по порядку 
// hearts[1].after(div);

// hearts[0].remove();
// hearts[1].replaceWith(circles[1]);                                           // замена одного элемента на другой

// hearts.insertBefore(div, circles[2]);                  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//box.replaceChild(hearts[0], circles[0]);

// s

// div.textContent = '<h1>Sheat</h1>';
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');

// ////////////////////////////////////////////////////////////
// 028 получение элементов со страницы
// ////////////////////////////////////////////////////////////


// const box = document.getElementById("box");
// console.log(box);

// const btns = document.getElementsByTagName('button');
// console.log(btns);

// const className = document.getElementsByClassName('box');
// console.log(className);

// const hearts = document.querySelectorAll('.box');
// hearts.forEach(item => {
//      console.log(item);
// });

// console.log(hearts);

// const oneheart = document.querySelector('.box');

// console.log(oneheart);


////////////////////////////

// const yourMovieDB ={
//      count: 0,
//      movie: [],
//      actors: {},
//      genres: [],
//      privat: true,
//      start: function () {
//           yourMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
//           while (yourMovieDB.count == '' || yourMovieDB.count == null || isNaN(yourMovieDB.count)) {
//                yourMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
//           }
//      },
//      rememberYourFilms: function() {
//           for (let i = 0; i < 2; i++){
//                const yourMovie = prompt('Какой фильм вы посмотрели последним?', '');
//                const yourMovieRate = prompt('На сколько его оцените?', '');
     
//                if (yourMovie != '' && yourMovie != null && yourMovie.length < 30 && yourMovieRate != '' && yourMovieRate != null) {
//                     yourMovieDB.movie[yourMovie] = yourMovieRate;
//                } else {
//                     alert('error');
//                     i--;
//                }
//           }   
//      },
//      personalMovieCount: function() {
//           if (yourMovieDB.count < 100){
//                console.log('Вы начинающий зритель');
//           } else if(yourMovieDB.count >= 100 && yourMovieDB.count < 500){
//                console.log('Вы опытный кинозритель');
//           } else if (yourMovieDB.count > 500){
//                console.log('Вы - киноман');
//           } else {
//                console.log('error')
//           }
//      },
//      showMyDB: function(hidden) {
//           if(!hidden) {
//                console.log(yourMovieDB)
//           }
//      },
//      toggleVisibleMyDB: function () {
//           if (yourMovieDB.privat) {
//                yourMovieDB.privat = false;
//           } else {
//                yourMovieDB.privat = true;
//           }
//      },
//      showYourGenre: function () {
//           for (let i = 1; i <= 3; i++) {
//                const genre = prompt(`Три ваших любимых жанра? №${i}`);

//                if (genre == '' || genre == null){
//                     console.log('Вы ввели не коректные данные');
//                     i--;
//                } else {
//                     yourMovieDB.genres[i - 1] = genre;
//                }
//           }
//           yourMovieDB.genres.forEach((item, i) => {
//                console.log(`Любимый жанр ${i + 1} - это ${item}`);
//           });
//      }
// };
// yourMovieDB.start ();
// yourMovieDB.rememberYourFilms ();
// yourMovieDB.personalMovieCount ();
// yourMovieDB.showMyDB ();
// yourMovieDB.toggleVisibleMyDB ();
// yourMovieDB.showYourGenre ();
// // ////////////////////////////////////////////////////////////
// 028 задания на собеседования
// /////////////////////////////////////////////////////////////



// ////////////////////////////////////////////////////////////
// 27 задания на собеседования
// /////////////////////////////////////////////////////////////

//1)
//let x = 5; alert(x++); = 5
//let x = 5; alert(++x); = 6

//2)
//[ ] + false - null + true 
//console.log(typeof([] + false));  = false

//console.log([] + false - null); = NaN

//console.log([ ] + false - null + true); = NaN

//3)
// let y = 1; 
// let x = y = 3;           = 3
// alert(x); 

//4)
//console.log([] + 1 + 2 + 35454); = 12

//5)
// console.log("123456"[3]);   

//6)
//console.log(2 && 1 && null && 0 && undefined);  ОПЕРАТОР && ЗАПИНАЕТСЯ НА ЛЖИ(NULL);

//7)
//console.log(!!( 1 && 2 ) === (1 && 2)); два !! делают из значения булиновое


//8)
// alert( null || 2 && 3 || 4 ); ===3 
// ОПЕРАТОР && ЗАПИНАЕТСЯ НА ЛЖИ
// ОПЕРАТОР || ЗАПИНАЕТСЯ НА ПРАВДЕ
 
//9)
// const a = [1, 2, 3];           //не равны, это разные хранилища информации
// const b = [1, 2, 3];

// console.log(a == b);

//10)

// alert(+"Infinity");

//11)

// console.log("Ёжик" > "яблоко");

//12)

// console.log(3 || "" || 1 || undefined || true || falsе); 

// ////////////////////////////////////////////////////////////
// //026
// /////////////////////////////////////////////////////////////

// //to string

// //1)
// console.log(typeof(String(null)));
// console.log(String(null));
// console.log(typeof(String(4)));

// //2)
// console.log(typeof(null + ''));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// //to number

// //1)
// console.log(typeof(Number('4')));
// //2)
// console.log(typeof(parseInt("15px, 10")));

// let answer = +prompt("Hello","");

// //TO BOOLEAN

// //   0, '', null, undefined, NaN;


// //1)
// let switcher = null;
// if (switcher) {
//      console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//      console.log('Working...');
// }

// //2)
// console.log(typeof(Boolean('4')));

// //3
// console.log(typeof(!!"4444"));


// let   str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));



///////////////////////////////
// const soldier = {
//      health: 400,
//      armor: 101,
//      sayHello: function(){
//           console.log("Hello");
//      }
// };

// const jonh = {
//      health: 100
// };

// jonh.__proto__ = soldier;

// soldier.sayHello ();
// jonh.sayHello ();



 
// // console.log(numbers);
// // console.log(newNumbers);

// const add = {
//      d: 17,
//      e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log (add);
// console.log(clone);

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();

// oldArr[2] = 'asdflksdnklsfnjskf;'

// console.log(oldArr);
// console.log(newArr);


// const video = ['youtube', 'vimeo', 'rutube'],
//      blogs = ['wordpreww', 'livejournal', 'blogger'],
//      internet = [...video, ...blogs, 'vk','facebook'];

// console.log(internet);

// function log(a, b, c) {
//      console.log(a);
//      console.log(b);
//      console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);


// const array = ['a', 'b'];

// const newArray = [...array];

// const newObj = {...q}; 
/*
const arr = [1, 2, 3, 6, 8];
// arr[2]= 4;
// //arr.pop();
// //arr.push(10);
// // console.log(arr.length);
// // console.log(arr);
// arr.forEach(function (item, i, arr) {
//      console.log(`${i + 1}: ${item} внутри массива ${arr}`);
// });

// //for(let value of arr) {
// console.log(value);
// }

const str = prompt("", "");
const product = str.split("", "");
console.log(product);

// for (let i =0; i < arr.length; i++) {
//      console.log(arr[i]);
// }
// for (let value of arr) {
//      console.log(value);
// }

/*
const option = {
     name: 'test',
     with: 1024,
     height: 1024,
     colors: {
          border: 'black',
          bg: 'red'
     },
     makeTest: function () {
          console.log('test');
     }
};

const {border, bg} = option.colors;
console.log(border);

/*let counter = 0;
for (let key in option) {
     if(typeof(option[key]) === 'object') {
               for (let i in option[key]){
                    console.log(`Свойства ${i} имеет значение ${option[key][i]}`);  
               }
          } else {
               console.log(`Свойства ${key} имеет значение ${option[key]}`);
               counter++;
          }
}
console.log(counter);*/



/*
console.log(yourMovieDB);
console.log(Object.keys(yourMovieDB).length); 


function 
personalMovieCount();


// function first() {
//      setTimeout(function () {
//           console.log(1)
//      }, 500);
// }

// function second() {
//      console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//      console.log(`я учу: ${lang}`);
//      callback();
// }

// function done() {
//      console.log('Я прошел этот урок!');
// }
// learnJS('JavaScript', done);
/*
function calc(a, b) {
     return(a + b);
};

console.log(calc(4,3));
console.log(calc(10,3));
console.log(calc(4,30));

function ret() {
     let num = 50;
     return num;
}

const anotherNum = ret();
console.log(anotherNum);

////////////////////////////////////////
 const logg = 'hello world';

 console.log(logg.slice(6, 10));
 console.log(logg.substring(6,11));
 console.log(logg.substr(0, 4));
////////////////////////////////////
const num = 12.2;
console.log(Math.round(num));
/////////////////////////////////////
const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));
//////////////////////////////////////*/