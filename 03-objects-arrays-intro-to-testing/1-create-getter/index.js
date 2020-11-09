/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  let arr = path.split(".");

  return function(obj) {
    let res = Object.assign({}, obj);
    for (const item of arr) {
      res = res?.[item];
    }
    return res;
  };
}

