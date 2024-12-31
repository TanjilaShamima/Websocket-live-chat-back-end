const express = require('express');
const cors = require('cors');
const endpointsList = require('./services/endPointList');
const router = require('./routers/indexRoute');
const { connectMongoDB } = require('./config/dbConnection');
const { appConfig } = require('./config/constant');
const app = express();


app.use(cors({ origin : "[*]", credentials : true }));
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("uploads/images"));
app.use("api/v1", router);



app.listen(appConfig.port, async() => {
    console.log(`${appConfig.name} is running on port ${appConfig.port}`);
    await connectMongoDB();
    endpointsList(app);
});