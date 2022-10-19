const petshelterController = require("../controllers/petshelter.controller");
module.exports =  (app) =>{
    app.get("/api/petshelters", petshelterController.list);
    app.post("/api/petshelters", petshelterController.create);
    app.get("/api/petshelters/:id", petshelterController.detail);
    app.put("/api/petshelters/:id", petshelterController.update);
    app.delete("/api/petshelters/:id", petshelterController.delete);
}