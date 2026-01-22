const Kata = require("./kata");

let fixture;

// This is a Jest unit test - see https://jestjs.io/docs/en/getting-started for more information

beforeEach(() => {
  fixture = new Kata();
});

test("hello should return message with specified name", () => {
  const name = "Ingage";
  expect(fixture.hello(name)).toEqual(`Hello ${name}`);
});

test("checkPalindrome should be false if input is not a positive integer", () => {
  expect(fixture.checkPalindrome(-5)).toEqual(false);
  expect(fixture.checkPalindrome("A")).toEqual(false);
});

test("checkPalindrome should be true for single digit numbers", () => {
  expect(fixture.checkPalindrome(0)).toEqual(true);
  expect(fixture.checkPalindrome(5)).toEqual(true);
});

test("checkPalindrome should identify numeric palindromes", () => {
  const samplePals = [0, 5, 11, 232, 4994, 10501];
  expect(fixture.checkPalindrome(samplePals[0])).toEqual(true);
  expect(fixture.checkPalindrome(samplePals[1])).toEqual(true);
  expect(fixture.checkPalindrome(samplePals[2])).toEqual(true);
  expect(fixture.checkPalindrome(samplePals[3])).toEqual(true);
  expect(fixture.checkPalindrome(samplePals[4])).toEqual(true);
  expect(fixture.checkPalindrome(samplePals[5])).toEqual(true);
});

test("generatePalindromes should generate the first x palindrome numbers", () => {
  expect(fixture.generatePalindromes(10)).toEqual([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  expect(fixture.generatePalindromes(19)).toEqual([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99
  ]);

  // let pals = fixture.generatePalindromes(10000);
  // console.log(pals.at(-1));
});
