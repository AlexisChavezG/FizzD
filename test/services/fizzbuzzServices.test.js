const data = require("../../lib/services/fizzbuzzService");

describe("Casos de pruebas",()=>{
    test("Prueba para validación del mismo trick ",()=>{
        const explorer1 = {name: "Explorer1", score: 1};
        const explorers = data.applyValidationInExplorer(explorer1); 
        expect(explorers.trick).toBe(1);
    });
    test("Prueba para validación del mismo trick ",()=>{
        const explorer2 = {name: "Explorer2", score: 3};
        const explorers = data.applyValidationInExplorer(explorer2); 
        expect(explorers.trick).toBe("FIZZ");
    });
    test("Prueba para validación del mismo trick ",()=>{
        const explorer3 = {name: "Explorer3", score: 5};
        const explorers = data.applyValidationInExplorer(explorer3); 
        expect(explorers.trick).toBe("BUZZ");
    });
    test("Prueba para validacion divisible en 3 y 5 ",()=>{
        const explorer4 = {name: "Explorer4", score: 15};
        const explorers = data.applyValidationInExplorer(explorer4); 
        expect(explorers.trick).toBe("FIZZBUZZ");
    });
});
