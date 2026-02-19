export const DigixNew = (message) => {
    if (!message) return null;

    // Détection du contenu pour extraire le message réel
    // Cela inclut la gestion des messages à vue unique (ViewOnce)
    const content = 
        message.viewOnceMessageV2?.message || 
        message.viewOnceMessage?.message || 
        message.ephemeralMessage?.message || 
        message;
    
    return content;
}

export default DigixNew;