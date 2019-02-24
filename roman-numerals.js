const replace = (oldVal, newVal) => 
    inpStr => 
      inpStr.replace(oldVal, newVal)

module.exports =
{
  parseArabicToRoman: (arabicNumber) =>
    "I".repeat(arabicNumber)
}
