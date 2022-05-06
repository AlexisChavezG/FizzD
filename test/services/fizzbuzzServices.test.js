const service = require("../../lib/services/fizzbuzzService");
describe("Casos de pruebas",()=>{
    test("Prueba conocer la cantidad de ",()=>{
        const explorer1 = {name: "Explorer1", score: 1}
        const explorers = service.applyValidationInExplorer(explorer1) 
        expect(explorers.trick).toBe(1);
    });
});