const utils = require("../../lib/utils/reader");
describe("Casos de pruebas",()=>{
    test("Prueba de lectura de archivo",()=>{
        const explorers = utils.readJsonFile("./explorers.json");
        expect(explorers).toBeDefined();
    });
});