// Kita butuh parameter 'client' biar fungsi ini bisa merintah botnya
function ping(client) {
    client.on('message_create', message => {
        // Biar fleksibel, pakai toLowerCase() biar !PING atau !Ping tetep masuk
        if (message.body.toLowerCase() === '!ping') {
            // Balas pakai reply lebih simpel daripada sendMessage
            message.reply('Selamat anda mendapatkan hadiah sebesar 500 jtua kilik 1 jika anda ingin mengambilnya');
        }
        if (message.body.toLowerCase() === '1') {
            // Balas pakai reply lebih simpel daripada sendMessage
            message.reply('Hahahha kamu kenak tipu serahkan datamu sekarng juga atau ku spli datamu');
        }
    });
}

module.exports = { ping };