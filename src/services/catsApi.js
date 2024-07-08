import axios from 'axios';

const catsApi = () => {
    return (axios.get('https://api.thecatapi.com/v1/breeds')
    .then( res => res.json())
    .then(res => console.log('data', res)))
}

export default catsApi;