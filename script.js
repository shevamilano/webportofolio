document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const nameInput = document.getElementById('nama'); 
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone'); 
    const messageInput = document.getElementById('pesan'); 
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !phone || !message) {
            alert('Semua field harus diisi.');
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Format email tidak valid.');
            return;
        }

        const phonePattern = /^\d{10,15}$/;
        if (!phonePattern.test(phone)) {
            alert('Format nomor HP tidak valid.');
            return;
        }

        const whatsappNumber = '628975664721';
        const whatsappMessage = 
            `Halo, saya ${name}%0A` + 
            `Email: ${email}%0A` + 
            `Nomor HP: ${phone}%0A` + 
            `Pesan: ${message}`;
        
        const encodedMessage = encodeURIComponent(whatsappMessage); 
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        window.open(whatsappURL, '_blank');
    });
});
