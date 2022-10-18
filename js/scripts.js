const oz = parseFloat(prompt("Please input number of ounces (oz): "))
// const lbs = parseFloat(prompt("Please input number of pounds (lbs): "))

function ouncesToPoundsConv(oz) {
  const results = oz * .0625;
  return results;
}

// function poundsToOuncesConv(lbs) {
//   const results = lbs / .0625;
//   return results;
// }

ouncesToPoundsResult = ouncesToPoundsConv(oz);
// poundsToOuncesResult = poundToOuncesConv(lbs);

poundsToGramsResult = 454 * ouncesToPoundsResult;
// ouncesToGramsResult = 28.3 * poundsToOuncesResult;

window.alert(oz + " ounces are equal to " + ouncesToPoundsResult + "pounds and " + poundsToGramsResult + " grams");
// window.alert(lbs + " pounds are equal to " + poundsToOuncesResult + "ounces and " + ouncesToGramsResult + " grams");