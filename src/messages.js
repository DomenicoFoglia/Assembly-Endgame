function getRandomDeathMessage(language) {
    const messages = [
        `Farewell, ${language}. It was good while it lasted.`,
        `${language} has vanished into the digital abyss.`,
        `The compiler said goodbye to ${language}.`,
        `${language} has crashed forever.`,
        `A fatal error struck ${language}.`,
        `${language} experienced a kernel panic.`,
        `The debugger no longer recognizes ${language}.`,
        `A segfault took down ${language}.`,
        `${language} has been deprecated... for good.`,
        `RAM will never remember ${language} again.`
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];

    
}

export default getRandomDeathMessage;