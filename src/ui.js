class UI {
	constructor() {
		this.productDiv = document.getElementById('products');
		this.title = document.getElementById('title');
		this.image = document.getElementById('image');
		this.price = document.getElementById('price');
		this.description = document.getElementById('description');
	}

	showProducts(products) {
		let output = '';
		products.forEach((product) => {
			output += `
            <div class="card">
            <div class="card-body">
              <h4 class="card-title">${product.title}</h4>
              <img src="${product.image}" class="card-img">
              <h5 class="card-price">${product.price}</h5>
              <p class="card-description">${product.description}</p>
              <button class="card-button" id="${product.id}">Add item</button>
              </div>
              </div>
            `;
			this.productDiv.innerHTML = output;
		});
	}
}

export const ui = new UI();
