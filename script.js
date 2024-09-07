function searchProducts() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        let category = product.getAttribute('data-category');
        if (category.toLowerCase().includes(input)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}