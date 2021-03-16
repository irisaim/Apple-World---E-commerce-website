class UI {
    constructor() {
        this.productsDiv = document.getElementById('products');
        this.detailsDiv = document.getElementById('products-details');
        this.adminDiv = document.getElementById('admin');
        this.title = document.getElementById('title');
        this.image = document.getElementById('image');
        this.price = document.getElementById('price');
        this.description = document.getElementById('description');
        this.id = document.getElementById('id');
    }

    showProducts(products) {
        let output = '';
        products.forEach((product) => {
            output += `
            <div class="card">
              <h4 class="card-title">${product.title}</h4>
              <img src="${product.image}" class="card-img">
              <h5 class="card-price">${product.price}</h5>
              <button onclick="window.location.href='details.html?id=${product.id}'" type="button" class="card-button">Details</button>
              </div>
            `;
        });
        console.log(this.productsDiv);
        this.productsDiv.innerHTML = output;
    }

    showDetails(product) {
        let output = '';

            output = `
            <div class="details-card">
              <h4 class="card-title">${product.title}</h4>
              <img src="${product.image}" class="card-img">
              <h5 class="card-price">${product.price}</h5>
              <h6 class="card-description">${product.description}</h6>
              <button onclick="window.location.href='cart.html?id=${product.id}'" type="button" class="card-button">Add to Cart</button>
              </div>
            `;
            this.detailsDiv.innerHTML = output;
    }


    showProductsAdmin(products) {
        let output = '';
        products.forEach((product) => {
            output += `
            <tbody> 
            <tr class = 'row'>
                <td><img src="${product.image}" class="admin-card-img"</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <button onclick="window.location.href='admin.html?id=${product.id}'" type="button" class="card-button">Remove</button>
            </tr>
        </tbody>    
        `;
        this.adminDiv.innerHTML += output;
    });
}
}




export const ui = new UI();