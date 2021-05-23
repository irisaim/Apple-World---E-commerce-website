import { http } from './http.js';
import { ui } from './ui.js';

document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	http
		// .get('http://localhost:3000/products')
		.get('https://60aabcca66f1d00017773255.mockapi.io/Products')
		.then((data) => ui.showProductsAdmin(data));
}

