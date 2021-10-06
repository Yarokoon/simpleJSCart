import Product from './components/Product/index.js';
import Cart from './components/Cart/index.js';

const cartCounter = document.querySelector('.cart__counter');
localStorage.length !== 0 && JSON.parse(localStorage.cartObject).length !== 0 ? cartCounter.innerText = JSON.parse(localStorage.cartObject).length : 0
const postsContainer = document.querySelector('.posts')

const getData = () => {   
    return fetch('http://jsonplaceholder.typicode.com/posts').then((response) => {
        return response.json();
    })
}

getData().then((result) => {

    result.forEach((element) => {      
     const {id, title, body} = element;
      /*
      ** ---- Get product class   
      */
      const product = new Product(id, title, body, postsContainer);
        
    }); 
})


