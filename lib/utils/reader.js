const fs = require("fs");
class Reader{
    static readJsonFile(url){
        const rawdata = fs.readFileSync(url);
        const explorers = JSON.parse(rawdata);
        return explorers
    }
}
module.exports = Reader