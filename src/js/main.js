// ////////////////////////////////////////////////////////////
// 037 События на мобильных устройствах
// ////////////////////////////////////////////////////////////
const btns = document.querySelectorAll('button'),
     wrapper = document.querySelector('.btn__block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// btns[0].style.background = ('red');
// console.log(btns[0].classList.remove('some'));
// console.log(btns[0].classList.toggle('some'));

// if (btns[2].classList.contains('red')) {
//      console.log('Ok');
// }

btns.forEach(item => {
     item.addEventListener('click', () => {
          item.classList.toggle('red');
          if (item.classList.contains('red')) {
               //btns[1].classList.add('red');
               item.style.background = ('red');
          } else {
               //btns[1].classList.remove('red');
               item.style.background = ('white');

          }
     });
});

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
wrapper.addEventListener('click', (event) => {
     if (event.target && event.target.matches('button.red')) {
          console.log('Hello');
     }
});

// btns.forEach(btn => {
//      btn.addEventListener('click', () => {
//           console.log('Hello');
//      });
// });
const btn = document.createElement('button');
btn.classList.add('red');
btn.style.background = ('green');
wrapper.append(btn);
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