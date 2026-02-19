async function bug(message, client, texts, num) {
    try {
        const remoteJid = message.key?.remoteJid;
        await client.sendMessage(remoteJid, {
            image: { url: `database/${num}.jpg` },
            caption: `> ${texts}`,
            contextInfo: {
                externalAdReply: {
                    title: "𝐙𝐎𝐋𝐃𝐈𝐊_𝐊𝐈𝐋𝐋𝐄𝐑 ⚡ 𝐂𝐇𝐀𝐍𝐍𝐄𝐋",
                    body: "𝐃𝐞𝐯 𝐓𝐞𝐜𝐡 : ࿐᭄𝐒𝐀𝐊𝐀𝐌𝐎𝐓𝐎 ᭄࿐",
                    mediaType: 1,
                    // Ton nouveau lien de canal mis à jour
                    thumbnailUrl: `https://whatsapp.com/channel/0029VbCmpwK89inpJICAG21A`,
                    renderLargerThumbnail: false,
                    mediaUrl: `${num}.jpg`,
                    sourceUrl: `https://whatsapp.com/channel/0029VbCmpwK89inpJICAG21A`
                }
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export default bug;