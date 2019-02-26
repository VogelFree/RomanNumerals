const assert = require("chai").assert
const parseArabicToRoman = require("../roman-numerals").parseArabicToRoman

const testData =
[
  { input: 1, expectedOutput: "I" },
  { input: 5, expectedOutput: "V" },
]

testData.forEach(({input, expectedOutput}) =>
{
  test("" + input + " to " + expectedOutput, () =>
  {
    const output = parseArabicToRoman(input)
    assert.equal(output, expectedOutput)
  })
})
