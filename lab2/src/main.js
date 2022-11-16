import AesCtr from './aesCtr.js';

const password = 'qwertyuiopasdfghjklzxcvbnmqwerty';
const plaintext = 'hello world';
const ciphertext = AesCtr.encrypt(plaintext, password, 256);
const origtext = AesCtr.decrypt(ciphertext, password, 256);
console.log(ciphertext, origtext);
