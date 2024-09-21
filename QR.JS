const qrInput = document.getElementById('text');
const qrImg = document.getElementById('qr-img');
const qrbutton = document.getElementById('qr-button');

qrbutton.addEventListener('click', () => {
    const qrInputValue = qrInput.value;
    if (qrInputValue === '') {
        alert('Please enter a value');
    }
    else{
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputValue}`;
    }
});