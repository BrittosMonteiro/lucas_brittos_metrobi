let floors = Array.from(Array(100).keys());
const breakEgg = 12;

const splitSegments = (totalSegments) => {
  const groups = groupFloors(totalSegments);

  for (let group of groups) {
    const foundFloor = verifyFloor(group);
    if (foundFloor) return `Found at: ${foundFloor}`;
  }

  return `Not found`;
};

const groupFloors = (totalSegments) => {
  const itemsPerGroup = Math.ceil(floors.length / totalSegments);
  let groups = [];

  for (let i = 0; i < totalSegments; i++) {
    const start = i * itemsPerGroup;
    const end = start + itemsPerGroup;
    groups.push(floors.slice(start, end));
  }

  return groups;
};

const verifyFloor = (group) => {
  const initial = group[0];
  const last = group[group.length - 1];

  const isHigher = breakEgg > last;

  if (isHigher) return false;

  for (let item of group) {
    if (item === breakEgg) return item;
  }
};

const checkFloors = splitSegments(10);
console.log(checkFloors);
