const arr = [1, 2, 36, 4, 5, 6];
let result = 0;

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);

  if (arr[i] < arr[i + 1]) {
    result = arr[i + 1];
  } else {
    result = arr[i];
  }
}

console.log(result, "result");
