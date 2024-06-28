function fetch64(data, offset) {
    let result = 0;
    for (let i = 0; i < 8; i++) {
        result |= data.charCodeAt(offset + i) << (i * 8);
    }
    return result;
}

function rotateLeft(val, shift) {
    return (val << shift) | (val >>> (64 - shift));
}

function mix(a, b) {
    a = BigInt(a);
    b = BigInt(b);
    return ((a * BigInt(0x9ddfea08eb382d69) ^ b * BigInt(0xc6a4a7935bd1e995)) & BigInt("0xFFFFFFFFFFFFFFFF"));
}

function hashLen0to16(s, len) {
    if (len >= 8) {
        const mul = BigInt(0x9ddfea08eb382d69);
        let a = fetch64(s, 0);
        let b = fetch64(s, len - 8);
        return mix(a, rotateLeft(b + BigInt(len), len)) * mul;
    }
    if (len >= 4) {
        const mul = BigInt(0x9ddfea08eb382d69);
        let a = BigInt(s.charCodeAt(0) | (s.charCodeAt(1) << 8) | (s.charCodeAt(2) << 16) | (s.charCodeAt(3) << 24));
        return mix(a, BigInt(len));
    }
    if (len > 0) {
        const mul = BigInt(0x9ddfea08eb382d69);
        let a = BigInt(s.charCodeAt(0));
        let b = BigInt(s.charCodeAt(len >> 1));
        let c = BigInt(s.charCodeAt(len - 1));
        return mix(a + (b << 8) + (c << 16), mul) * mul;
    }
    return BigInt(0x9ddfea08eb382d69);
}

function cityHash64(s) {
    const len = s.length;
    if (len <= 16) {
        return hashLen0to16(s, len).toString(16);
    }

    let h = BigInt(len);
    let g = h * BigInt(5);
    let f = g;

    for (let i = 0; i < len; i += 16) {
        let a = fetch64(s, i);
        let b = fetch64(s, i + 8);
        h ^= mix(a, b);
        g ^= mix(b, h);
        f ^= mix(h, g);
    }

    h ^= g;
    g ^= f;
    return (h ^ g).toString(16);
}

// Ejemplo de uso
const hash = cityHash64("hola mundo");
console.log(hash);
