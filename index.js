require('dotenv').config();

//const PORT = process.env.PORT;
const PORT = 3000;

require('./configs/dbConnection')

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin:"http://127.0.0.1:4200"
}));
app.get("/", (req, res) => {
    res.send("API Working");
});

const users = require('./routes/UserRoute')

app.use("/api/", users);


app.listen(PORT, () => {

    console.log("Server is running in PORT: " + PORT);
});
