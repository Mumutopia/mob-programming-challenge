const { application } = require("express");
const express =require("express");
const hbs = require("hbs");
const app = express();

require("dotenv").config();
require("./config/mongodb"); 

app.set("view engine", hbs);
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
hbs.registerPartials(__dirname + "/views/partials");

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

const images = [
   "/img/alexander-sinn-KgLtFCgfC28-unsplash.jpg", "/img/clark-tibbs-oqStl2L5oxI-unsplash.jpg", "/img/pankaj-patel-u2Ru4QBXA5Q-unsplash.jpg" 
]
