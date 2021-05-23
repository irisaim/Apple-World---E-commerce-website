import { http } from './http.js';
import { ui } from './ui.js';


window.onload = () => {
	if (window.location.search !== '') {
		const id = window.location.search.split('=')[1];
		http
		// .get(`http://localhost:3000/products/${id}`)
		.get(`https://60aabcca66f1d00017773255.mockapi.io/Products/${id}`)
		.then((data) => ui.showDetails(data));
	}
}







