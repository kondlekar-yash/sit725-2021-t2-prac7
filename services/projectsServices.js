let client = require("../mdb");
let projectsCollection;
/* setTimeout(() => {
    projectsCollection = client.mongoClient.db("deakinCrowds").collection("projects");

}, 2000) */

const getAllProjects = (res) => {
   /*  projectsCollection.find().toArray(function (err, result) {
        if (err)
        {
            throw err;
        } else {
            res.send(result);
        }
    }) */
res.json({statusCode: 200, data: "N.A", message:"WORK IN PROGRESS"});

}

module.exports = {
    getAllProjects
}