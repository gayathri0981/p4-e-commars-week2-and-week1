let cartCount = 0;

function addToCart(productId, productName, productPrice) {
    // Add item to the cart
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;

    // Optionally, you can log the added item to the console (for debugging purposes)
    console.log(`Added ${productName} to the cart. Total items in cart: ${cartCount}`);
}
