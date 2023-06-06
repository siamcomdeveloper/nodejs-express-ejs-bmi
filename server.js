const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');
const port = 3000;

app.get("/", (req, res) => {
    const data = {
        age: null,
        weight: null,
        height: null,
        result: ''
    };
    res.render('bmi', data);
});

app.post("/", (req, res) => {
    var age = Number(req.body.age);
    var weight = Number(req.body.weight);
    var heightMeter = Number(req.body.height)/100;

    var result = (weight / (heightMeter * heightMeter)).toFixed(1);

    const data = {
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height,
        result: 'Your BMI Result is: '+result
    };
    res.render('bmi', data);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});