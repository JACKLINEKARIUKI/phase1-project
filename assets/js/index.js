// const fantasyIsbn = [9780553381689, 9780061373299, 9780547928227,
// ,9780439064866, 9789955084334, 9780732287634, 9780316036726, 9780316387842];

// const horrorIsbn = [ 9780393064506, 9780340952702, 9781501143489, 0812967127, 9781442480650,
//     9780399160684, 9782724232363, 9780395779279];

// const literatureIsbn = [ 9780451526380, 9781596881976, 9781517622770, 9780679203742,
//     9780143039563, 9780007420063, 9780679601685, 9780140434156]

// const trendingIsbn = [9780525427384, 9780385514231, 9789636893316,
//     9781443431255, 9781844138548, 9781410452580, 0425130266, 9780754014362]

const books = {
    fantasy : [9780553381689, 9780061373299, 9780547928227,
        9780439064866, 9789955084334, 9780732287634, 9780316036726, 9780316387842],
    horror : [ 9780393064506, 9780340952702, 9781501143489, 0812967127, 9781442480650,
        9780399160684, 9782724232363, 9780395779279],
    literature : [ 9780451526380, 9781596881976, 9781517622770, 9780679203742,
        9780143039563, 9780007420063, 9780679601685, 9780140434156],
    thriller : [9780679444817, 9780385514231, 9789636893316,
        9781443431255, 9781844138548, 9781410452580, 0425130266, 9780754014362],
}

// const bookGenre = Object.keys(books);


document.addEventListener('DOMContentLoaded', function() {
    categoriesMenu();
    selectMenu();
    addToWishlist();
    
});

function categoriesMenu(){
    const categories = document.getElementById('categories');
    const list = document.querySelector('.categories-list');
    categories.addEventListener('click',() => {
       list.style.display = 'block';
    })
}


function selectMenu(books){
    const listItem = document.querySelectorAll('.categories-list li');
    const list = document.querySelector('.categories-list');
    listItem.forEach(item => {
        item.addEventListener('click', (e) => {
            list.style.display = 'none';
            if (e.target.textContent === 'Fantasy') {
                fetchFantasyBooks(books);
            } else if (e.target.textContent === 'Horror') {
                fetchHorrorBooks(books);
            } else if (e.target.textContent === 'Literature') {
                fetchLiteratureBooks(books);
            } else if (e.target.textContent === 'Thriller') {
                fetchThrillerBooks(books);
            }
        })

    })
}

function fetchFantasyBooks(){
    const main = document.querySelector('main');
    main.innerHTML = `<div class="categories"></div>`;
    const categoryName = document.createElement('div');
    categoryName.className = 'category';
    categoryName.innerHTML = `<h1>Fantasy</h1>`;
    const booksList = document.createElement('div');
    booksList.className = 'books-list';
    categoryName.appendChild(booksList);
    main.appendChild(categoryName);

    for (let i = 0; i < books.fantasy.length; i++) {
        fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${books.fantasy[i]}&jscmd=data&format=json`)
        .then(response => response.json())
        .then(data => {

            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.innerHTML = `
            <img src="${data[`ISBN:${books.fantasy[i]}`].cover.large}">
            <div class="book-detail">
                <h3>${data[`ISBN:${books.fantasy[i]}`].title}</h3>
                <h4>${data[`ISBN:${books.fantasy[i]}`].authors[0].name}</h4>
                <div class="wishlist-details">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                    <p class="hide">Add to wish list</p>
                </div>
            </div> `;

            booksList.appendChild(bookCard);
            
        })
        .catch(err => console.log(err));
    }
}

// function populateBookCard(){
//     // console.log(genre.length);
//     for (let i = 0; i < books.fantasy.length; i++) {
//         fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${books.fantasy[i]}&jscmd=data&format=json`)
//         .then(response => response.json())
//         .then(data => {
//             const bookCard = document.createElement('div');
//             bookCard.className = 'book-card';
//             bookCard.innerHTML = `
//             <img src="${data[`ISBN:${books.fantasy[i]}`].cover.large}">
//             <div class="book-detail">
//                 <h3>${data[`ISBN:${books.fantasy[i]}`].title}</h3>
//                 <h4>${data[`ISBN:${books.fantasy[i]}`].authors[0].name}</h4>
//                 <div>
//                 <i class="fa fa-heart-o" aria-hidden="true"></i>
//                 <p class="hide">Add to wish list</p>
//                 </div>
//             </div> `;

//             booksList.appendChild(bookCard);
            
//         })
//         .catch(err => console.log(err));
//     }
// }




function fetchHorrorBooks(){
    const main = document.querySelector('main');
    main.innerHTML = `<div class="categories"></div>`;
    const categoryName = document.createElement('div');
    categoryName.className = 'category';
    categoryName.innerHTML = `<h1>Horror</h1>`;
    const booksList = document.createElement('div');
    booksList.className = 'books-list';
    categoryName.appendChild(booksList);
    main.appendChild(categoryName);

    for (let i = 0; i < books.horror.length; i++) {
        fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${books.horror[i]}&jscmd=data&format=json`)
        .then(response => response.json())
        .then(data => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.innerHTML = `
            <img src="${data[`ISBN:${books.horror[i]}`].cover.large}">
            <div class="book-detail">
                <h3>${data[`ISBN:${books.horror[i]}`].title}</h3>
                <h4>${data[`ISBN:${books.horror[i]}`].authors[0].name}</h4>
                <div class="wishlist-details">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                    <p class="hide">Add to wish list</p>
                </div>
            </div> `;

            booksList.appendChild(bookCard);
            
        })
        .catch(err => console.log(err));
    }
}

function fetchLiteratureBooks(){
    const main = document.querySelector('main');
    main.innerHTML = `<div class="categories"></div>`;
    const categoryName = document.createElement('div');
    categoryName.className = 'category';
    categoryName.innerHTML = `<h1>Literature</h1>`;
    const booksList = document.createElement('div');
    booksList.className = 'books-list';
    categoryName.appendChild(booksList);
    main.appendChild(categoryName);

    for (let i = 0; i < books.literature.length; i++) {
        fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${books.literature[i]}&jscmd=data&format=json`)
        .then(response => response.json())
        .then(data => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.innerHTML = `
            <img src="${data[`ISBN:${books.literature[i]}`].cover.large}">
            <div class="book-detail">
                <h3>${data[`ISBN:${books.literature[i]}`].title}</h3>
                <h4>${data[`ISBN:${books.literature[i]}`].authors[0].name}</h4>
                <div class="wishlist-details">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                    <p class="hide">Add to wish list</p>
                </div>
            </div> `;

            booksList.appendChild(bookCard);
            
        })
        .catch(err => console.log(err));
    }
    
};

function fetchThrillerBooks(){
    const main = document.querySelector('main');
    main.innerHTML = `<div class="categories"></div>`;
    const categoryName = document.createElement('div');
    categoryName.className = 'category';
    categoryName.innerHTML = `<h1>Thriller</h1>`;
    const booksList = document.createElement('div');
    booksList.className = 'books-list';
    categoryName.appendChild(booksList);
    main.appendChild(categoryName);
    

    for (let i = 0; i < books.thriller.length; i++) {
        fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${books.thriller[i]}&jscmd=data&format=json`)
        .then(response => response.json())
        .then(data => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.innerHTML = `
            <img src="${data[`ISBN:${books.thriller[i]}`].cover.large}">
            <div class="book-detail">
                <h3>${data[`ISBN:${books.thriller[i]}`].title}</h3>
                <h4>${data[`ISBN:${books.thriller[i]}`].authors[0].name}</h4>
                <div class="wishlist-details">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                    <p class="hide">Add to wish list</p>
                </div>
            </div> `;

            booksList.appendChild(bookCard);
            
        })
        .catch(err => console.log(err));
    }
};


function addToWishlist (){
    const addWish = document.querySelectorAll('.wishlist-details i');
    console.log(addWish);
    addWish.forEach(addWish => {
        addWish.addEventListener('click', () => {
            if (addWish.className === 'fa fa-heart-o'){
                addWish.className = 'fa fa-heart';
                addWish.nextElementSibling.className = 'hide1';
            }
            else if (addWish.className === 'fa fa-heart'){
                addWish.className = 'fa fa-heart-o';
                addWish.nextElementSibling.className = 'hide';
            }
            });
        }
        )};


