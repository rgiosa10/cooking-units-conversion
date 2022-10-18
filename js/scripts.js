//Ounces input

const oz = parseFloat(prompt("Please input number of ounces (oz): "))

function ouncesToPoundsConv(oz) {
  const results = oz * .0625;
  return results;
}

ouncesToPoundsResult = ouncesToPoundsConv(oz);
poundsToGramsResult = 454 * ouncesToPoundsResult;

window.alert(oz + " ounces are equal to " + ouncesToPoundsResult + "pounds and " + poundsToGramsResult + " grams");

//Pounds input

const lbs = parseFloat(prompt("Please input number of pounds (lbs): "))

function poundsToOuncesConv(lbs) {
  const results = lbs / .0625;
    return results;
}

poundsToOuncesResult = poundsToOuncesConv(lbs);
ouncesToGramsResult = 28.3 * poundsToOuncesResult;

window.alert(lbs + " pounds are equal to " + poundsToOuncesResult + " ounces and " + ouncesToGramsResult + " grams");
