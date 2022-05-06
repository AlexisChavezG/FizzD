const utils = require("../../lib/utils/reader");
describe("Casos de pruebas",()=>{
    test("1. Primera funcion",()=>{
        const explorers = utils.readJsonFile("./explorers.json");
        expect(explorers).toBeDefined();
    });
});