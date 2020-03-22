module.exports = function toReadable (number) {
  let toTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen'];
  let toHundred = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
  'ninety'];
  let big = ['hundred', 'thousand', 'million'];

  if (number === 0 ) {
    return 'zero';
  };

  let StringedNumber = number.toString();
  let numberLength = StringedNumber.length;

  if (number < 20) {
    return toTwenty[number];
  };
  if (numberLength === 2) {
    return (toHundred[StringedNumber[0]] + ' ' + toTwenty[StringedNumber[1]]).trim();      
  };
  let result = '';
  if (numberLength === 3) {
    if (StringedNumber[1] === '0' && StringedNumber[2] === '0') {
      return toTwenty[StringedNumber[0]] + ' hundred';
    } else if (StringedNumber[1] === '0') {
      return toTwenty[StringedNumber[0]] + ' hundred ' + toTwenty[StringedNumber[2]];
    } else {
      let toCheck = parseInt(StringedNumber.slice(1, 3));
      if (toCheck < 20) {
        return toTwenty[StringedNumber[0]] + ' hundred ' + toTwenty[toCheck];
      } else {
        let toCheckStr = StringedNumber.slice(1, 3);
        return (toTwenty[StringedNumber[0]] + ' hundred ' + toHundred[toCheckStr[0]] + ' ' + toTwenty[toCheckStr[1]]).trim();
      };
    };
  };
};
