import Product from './components/Product/index.js';
import Cart from './components/Cart/index.js';
import FetchData from './components/FetchData/index.js';

const cart = new Cart();
cart.createCart();

const fetchedData = new FetchData('http://jsonplaceholder.typicode.com/posts', Product);
 
 




