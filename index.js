const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
// Pastikan file chat.js ada di folder yang sama
const { ping } = require("./chat.js"); 

// === BAGIAN INI YANG SAYA PERBAIKI ===
const client = new Client({
    // 1. Auth Strategy (Perhatikan huruf besar kecilnya & pakai new)
    authStrategy: new LocalAuth(),

    // 2. Settingan Mesin (Puppeteer)
    // Karena abang mau pakai di Termux/VPS, ini WAJIB ada.
    // Kalau di laptop Windows biasa, args ini aman kok dibiarin aja.
    puppeteer: {
        headless: true, // Wajib true kalau di server tanpa layar
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote', 
            '--disable-gpu'
        ],
    }
});
// ======================================

client.once('ready', () => {
    console.log('Client is ready!');
    // Oper client ke fungsi ping biar dia bisa merespon
    ping(client);
});

client.on('qr', qr => {
    // Tampilkan QR kecil
    qrcode.generate(qr, { small: true });
    
    // Tampilkan Kode Mentah (buat jaga-jaga kalau QR terminal pecah)
    console.log('\n================================================');
    console.log('COPY KODE DI BAWAH INI (JIKA QR DI ATAS TIDAK BISA DISCAN):');
    console.log(qr); 
    console.log('================================================\n');
});

client.initialize();