require('dotenv').config();

//const PORT = process.env.PORT;
const PORT = 3000;

require('./configs/dbConnection')

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin:"http://100.20.92.101:4200"
}));
app.get("/", (req, res) => {
    res.send("API Working");
});

const users = require('./routes/UserRoute')

app.use("/api/", users);


app.listen(PORT, () => {

    console.log("Server is running in PORT: " + PORT);
});
