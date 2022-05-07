const reader = require("../utils/reader");
const explorerS = require("../services/explorerService");
const fizz = require("../services/fizzbuzzService");
class ExplorerController{
    static getExplorerByMission(mission)
    {
        const listaExplorer = reader.readJsonFile("explorers.json");
        const explorerMission = explorerS.filterByMission(listaExplorer,mission);
        return explorerMission;
    }

    static getExplorersAmonutByMission(mission)
    {
        const listaExplorer = reader.readJsonFile("explorers.json");
        const explorerCount = explorerS.getAmountOfExplorersByMission(listaExplorer,mission);
        return explorerCount;
    }
    static getUsersByMission(mission){
        const listaExplorer = reader.readJsonFile("explorers.json");
        const userByMission = explorerS.getExplorersUsernamesByMission(listaExplorer,mission);
        return userByMission;
    }
}
module.exports = ExplorerController;