//import axios from 'axios';

const catsApi = () => {
    return fetch('https://api.thecatapi.com/v1/breeds')
    .then( res => res.json())
    .then(value => console.log(value.slice(0,10)));
}

export default catsApi;