const { application } = require("express");
const express =require("express");
const hbs = require("hbs");
const router = require("./routers/main");
const app = express();

require("dotenv").config();
require("./config/mongodb"); 

app.set("view engine", hbs);
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
hbs.registerPartials(__dirname + "/views/partials");

const mainRouter = require("./routers/main.js");
app.use(mainRouter);


console.log(process.env.PORT);


app.listen(process.env.PORT, () => {
    console.log("http://localhost:" +process.env.PORT);
})
console.log("Hello World");




const users = [
    {
    name : "david",
    email : "d@d.d",
    favoriteLanguage : "spanish"
},
{
    name : "yuki",
    email : "y@y.y",
    favoriteLanguage : "japanese"
},
{
    name : "constance",
    email : "c@c.c",
    favoriteLanguage : "portuguese"
},

]


