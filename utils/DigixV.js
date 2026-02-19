import readline from 'readline'

export default async function deployAsPremium() {
    // Ta clé d'administration
    const adminKey = "D07895461fdgdrq3ez8aaeqQ"

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    return new Promise((resolve) => {
        rl.question('⚡ Possédez-vous un pass d\'accès Administrateur ? (y/n) : ', (response) => {
            const choice = response.toLowerCase()

            if (choice === 'y') {
                rl.question('🔑 Entrez le mot de passe : ', (password) => {
                    rl.close()
                    if (password === adminKey) {
                        console.log('✅ Accès accordé. Mode Zoldik Premium activé !')
                        resolve(true)
                    } else {
                        console.log('❌ Mot de passe incorrect. Connexion en mode public.')
                        resolve(false)
                    }
                })
            } else {
                rl.close()
                console.log('❄️ Connexion standard sans privilèges.')
                resolve(false)
            }
        })
    })
}