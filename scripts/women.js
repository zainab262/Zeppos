let url="https://honey-natural-gallium.glitch.me/women"

document.addEventListener("DOMContentLoaded", () => {
    fetch(url)
        .then(response => response.json())
        .then(products => {
            const container = document.getElementById("product-container");

            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");

                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p><strong>Category:</strong> ${product.category}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                   
                    <button>Add to cart</button>
                        
                    
                    
                `;

                container.appendChild(productDiv);
            });
        })
        .catch(error => console.error("Error loading products:", error));
});
