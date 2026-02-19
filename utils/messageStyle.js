import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "𝐙𝐎𝐋𝐃𝐈𝐊_𝐊𝐈𝐋𝐋𝐄𝐑 ⚡",
        body: "𝐃𝐞𝐯 𝐓𝐞𝐜𝐡 : ࿐᭄𝐒𝐀𝐊𝐀𝐌𝐎𝐓𝐎 ᭄࿐",
        thumbnail: fs.readFileSync("./database/menu.jpg"), 
        // Ton nouveau lien de canal mis à jour ici :
        sourceUrl: "https://whatsapp.com/channel/0029VbCmpwK89inpJICAG21A",
        mediaType: 1,
        renderLargerThumbnail: true 
      }
    }
  }
}