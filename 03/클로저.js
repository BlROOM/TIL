let num = 0;

function count() {
  return {
    increase() {
      num += 1;
    },
    decrease() {
      num -= 1;
    },
    getNumber() {
      return num;
    },
  };
}

const result = count();
console.log(result.increase());
console.log(result.increase());
console.log(result.increase());
console.log(result.increase());
console.log(result.getNumber());
