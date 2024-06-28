class HashTable {
    constructor(size = 53) { // Tamaño de la tabla hash, preferiblemente un número primo
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31; // Número primo para ayudar en la dispersión
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96; // Convierte el carácter en un número
            total = (total * WEIRD_PRIME + value) % this.keyMap.length; // Calcula el hash
        }
        return total; // Devuelve el índice calculado
    }

    set(key, value) {
        let index = this._hash(key); // Calcula el índice para la clave
        if (!this.keyMap[index]) {
            this.keyMap[index] = []; // Crea una lista enlazada si no existe
        }
        this.keyMap[index].push([key, value]); // Añade el par clave-valor a la lista
    }

    get(key) {
        let index = this._hash(key); // Calcula el índice para la clave
        if (this.keyMap[index]) {
            // Recorre la lista enlazada en busca de la clave
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]; // Devuelve el valor si se encuentra la clave
                }
            }
        }
        return undefined; // Devuelve undefined si la clave no se encuentra
    }

    keys() {
        let keysArr = [];
        // Recorre todo el array keyMap
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                // Recorre la lista enlazada y añade las claves al array keysArr
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keysArr.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keysArr; // Devuelve todas las claves
    }

    values() {
        let valuesArr = [];
        // Recorre todo el array keyMap
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                // Recorre la lista enlazada y añade los valores al array valuesArr
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    valuesArr.push(this.keyMap[i][j][1]);
                }
            }
        }
        return valuesArr; // Devuelve todos los valores
    }
}

// Ejemplo de uso
let ht = new HashTable();
ht.set("hola", "mundo");
ht.set("adios", "mundo");

console.log(ht.get("hola")); // "mundo"
console.log(ht.get("adios")); // "mundo"
console.log(ht.get("noexiste")); // undefined

console.log(ht.keys()); // ["hola", "adios"]
console.log(ht.values()); // ["mundo", "mundo"]
