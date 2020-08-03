const glob = require('glob');
const fs = require('fs');

glob("metadata/*.json", {}, function (er, files) {
    let metadata = [];
    files.forEach(file => {
        fs.readFile(file, (er, asdf) => {
            let contents = asdf.toString('utf-8');
            let obj = JSON.parse(contents);
            metadata.push(obj);
            if (metadata.length === files.length) {
                fs.writeFile('src/metadata.json', JSON.stringify(metadata), () => {
                    console.log("success")
                });
            }
        });
    });
})