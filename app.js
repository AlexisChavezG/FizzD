const reader = require("./lib/utils/reader");
const exploService = require("./lib/services/explorerService");
const fizz = require("./lib/services/fizzbuzzService");
const explorers = reader.readJsonFile("./explorers.json");

const byMision = exploService.filterByMission(explorers,"node");
console.log(byMision);
const totalMision = exploService.getAmountOfExplorersByMission(explorers,"node");
console.log(totalMision);
const explorerByGit = exploService.getExplorersUsernamesByMission(explorers,"node");
console.log(explorerByGit);
const fizzBuz = fizz.applyValidationInExplorer(explorers);
console.log(fizzBuz);