// Atualiza o nome no rodapé
const nameInput = document.getElementById('name');
const footer = document.getElementById('footer');
nameInput.addEventListener('input', () => {
    footer.textContent = nameInput.value || 'Seu nome aparecerá aqui...';
});

// Função para calcular o total
const addToCartButton = document.getElementById('addToCart');
const totalAmount = document.getElementById('totalAmount');

addToCartButton.addEventListener('click', () => {
    const product1 = parseFloat(document.getElementById('product1').value) || 0;
    const product2 = parseFloat(document.getElementById('product2').value) || 0;
    const product3 = parseFloat(document.getElementById('product3').value) || 0;
    
    const total = product1 + product2 + product3;
    totalAmount.textContent = `Total: R$ ${total.toFixed(2)}`;
});
