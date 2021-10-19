const fs = require('fs');

fs.readFile('saludo.txt', {encoding: 'utf8'}, (err, data) => {
    if (!err) {
        let content = data;
        content = content.replace('Fack', 'FACK ');
        fs.writeFile('saludo.txt', content, (error) => {
            if (!error) {
                console.log('un nuevo F');
            }
        })
    }
})