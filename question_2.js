// Question 2 - Print
let time = 1000;

const printEachItem = (item) => {
  setTimeout(() => {
    console.log(`item: ${item}`);
  }, time);
};

const printItemsList = (list) => {
  for (let item of list) {
    printEachItem(item);
    time += time;
  }
  time = 1000;
};

const display1 = printItemsList(["a", "b", "c", "d", "e"]);
const display2 = printItemsList(["af", "bg", "ch", "di", "ej"]);
