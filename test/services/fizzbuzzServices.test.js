const data = require("../../lib/services/fizzbuzzService");
describe("Casos de pruebas",()=>{
    test("Prueba para validación del mismo trick ",()=>{
        const explorer1 = {name: "Explorer1", score: 1}
        const explorers = data.applyValidationInExplorer(explorer1) 
        expect(explorers.trick).toBe(1);
    });
});
describe("Casos de pruebas",()=>{
    test("Prueba para validación del mismo trick ",()=>{
        const explorer1 = {name: "Explorer1", score: 1}
        const explorers = data.applyValidationInExplorer(explorer1) 
        expect(explorers.trick).toBe(1);
    });
});