import fs from 'fs'
import path from 'path'

// Chemins des fichiers de configuration
const configPath = 'config.json'
const premiumPath = 'db.json'

console.log('⚡ [𝐙𝐎𝐋𝐃𝐈𝐊] Initialisation des protocoles de config...')

// --- CHARGEMENT CONFIG PRINCIPALE ---
let config = { users: {} }

if (fs.existsSync(configPath)) {
    try {
        config = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
        console.log('✅ Système : Configuration chargée.')
    } catch (e) {
        console.log('⚠️ Erreur : config.json corrompu. Réinitialisation...')
        config = { users: {} }
    }
} else {
    console.log('ℹ️ Système : Nouveau fichier config.json créé.')
}

// --- CHARGEMENT DES PRIVILÈGES PREMIUM ---
let premiums = { premiumUser: {} }

if (fs.existsSync(premiumPath)) {
    try {
        premiums = JSON.parse(fs.readFileSync(premiumPath, 'utf-8'))
        console.log('💎 Système : Utilisateurs Premium identifiés.')
    } catch (e) {
        console.log('⚠️ Erreur : db.json corrompu. Réinitialisation...')
        premiums = { premiumUser: {} }
    }
} else {
    console.log('ℹ️ Système : Nouveau fichier db.json créé.')
}

// --- FONCTIONS DE SAUVEGARDE ---

const saveConfig = () => {
    try {
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2))
        console.log('💾 [𝐙𝐎𝐋𝐃𝐈𝐊] Configuration sauvegardée.')
    } catch (e) {
        console.log('❌ Erreur de sauvegarde config.')
    }
}

const savePremium = () => {
    try {
        fs.writeFileSync(premiumPath, JSON.stringify(premiums, null, 2))
        console.log('💾 [𝐙𝐎𝐋𝐃𝐈𝐊] Privilèges mis à jour.')
    } catch (e) {
        console.log('❌ Erreur de sauvegarde premium.')
    }
}

export default {
    config,
    premiums,
    saveP() {
        savePremium()
    },
    save() {
        saveConfig()
    }
}