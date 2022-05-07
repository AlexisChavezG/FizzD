const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const { request } = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});
app.get("/v1/explorers/:mission",(request,response)=>{
    const mission = request.params.mission;
    const explorersInMision = ExplorerController.getExplorerByMission(mission);
    response.json(explorersInMision)
})
app.get("/v1/countExplorer/:mission",(request,response)=>{
    const mission = request.params.mission
    const countExplorers = ExplorerController.getExplorersAmonutByMission(mission);
    response.json(countExplorers)
});
app.get("/v1/username/:mission",(request,response)=>{
    const mission = request.params.mission
    const userByMission =ExplorerController.getUsersByMission(mission)
    response.json(userByMission)

})
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});