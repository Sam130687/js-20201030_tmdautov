/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */

// function needCompress(string, pos, sz) {
//   let cnt = 0;
//   const ch = string[pos];

//   for (let i = pos + 1; i < string.length; i++) {
//     if (string[i] === ch) {
//       cnt++;
//     } else {
//       break;
//     }
//   }
//   if (cnt > sz) return true;
//   return false;
// }

export function trimSymbols(string, size) {
  if (string.length === 0) {
    return "";
  }
  if (size === 0) {
    return "";
  }
  if (size === undefined) {
    return string;
  }

  let res = "";
  const arr = string.split('');

  arr.forEach((letter, idx) => {
    let flag = false;

    if (idx >= size) {
      for (let i = idx - 1; i >= idx - size; i--) {
        flag = (arr[i] === letter);
      }
    }

    if (!flag) {
      res += letter;
    }
  });
  return res;
}

// console.log(trimSymbols("xxxaaaaab", 1));

/*
create obj
  char - needRemove



*/
