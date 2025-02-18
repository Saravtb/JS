
const nameInput = document.getElementById('name');
const footer = document.getElementById('footer');
nameInput.addEventListener('input', () => {
    footer.textContent = nameInput.value || 'Seu nome aparecerá aqui...';
});


const addToCartButton = document.getElementById('addToCart');
const totalAmount = document.getElementById('totalAmount');
const notification = document.getElementById('notification');

addToCartButton.addEventListener('click', () => {
    const product1 = parseFloat(document.getElementById('product1').value) || 0;
    const product2 = parseFloat(document.getElementById('product2').value) || 0;
    const product3 = parseFloat(document.getElementById('product3').value) || 0;

    
    if (product1 === 0 && product2 === 0 && product3 === 0) {
        notification.style.display = 'block'; 
        setTimeout(() => {
            notification.style.display = 'none'; 
        }, 5000); 
    } else {
        const total = product1 + product2 + product3;
        totalAmount.textContent = `Total: R$ ${total.toFixed(2)}`;
        totalAmount.style.color = 'black'; 
    }
});
