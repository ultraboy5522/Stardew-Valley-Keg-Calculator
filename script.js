"use strict";
const woodNeeded = 30
const ironOreNeeded = 5
const copperOreNeeded = 5
const coalNeeded = 6
const ironCost = 250
const copperCost = 150
const coalCost = 250
const woodCost = 50
const submitBtn = document.querySelector("#submit")
const userInput = document.querySelector("#kegsInput")
const calculation = document.createElement("div");
document.body.appendChild(calculation)


submitBtn.addEventListener("click", () => {
    let numberNeeded = userInput.value;
    if (!numberNeeded || isNaN(numberNeeded) || numberNeeded < 1) {
    alert("Please enter a valid number")
} else {
    const woodTotal = numberNeeded * woodNeeded;
    const woodTotalCost = woodTotal * woodCost;
    const ironTotal = numberNeeded * ironOreNeeded;
    const ironTotalCost = ironTotal * ironCost;
    const copperTotal = numberNeeded * copperOreNeeded;
    const copperTotalCost = copperTotal * copperCost;
    const coalTotal = numberNeeded * coalNeeded;
    const coalTotalCost = coalTotal * coalCost;
    const finalCost = woodTotalCost + ironTotalCost + copperTotalCost + coalTotalCost;
    const profitAncient = numberNeeded * 1650
    const profitStar = numberNeeded * 2250

    calculation.innerHTML = `
        <h3>Materials Needed:</h3>
        <p>Wood: ${woodTotal.toLocaleString()} (${woodTotalCost.toLocaleString()}g)</p>
        <p>Iron Ore: ${ironTotal.toLocaleString()} (${ironTotalCost.toLocaleString()}g)</p>
        <p>Copper Ore: ${copperTotal.toLocaleString()} (${copperTotalCost.toLocaleString()}g)</p>
        <p>Coal: ${coalTotal.toLocaleString()} (${coalTotalCost.toLocaleString()}g)</p>
        <p>Total cost: ${finalCost.toLocaleString()}g</p>
        <p>Gold Made - Ancient Fruit (1 Week): ${profitAncient.toLocaleString()}g, or ${(profitAncient + (profitAncient * 0.4)).toLocaleString()}g if you're an artisan</p>
        <p>Gold Made - Starfruit (1 Week): ${profitStar.toLocaleString()}g, or ${(profitStar + (profitStar * 0.4)).toLocaleString()}g if you're an artisan</p>
    `;
}
});

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        submitBtn.click();
    }
});