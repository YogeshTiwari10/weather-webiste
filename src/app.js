const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;


// website path 
const staticPath = (path.join(__dirname, "../public"));
const templatepath = (path.join(__dirname, "../src/templates/views"));
const partialpath = (path.join(__dirname, "../src/templates/partials"));

// Routing ouw static weather website 
app.set('view engine', 'hbs');
app.set('views', templatepath)
hbs.registerPartials(partialpath);

app.use(express.static(staticPath));


// routing 

app.get("/index" , (req, res)=>{
    res.render('index');
});

app.get("/about" , (req, res)=>{
    res.render('about');
});

app.get("/weather" , (req, res)=>{
    res.render('weather');
});
app.get("*" , (req, res)=>{
    res.render('error');
});

app.listen(port, ()=>{
    console.log("Listening to 8000 port");
});