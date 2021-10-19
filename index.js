const fs = require('fs/promises');

// Promesas
fs.readFile('saludo.txt', {encoding: 'utf8'})
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Promesas async / await
const readFileMeth = async() => {
    try {
        const data = await fs.readFile('saludo.txt', {encoding: 'utf8'});
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
readFileMeth();