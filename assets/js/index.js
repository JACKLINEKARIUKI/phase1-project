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

document.addEventListener('DOMContentLoaded', function() {
    categoriesMenu();
    selectMenu();
    addToWishlist();
    uploadBook();
    
});

function categoriesMenu(){
    const categories = document.getElementById('categories');
    const list = document.querySelector('.categories-list');
    categories.addEventListener('click',() => {
        let styling = list.style.display;
        list.style.display = styling ==='block' ? 'none' : 'block';
    })
}

const objectMap = {
    Fantasy:'fantasy',
    Horror:'horror',
    Literature:'literature',
    Thriller:'thriller',
}


function selectMenu(books){
    const listItem = document.querySelectorAll('.categories-list li');
    const list = document.querySelector('.categories-list');
    listItem.forEach(item => {
        item.addEventListener('click', (e) => {
            list.style.display = 'none';
            populateBookCard(objectMap[e.target.textContent]);
        })
    })
}

function populateBookCard(genre){
    const main = document.querySelector('main');
    main.innerHTML = `<div class="categories"></div>`;
    const categoryName = document.createElement('div');
    categoryName.className = 'category';
    genreTitle = genre.charAt(0).toUpperCase() + genre.slice(1);
    categoryName.innerHTML = `<h1>${genreTitle}</h1>`;
    const booksList = document.createElement('div');
    booksList.className = 'books-list';
    categoryName.appendChild(booksList);
    main.appendChild(categoryName);

    for (let i = 0; i < books[genre].length; i++) {
        fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${books[genre][i]}&jscmd=data&format=json`)
        .then(response => response.json())
        .then(data => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.innerHTML = `
            <img src="${data[`ISBN:${books[genre][i]}`].cover.large}">
            <div class="book-detail">
                <h3>${data[`ISBN:${books[genre][i]}`].title}</h3>
                <h4>${data[`ISBN:${books[genre][i]}`].authors[0].name}</h4>
                <div>
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                <p class="hide">Add to wish list</p>
                </div>
            </div> `;
            booksList.appendChild(bookCard);
        })
        .catch(err => console.log(err));
    }
}

function addToWishlist (){
    const main = document.querySelector('main');
    main.addEventListener('click', e => {
        if (e.target.classList.contains('fa-heart-o')) {
            e.target.classList.remove('fa-heart-o');
            e.target.classList.add('fa-heart');
            e.target.nextElementSibling.classList.remove('hide');
            e.target.nextElementSibling.classList.add('hide1');
        } else if (e.target.classList.contains('fa-heart')) {
            e.target.classList.remove('fa-heart');
            e.target.classList.add('fa-heart-o');
            e.target.nextElementSibling.classList.remove('hide1');
            e.target.nextElementSibling.classList.add('hide');
        }
    })
}

function uploadBook(){
   const upload = document.querySelector('.details-card form');
    upload.addEventListener('submit', e => {
        e.preventDefault();
        const uploadedBook = document.querySelector('.uploaded-book');
        uploadedBook.style.display = 'block';
        const uploaded = document.createElement('div');
        uploaded.className = 'uploaded';
        uploaded.innerHTML = `
        <div class="book-detail" id='book-title'>
            <ul>
            <li>${document.getElementById('title').value} by <em>${document.getElementById('author').value}</em></li>
            </ul>
        <div>`
        const uploadDetailsCard = document.querySelector('.uploaded-book');
        uploadDetailsCard.appendChild(uploaded);    
    })
}
