// Question 1 - Find duplicated elements
const list = [1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 9, 10];
let single = [];

const findDuplicated = list.reduce((acc, cur) => {
  if (!single.includes(cur)) {
    single.push(cur);
    return acc;
  }

  if (!acc.includes(cur)) {
    acc.push(cur);
    return acc;
  }
  return acc;
}, []);

console.log({ single, findDuplicated });
