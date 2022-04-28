class ExplorerService{
    static filterByMission(explorers, mission){
        const mision=explorers.filter((explorer) => explorer.mission == mission);
        return mision
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNodeToGetUsernames
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const users = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = users.map((explorer) => explorer.githubUsername);
        return usernamesInNode
    }
}
module.exports  = ExplorerService