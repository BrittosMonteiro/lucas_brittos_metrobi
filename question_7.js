// Question 7 - get max value based on capacity
const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];

const capacity = 36;

const sortList = (types) => {
  types.sort((a, b) => a.price / a.kg - b.price / b.kg);
  return types;
};

const getMaxValue = (types, capacity) => {
  const sortedTypes = sortList(types);

  let totalCapacity = 0;
  let totalPrice = 0;
  let carrotsAdded = [];

  for (i = 0; i < sortedTypes.length; i++) {
    do {
      if (totalCapacity + sortedTypes[i].kg <= capacity) {
        totalCapacity += sortedTypes[i].kg;
        totalPrice += sortedTypes[i].price;
        carrotsAdded.push(sortedTypes[i]);
      }
    } while (totalCapacity + sortedTypes[i].kg <= capacity);
  }

  return `Total capacity: ${totalCapacity} - Price: ${totalPrice}`;
};

const maxValue = getMaxValue(carrotTypes, capacity);
console.log(maxValue);
