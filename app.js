const reader = require('./lib/utils/reader')
const exploService = require('./lib/services/explorerService')
const explorers = reader.readJsonFile('./explorers.json')
console.log(explorers)
console.log('--------------------------------')

const byMision = exploService.filterByMission(explorers,"node")
console.log(` Lista de exploradores by mision: ${byMision}`)

const byExplorer = exploService.getAmountOfExplorersByMission(explorers,"node")
console.log(`Exploradores por mision: ${byExplorer}`)

const lisGit = exploService.getExplorersUsernamesByMission(explorers,`node`)
console.log(`Lista de usuario git ${lisGit}`)