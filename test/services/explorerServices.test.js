const utils = require('../../lib/utils/reader')
const services = require('../../lib/services/explorerService')
describe('Casos de pruebas',()=>{
    test('1. Primera funcion',()=>{
        const explorers = utils.readJsonFile('./explorers.json')
        const lengt = services.filterByMission(explorers,"node")
        expect(lengt).toBe(10)
    })
})