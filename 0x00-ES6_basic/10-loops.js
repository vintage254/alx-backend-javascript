export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (const value in array) {
    newArray.push(appendString + value);
  }
  return newArray;
}
