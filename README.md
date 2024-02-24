# EcoShift-Microservice
#### Microservice for the EcoShift:  EV vs. Gas Calculator frontend application.

This microservice provides six functions:

1.  Calculate EV cost per mile
2.  Calculate gas cost per mile
3.  Calculate equivalent MPG cost
4.  Calculate EV annual cost
5.  Calculate gas annual cost
6.  Calculate years until breakeven

## Example Requests for API Endpoints
<details>
<summary>Calculate EV cost per mile</summary>
<br>
  
async function calcEvCostPerMile() {
  const req = {
    electricityPrice,
    evEfficiency
  };
  const options = {
    mode: 'cors',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    body: JSON.stringify(req)
  };
  const response = await fetch('http://localhost:3000/calcEvCostPerMile', options);
  const result = await response.json();
  console.log("EV Cost Per Mile: ", result)
}
</details>

<details>
<summary>Calculate Gas cost per mile</summary>
<br>
  
async function calcGasCostPerMile() {
  const req = {
    gasPrice,
    gasEfficiency
  };
  const options = {
    mode: 'cors',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    body: JSON.stringify(req)
  };
  const response = await fetch('http://localhost:3000/calcGasCostPerMile', options);
  const result = await response.json();
  console.log("Gas Cost Per Mile: ", result)
}
</details>

<details>
<summary>Calculate equivalent MPG cost</summary>
<br>
  
async function calcEquivalentMpgCost() {
  const req = {
    gasPrice,
    electricityPrice,
    evEfficiency
  };
  const options = {
    mode: 'cors',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    body: JSON.stringify(req)
  };
  const response = await fetch('http://localhost:3000/calcEquivalentMpgCost', options);
  const result = await response.json();
  console.log("Equivalent MPG Cost: ", result)
}
</details>

<details>
<summary>Calculate EV annual cost</summary>
<br>
  
async function calcEvAnnualCost() {
  const req = {
    electricityPrice,
    evEfficiency,
    annualMiles
  };
  const options = {
    mode: 'cors',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    body: JSON.stringify(req)
  };
  const response = await fetch('http://localhost:3000/calcEvAnnualCost', options);
  const result = await response.json();
  console.log("EV Annual Cost: ", result)
}
</details>

<details>
<summary>Calculate Gas annual cost</summary>
<br>
  
async function calcGasAnnualCost() {
  const req = {
    gasPrice,
    gasEfficiency,
    annualMiles
  };
  const options = {
    mode: 'cors',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    body: JSON.stringify(req)
  };
  const response = await fetch('http://localhost:3000/calcGasAnnualCost', options);
  const result = await response.json();
  console.log("Gas Annual Cost: ", result)
}
</details>

<details>
<summary>Calculate years until breakeven</summary>
<br>
  
async function calcYearsUntilBreakeven() {
  const req = {
    evPrice,
    gasVehiclePrice,
    taxCredit,
    electricityPrice,
    evEfficiency,
    annualMiles,
    gasPrice,
    gasEfficiency
  };
  const options = {
    mode: 'cors',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    },
    body: JSON.stringify(req)
  };
  const response = await fetch('http://localhost:3000/calcYearsUntilBreakeven', options);
  const result = await response.json();
  console.log("Years until breakeven: ", result)
}
</details>

## UML Diagram
<img width="778" alt="Screenshot 2024-02-23 at 9 13 46 AM" src="https://github.com/fatima-rizvi/EcoShift-Microservice/assets/68958153/ad3befda-5696-4bf9-9fd6-a06b703e16a3">
