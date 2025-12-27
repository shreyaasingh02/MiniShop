// Function to add products to the cart
function addToCart(productName, productPrice) {
    // Get the current cart from localStorage or initialize it as an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Create a new product object
    const product = {
        name: productName,
        price: productPrice
    };

    // Add the product to the cart
    cart.push(product);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, alert the user
    alert(productName + " has been added to your cart!");
}

// Cart page logic - Display products and allow removal
window.onload = function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            
            itemDiv.innerHTML = `
                <p class="item-name">${item.name}</p>
                <p class="item-price">${item.price}</p>
                <button class="remove-item" onclick="removeItem(${index})">Remove</button>
            `;

            cartItemsContainer.appendChild(itemDiv);
        });
    }

    // Function to remove an item from the cart
    window.removeItem = function(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1); // Remove item at the specified index
        localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
        window.location.reload(); // Reload the page to update the cart view
    }

    // Function to clear the entire cart
    window.clearCart = function() {
        localStorage.removeItem('cart');
        window.location.reload(); // Reload the page to clear the cart view
    }
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Hide form and show success message
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('success-msg').style.display = 'block';
});
