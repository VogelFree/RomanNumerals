const replace = (oldVal, newVal) => 
    inpStr => 
      inpStr.replace(oldVal, newVal)

const pipe = functions =>
  data =>
    functions.reduce((value, func) =>
      func(value), data)

module.exports =
{
  parseArabicToRoman: (arabicNumber) =>
    pipe(
      [
        replace("IIIII", "V"),
      ])("I".repeat(arabicNumber))
}
