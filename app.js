// // Arrays and loop
const names = ["ann", "bob", "josh", "susy"];
const lastName = ["Smith"];

let newArray = [];

for (let i = 0; i < names.length; i++) {
  const fullName = `${names[i]} ${lastName}`;
  newArray.push(fullName);
}
console.log(newArray);

// Functions,conditons, arrays and for loop

const gas = [20, 40, 100];
const food = [120, 225, 300];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log("Whoa! You are spending way too much!");
    return total;
  }
  console.log("You are good total is less than 100");
  return total;
}
const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);

console.log({
  gas: gasTotal,
  food: foodTotal,
});
