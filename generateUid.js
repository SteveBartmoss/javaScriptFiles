export function generateUniqueId() {
    return Date.now().toString(36) + Math.random.toString(36).substring(2)
}

export function generateUniqueIdV2() {
    // Agrega más entropía combinando diferentes partes
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substr(2, 9);
    const extraRandomPart = Math.random().toString(36).substr(2, 9);

    // Une las partes para formar un ID único
    return `${timestamp}-${randomPart}-${extraRandomPart}`;
}

export function generateUniqueIdV3() {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.floor(Math.random() * 1000000001).toString(36);

    // Genera un valor criptográfico (si está disponible)
    const cryptoArray = new Uint32Array(1);
    window.crypto.getRandomValues(cryptoArray);
    const cryptoPart = cryptoArray[0].toString(36);

    // Combina las partes para formar un ID único
    return `${timestamp}-${randomPart}-${cryptoPart}`;
}