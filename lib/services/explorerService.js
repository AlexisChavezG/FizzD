class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
        return explorersInNode;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode.length;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const users = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = users.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }
}
module.exports =ExplorerService;