import connectToWhatsapp from './Digix/crew.js'
import handleIncomingMessage from './events/messageHandler.js'

(async() => {
    console.log('⚡ [𝐙𝐎𝐋𝐃𝐈𝐊_𝐊𝐈𝐋𝐋𝐄𝐑] Initialisation...');
    await connectToWhatsapp(handleIncomingMessage)
    console.log('✅ Connexion établie ! Le tueur est en ligne.');
})()