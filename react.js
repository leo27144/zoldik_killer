
export default async function react(client, message){

    const sleep = ms => new Promise(r => setTimeout(r, ms))
    const remoteJid = message?.key.remoteJid;

    // Première réaction : Éclair (Initialisation)
    await client.sendMessage(remoteJid, 
        {
            react: {
                text: '⚡',
                key: message.key
            }
        }
    )

    await sleep(800) // Un peu plus rapide pour le style assassin

    // Deuxième réaction : Éclat / Mortel
    await client.sendMessage(remoteJid, 
        {
            react: {
                text: '❄️',
                key: message.key
            }
        }
    )

    await sleep(800)

    // On retire la réaction pour laisser place à la réponse du bot
    await client.sendMessage(remoteJid, {
        react: { 
            remove: true,
            key: message.key 
        }
    })
}