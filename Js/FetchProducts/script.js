console.log("start kro");

async function displayProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            const productsData = document.getElementById('products');

            data.products.forEach(product => {
                const productItems = document.createElement('div');
                productItems.innerHTML = `
                    <div>${product.title}</div>
                    <div>${product.description}</div>
                    <div> Price: ${product.price}</div>`;
                productsData.appendChild(productItems);
        });
    } 
    catch (error) {
        console.log("Error fetching products:", error);
    }
}

displayProducts();