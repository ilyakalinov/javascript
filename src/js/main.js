'use strict';

// ////////////////////////////////////////////////////////////
// 055 Promise
// ////////////////////////////////////////////////////////////

const test = time => {
     return new Promise((resolve, reject) => {
          setTimeout(() => resolve(), time);
     });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
     console.log('All');
});
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