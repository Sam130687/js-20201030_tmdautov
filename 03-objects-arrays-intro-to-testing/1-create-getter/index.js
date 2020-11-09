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
      // console.log(item);
      res = res?.[item];
      // console.error(res)
    }


    return res;
  };
}

// const getter = createGetter('more.nested.property');
// console.log(getter({more: {nested: {property: 1}}}));
