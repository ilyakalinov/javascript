document.addEventListener('DOMContentLoaded', () => {

const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

const adv = document.querySelectorAll('.promo__adv img'),
     bg = document.querySelector('.promo__bg'),
     genre = document.querySelector('.promo__genre'),
     movieList = document.querySelector('.promo__interactive-list '),
     addForm = document.querySelector('form.add'),
     addInput = document.querySelector('.adding__input'),
     checkbox = document.querySelector('[type="checkbox"]');

     bg.style.backgroundImage = 'url(./img/bg.jpg)';
     genre.textContent = 'Драма';

     addForm.addEventListener('submit', (event) => {
          event.preventDefault();

          let newFilm = addInput.value;
          const favorit = checkbox.checked;

          if (newFilm) {
               if (newFilm.length > 21) {
                    newFilm = `
                    ${newFilm.substring(0, 22)}...`;
               }
          }


          movieDB.movies.push(newFilm);
          sortArr(movieDB.movies);

          createMovieList(movieDB.movies, movieList);

          addForm.reset();
     });

function createMovieList (films, parent)  {
     parent.innerHTML = "";
     films.forEach((film, i) => {
          parent.innerHTML += `
          <li class="promo__interactive-item">
          ${i + 1} ${film}
          <div class="delete"></div>
          </li>
          `;
     });

document.querySelectorAll('.delete').forEach((btn, i) => {
     btn.addEventListener('click', () => {
          btn.parentElement.remove();
          movieDB.movies.splice(i, 1);

          createMovieList(movieDB.movies, movieList);
     });
     });
}
function sortArr(arr) {
     arr.sort();
}
const deleteAdv = (arr) => {
          arr.forEach(item => {
               item.remove ();
          });
     };

     sortArr(movieDB.movies);
     deleteAdv(adv);
     createMovieList(movieDB.movies, movieList);

});


