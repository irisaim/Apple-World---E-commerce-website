// import { http } from './http.js';
import { ui } from './ui.js';
import { getCartFromLocalStorage } from './localStorage.js';

document.addEventListener('DOMContentLoaded', () => {
  let storageItems = getCartFromLocalStorage();
  ui.showProductsCart(storageItems);
//   storageItems.forEach((item) => {item.product.price*item.count});
  getCartTotal(storageItems);
//   storageElement.forEach((item) => {console.log("subtotal: "+getElementSubtotal(item));})
});



function getCartTotal (storageItems) {
	let total = 0;

	for (let item of storageItems) {
		let numberOfProducts = parseInt(item.count);
		let productPrice = parseInt(item.product.price);
		total = total + numberOfProducts * productPrice;
	}
	console.log(total);
	addEventListener('DOMContentLoaded', () => {
	//    let t = total.toString();
		document.getElementById("total").innerHTML += total + " " + "€";
		
	});
	return total;
}


// function getElementSubtotal (item) {
	
// 	let subtotal = 0;

// 	let numberOfProducts = parseInt(item.count);
// 	let productPrice = parseInt(item.product.price);
// 	subtotal = subtotal + numberOfProducts*productPrice;
// 	console.log(subtotal);
// 	addEventListener('DOMContentLoaded', () => {
// 				let s = subtotal.toString();
// 				 document.getElementById("subtotal").innerHTML = s + " " + "€";
				 
// 			 });
// 	return subtotal;
// }


// function getElementSubtotal (storageElement) {
// 	let numberOfProducts = parseInt(storageElement.count);
// 	let productPrice = parseInt(storageElement.product.price);
// 	return numberOfProducts*productPrice;
// }


//actualizare total dupa ce se goleste cosul.



//getElementFromLocalStorage 

//<td id="subtotal">${item.product.price*item.count}</td>
// document.addEventListener('DOMContentLoaded', () => {
// 	let storageItems = getCartFromLocalStorage();
// 	ui.showProductsCart(storageItems);
// 	getCartTotal(storageItems);
// 	storageElement.forEach((item) => {getElementSubtotal(item)});
// });

// function getElementSubtotal (storageElement) {
	
// 	let subtotal = 0;

// 	let numberOfProducts = parseInt(storageElement.count);
// 	let productPrice = parseInt(storageElement.product.price);
// 	subtotal = subtotal + numberOfProducts*productPrice;
// 	console.log(subtotal);
// 	addEventListener('DOMContentLoaded', () => {
// 				 document.getElementById("subtotal").innerHTML = subtotal + " " + "Lei";
// 			 });
// 	return subtotal;
// }
// function getCartTotal (storageItems) {
// 	let total = 0;

// 	for (let item of storageItems) {
// 		let numberOfProducts = parseInt(item.count);
// 		let productPrice = parseInt(item.product.price);
// 		total = total + numberOfProducts * productPrice;
// 	}
// 	console.log(total);
// 	addEventListener('DOMContentLoaded', () => {
// 		document.getElementById("total").innerHTML += total + " " + "Lei";
		
// 	});
// 	return total;
// }

