const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function total(accumulator, element){
    return accumulator + element
}
const totalBatteries = batteryBatches.reduce(total)
console.log(totalBatteries)