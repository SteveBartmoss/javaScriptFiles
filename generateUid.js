function generateUniqueId() {
    return Date.now().toString(36) + Math.random.toString(36).substring(2)
}

function generateUniqueIdV2() {
    // Agrega más entropía combinando diferentes partes
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substr(2, 9);
    const extraRandomPart = Math.random().toString(36).substr(2, 9);

    // Une las partes para formar un ID único
    return `${timestamp}-${randomPart}-${extraRandomPart}`;
}