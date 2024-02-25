var express = require("express");
var app = express();

app.use(express.json());

const cors = require('cors');

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))

app.post("/calcEvCostPerMile", (req, res) => {
    let payload = req.body
    let costCalc = calcEvCostPerMile(payload.electricityPrice, payload.evEfficiency);
    res.json(costCalc)
});

app.post("/calcGasCostPerMile", (req, res) => {
    let payload = req.body
    let costCalc = calcGasCostPerMile(payload.gasPrice, payload.gasEfficiency);
    res.json(costCalc)
});

app.post("/calcEquivalentMpgCost", (req, res) => {
    let payload = req.body
    let costCalc = calcEquivalentMpgCost(payload.gasPrice, payload.electricityPrice, payload.evEfficiency);
    res.json(costCalc)
});

app.post("/calcEvAnnualCost", (req, res) => {
    let payload = req.body
    let costCalc = calcEvAnnualCost(payload.electricityPrice, payload.evEfficiency, payload.annualMiles);
    res.json(costCalc)
});

app.post("/calcGasAnnualCost", (req, res) => {
    let payload = req.body
    let costCalc = calcGasAnnualCost(payload.gasPrice, payload.gasEfficiency, payload.annualMiles)
    res.json(costCalc)
});

app.post("/calcYearsUntilBreakeven", (req, res) => {
    let payload = req.body
    let years = calcYearsUntilBreakeven(payload.evPrice, 
                                        payload.gasVehiclePrice, 
                                        payload.taxCredit, 
                                        payload.electricityPrice, 
                                        payload.evEfficiency, 
                                        payload.annualMiles, 
                                        payload.gasPrice, 
                                        payload.gasEfficiency)
    res.json(years)
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});



// Functions

const calcEvCostPerMile = (electricityPrice, evEfficiency) => {
    let cost = parseFloat((electricityPrice / evEfficiency).toFixed(2))
    return cost;
}

const calcGasCostPerMile = (gasPrice, gasEfficiency) => {
    let cost = parseFloat((gasPrice / gasEfficiency).toFixed(2))
    return cost;
}

const calcEquivalentMpgCost = (gasPrice, electricityPrice, evEfficiency) => {
    let cost = gasPrice / (electricityPrice / evEfficiency)
    let roundedCost = parseFloat(cost.toFixed(2))
    return roundedCost;
}

const calcEvAnnualCost = (electricityPrice, evEfficiency, annualMiles) => {
    let cost = electricityPrice / evEfficiency * annualMiles
    let roundedCost = parseFloat(cost.toFixed(2))
    return roundedCost;
}

const calcGasAnnualCost = (gasPrice, gasEfficiency, annualMiles) => {
    let cost = gasPrice / gasEfficiency * annualMiles
    let roundedCost = parseFloat(cost.toFixed(2))
    return roundedCost;
}

const calcYearsUntilBreakeven = (evPrice, gasVehiclePrice, taxCredit, electricityPrice, evEfficiency, annualMiles, gasPrice, gasEfficiency) => {
    let priceDifference = evPrice - gasVehiclePrice
    if (taxCredit === true) {
        priceDifference -= 7500
    }

    let evAnnualCost = electricityPrice / evEfficiency * annualMiles
    let gasAnnualCost = gasPrice / gasEfficiency * annualMiles

    let savingsPerYear = gasAnnualCost - evAnnualCost
    if (savingsPerYear <= 0) {
        return float('inf')
    }

    let years = priceDifference / savingsPerYear

    return years
}