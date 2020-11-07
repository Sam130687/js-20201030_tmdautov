/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  const st = new Set(arr);

  return [...st];
}

// const arr = [1, 2, 2, 3, 1, 4];
// console.log(uniq(arr));
