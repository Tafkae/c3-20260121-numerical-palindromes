class Kata {
  hello(name) {
    return `Hello ${name}`;
  }

  checkPalindrome(num) {
    if (!Number.isInteger(num) || num < 0) return false;

    let strNum = num.toString();
    let rvsNum = strNum.split("").reverse().join("");
    if (strNum === rvsNum) return true;
    return false; // default
  }

  // brute-force solution
  generatePalindromes(qty) {
    if (qty < 1) return [];

    let pals = [0];
    let next = pals.at(-1) + 1;

    while (pals.length < qty) {
      if (this.checkPalindrome(next)) {
        pals.push(next);
      }
      next ++;
    }
    console.log(pals);
    return pals;
  }
}

module.exports = Kata;
