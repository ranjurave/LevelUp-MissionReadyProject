const express = require("express");
const { router } = require("./Routes/user.routes");
const app = express();
const cors = require("cors");

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTE
app.use(router);
app.listen(3002);
