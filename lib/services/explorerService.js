class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explore) => explore.mission == mission);
        return explorersInNode
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const cantidad=explorers.filter((explorer) => explorer.mission == mission);
        return cantidad.length
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode
    }
}
module.exports  = ExplorerService