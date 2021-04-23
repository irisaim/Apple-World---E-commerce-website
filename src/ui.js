import { addProductsInLocalStorage, updateQuantityInLocalStorage, getElementFromLocalStorage, removeElementFromLocalStorage } from './localStorage.js';

class UI {
    constructor() {
        this.productsDiv = document.getElementById('products');
        this.detailsDiv = document.getElementById('products-details');
        this.adminDiv = document.getElementById('admin');
        this.cartDiv = document.getElementById('cart');
        this.title = document.getElementById('title');
        this.image = document.getElementById('image');
        this.price = document.getElementById('price');
        this.description = document.getElementById('description');
        this.id = document.getElementById('id');
        this.tableBody = document.getElementById('table-body');
        this.cartBody = document.getElementById('cart-body');
        this.quantity = document.getElementById('quantity');
        this.total = document.getElementById('total');
        this.subtotal = document.getElementById('subtotal');
    }

	showProducts(products) {
		let output = '';
		products.forEach((product) => {
			output += `
            <div class="card">
              <h4 class="card-title">${product.title}</h4>
              <img src="${product.image}" class="card-img">
              <h5 class="card-price">${product.price} €</h5>
              <button onclick="window.location.href='details.html?id=${product.id}'" type="button" class="card-button">Details</button>
              </div>
            `;
			this.productsDiv.innerHTML = output;
		});
	}

    showDetails(product) {
        let output = '';

            output = `
            <div class="details-card">
              <h2 class="card-title1">${product.title}<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"><i class="fas fa-star"></i></i></h2>
              <img src="${product.image}" class="card-img1">
              <h5 class="card-description">${product.description}</h5>
              <h4 class="card-price1">${product.price} €</h4>
              <input id="quantity" type="number" min="1" max="10" value="1">
              <button  id="addProductToCart" type="button" class="card-button">Add to Cart</button>
              <button onclick="window.location.href='index.html'"  id="continueHome" type="button">Continue shopping</button>
              <button onclick="window.location.href='cart.html'"  id="continueCart" type="button">See your cart</button>
              </div>
            `;
            this.detailsDiv.innerHTML = output;
            
            let addProductToCart = document.getElementById('addProductToCart');

            addProductToCart.addEventListener('click',() => {
                let count = parseInt(quantity.value);
                if (isNaN(count)) {
                    count = 1;
                }
                addProductsInLocalStorage(product, count);
                Swal.fire(
                    'Good job!',
                    'You just added an item in your cart!',
                    'success'
                  );
              });            
    }

    showProductsAdmin(products) {
        let output = '';
        products.forEach((product) => {
            output = `
            <table id="table-admin">
            <tbody> 
            <tr>
                <td><img src="${product.image}" class="admin-card-img"/></td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>10</td>
                <td><button id=${product.id} type="button" class="card-button delete">Remove</button></td>
           </tr>
        </tbody>   
        </table> 
        `;
        this.tableBody.innerHTML += output;
        });
    }

    showProductsCart(storageItems) {
        let output = '';
        storageItems.forEach((item) => {
            output = `
            <table id="table-cart">
                <tbody> 
                    <tr class="cartRows">
                        <td><img src="${item.product.image}" class="admin-card-img"/></td>
                        <td><button onclick="window.location.href='details.html?id=${item.product.id}'">${item.product.title}</button></td>                       
                        <td>${item.product.price} €</td>
                        <td><input value=${item.count} id="quantity" type="number" min="1" max="10"/></td>
                        <td id="subtotal">${item.product.price*item.count} €</td>
                        <td><button id=${item.product.id} type="button" class="card-button delete">Remove product</button></td>
                    </tr>
                </tbody>   
            </table> 
            `     
            this.cartBody.innerHTML += output;

        });
              

        let inputFields = document.querySelectorAll("input");
        inputFields.forEach( (inputElement) => {
            let row = inputElement.parentElement.parentElement;
            let removeButton = row.lastElementChild.firstElementChild;

            let productId = removeButton.id;
            inputElement.addEventListener('change', (e) => {
                let count = parseInt(e.target.value);
                if(!isNaN(count) && count > 0) {
                    updateQuantityInLocalStorage(productId, count);
                    return window.location.reload();
                } else {
                    let storageElement = getElementFromLocalStorage(productId);
                    e.target.value = storageElement.count;
                }
            });  
            
            removeButton.addEventListener('click', (e) => {
                removeElementFromLocalStorage(e.target.id);
                row.remove();
                    return window.location.reload();
                });
            });  
        }
    }
    

 
export const ui = new UI();
