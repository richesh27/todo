const express =  require("express");
const bodyParser = require('body-parser');
const {PORT} = require("./config/config");

// const sequelize = require("./config/connect")
const tasksRoutes  = require("./routes/tasks-api")

const setupAndStartServer  = async() =>{

    //create an express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api',tasksRoutes);

    app.listen(PORT, async ()=>{
        console.log(`Server running at port ${PORT}`);

    });
}
setupAndStartServer();  