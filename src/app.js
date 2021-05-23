import { http } from './http.js';
import { ui } from './ui.js';


document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	http
	// .get('http://localhost:3000/products')
	.get('https://60aabcca66f1d00017773255.mockapi.io/Products')	
	.then((data) => ui.showProducts(data));
}

document.getElementById('add-product').addEventListener('click', addNewProduct);


function addNewProduct() {
	const titleValue = document.getElementById('title').value;
	const priceValue = document.getElementById('price').value;
	const imageValue = document.getElementById('image').value;
	const descriptionValue = document.getElementById('description').value;

	let product = {
		title: titleValue,
		price: priceValue,
		image: imageValue,
		description: descriptionValue,
	};

	http
		// .post('http://localhost:3000/products', product)
		.post('https://60aabcca66f1d00017773255.mockapi.io/Products', product)
		.then((data) => getProducts())
}



document.getElementById('admin').addEventListener('click', deleteProduct);

function deleteProduct(e) {
	if (e.target.classList.contains('delete')) {
		const id = e.target.id;
		http
			// .delete(`http://localhost:3000/products/${id}`)
			.delete(`https://60aabcca66f1d00017773255.mockapi.io/Products/${id}`)
			.then((data) => getProducts())
			.catch('Error on delete!');
	}
}



