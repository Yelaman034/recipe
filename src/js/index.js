const arr = [1, 2, 3, 5];

let myFunc = (a) => {
  console.log(`a нь : ${a}`);
};

const arr2 = [...arr, 7, 8, 9];

myFunc(arr2[1]);
