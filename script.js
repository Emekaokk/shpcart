document.addEventListener('DOMContentLoaded', () => {
    const cart = document.getElementById('cart');
    const totalEl = document.getElementById('total');

    const updateTotal = () => {
        let total = 0;
        const items = cart.querySelectorAll('.cart-item');
        items.forEach(item => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        totalEl.textContent = total.toFixed(2);
    };

    cart.addEventListener('click', (event) => {
        const target = event.target;
        const item = target.closest('.cart-item');
        if (!item) return;

        if (target.classList.contains('increase')) {
            const quantityEl = item.querySelector('.quantity');
            quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
        } else if (target.classList.contains('decrease')) {
            const quantityEl = item.querySelector('.quantity');
            const newQuantity = parseInt(quantityEl.textContent) - 1;
            if (newQuantity > 0) {
                quantityEl.textContent = newQuantity;
            }
        } else if (target.classList.contains('delete')) {
            item.remove();
        } else if (target.classList.contains('like')) {
            target.classList.toggle('liked');
        }

        updateTotal();
    });

    updateTotal();
});