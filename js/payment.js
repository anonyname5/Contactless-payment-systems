let selectedPayment = null;

console.log('Payment script loaded');

function selectPayment(method) {
    console.log('Payment method selected:', method);
    selectedPayment = method;
    
    const buttons = document.querySelectorAll('.payment-option');
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    const selectedButton = document.querySelector(`.payment-option[onclick*="${method}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}

function confirmPayment() {
    console.log('Confirm payment clicked');
    console.log('Selected payment method:', selectedPayment);

    if (!selectedPayment) {
        alert('Please select a payment method first');
        return;
    }

    if (confirm('Confirm payment of RM 75.90?')) {
        showReceipt();
    }
}

function showReceipt() {
    console.log('Showing receipt');
    
    const receiptNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    const currentDate = new Date().toLocaleString('en-MY', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit'
    });

    const receipt = `
        Fashion Store Receipt
        -------------------
        Order #${receiptNumber}
        
        Premium Cotton T-Shirt
        Size: M
        Color: Navy Blue
        
        Original Price: RM 79.90
        Discount (5%): -RM 4.00
        -------------------
        Total Paid: RM 75.90
        
        Date: ${currentDate}
        Payment Method: ${selectedPayment}
        
        Thank you for shopping with us!
    `;
    alert(receipt);
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
} 