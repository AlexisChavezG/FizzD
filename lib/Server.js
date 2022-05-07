const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
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

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});