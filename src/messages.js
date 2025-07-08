function getRandomDeathMessage(language) {
    const messages = [
        `Addio, ${language}. È stato bello finché è durato.`,
        `${language} è svanito nell'abisso digitale.`,
        `Il compilatore ha detto addio a ${language}.`,
        `${language} si è bloccato per sempre.`,
        `Un errore fatale ha colpito ${language}.`,
        `${language} ha avuto un kernel panic.`,
        `Il debugger non riconosce più ${language}.`,
        `Un segfault ha eliminato ${language}.`,
        `${language} è stato deprecato... per sempre.`,
        `La RAM non ricorderà mai più ${language}.`
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];

    
}

export default getRandomDeathMessage;