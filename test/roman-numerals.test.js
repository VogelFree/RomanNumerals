const assert = require("chai").assert
const parseArabicToRoman = require("../roman-numerals").parseArabicToRoman

test("1 to I", () =>
{
  const input = 1
  const expectedOutput = "I"
  const output = parseArabicToRoman(input)
  assert.equal(expectedOutput, output)
})

test("5 to V", () =>
{
  const input = 5
  const expectedOutput = "V"
  const output = parseArabicToRoman(input)
  assert.equal(output, expectedOutput)
})
