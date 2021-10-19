// console.log('hello world!')

// Modulos core de Node.js

// http (Crear un servidor o para poder hacer peticions a otros servidores)
// fs (Manejo de archivos) {File System}
// path (Construccion de rutas hacia los archivos o directorios)
// events (Manejo de eventos)

// importar un módulo en Node.js
// const modulo = require('modulo');

const fs = require('fs');

// Leer un archivo con fs
// <------- ... --------->
// Para solicitudes asincronas
fs.readFile('saludo.txt', {encoding: 'utf8'}, (err, data) => {
    if (!err) {
        console.log(data);
    }else{
        console.log(err);
    }
})
// Para operaciones sincronas
const data = fs.readFileSync('saludo.txt', {encoding: 'utf8'})
console.log(data);

// Cambia el contenido del archivo
fs.writeFile('saludo.txt', 'Yeah!', (err) => {
    if (!err) {
        console.log('Se ha escrito en el archivo');
    }else {
        console.log(err);
    }
})
// fs.writeFileSync  <-------- método síncrono

// Agrega contenido después del archivo
fs.appendFile('saludo.txt', 'Agregamos mas prro!', (err) => {
    if (!err) {
        console.log('Se ha escrito en el archivo');
    }else {
        console.log(err);
    }
})
// fs.appendFileSync <------------- método síncrono

// ('\n' para salto de línea) 