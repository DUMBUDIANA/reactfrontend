<<<<<<< HEAD


 const url = process.env.REACT_APP_URL;

=======
// const url = "https://dianadumbu-booksapi-6xpzu7sjmq-uc.a.run.app/api/bookreactions/";
const url = process.env.REACT_APP_URL;
>>>>>>> cee092dd116d6ed60c2318338addf7f79eb9045d



const headers = {
    accept: 'application/json',
    'content-type': 'application/json'
};

export const fetchAllBooks = () => {
    return fetch(url + 'Books').then((response) => {
        return response.json();
    });
}

export const addBook = (book) => {
    return fetch(url + 'Books',
        {
            method: 'post',
            mode: 'cors',
            headers: headers,
            body: JSON.stringify(book)
        }).then((response) => {
            return response.json();
        });
}

export const fetchReviews = (bookId) => {
    return fetch(url + "Reviews/" + bookId)
        .then(function (response) {
            return response.json();
        });
}

export const addReview = (review) => {
    return fetch(url + 'Reviews',
        {
            method: 'post',
            mode: 'cors',
            headers: headers,
            body: JSON.stringify(review)
        }).then((response) => {
            return response.json();
        });
}