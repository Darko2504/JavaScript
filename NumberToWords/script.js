

function convertingNumberToWord(number) {
    if (isNaN(number) || number < 0 || number > 1000000) {
        return `ERROR!!`;
      }
      if (number === 1000000) {
        return `One Million`;
      }
  let numbersToTen = [
    ``,
    `One `,
    `Two `,
    `Three `,
    `Four `,
    `Five `,
    `Six `,
    `Seven `,
    `Eight `,
    `Nine `,
  ];

  let numbersToTwenty = [
    `Ten `,
    `Eleven `,
    `Twelve `,
    `Thirteen `,
    `Fourteen `,
    `Fifteen `,
    `Sixteen `,
    `Seventeen `,
    `Eighteen `,
    `Nineteen `,
  ];

  let wholeNumbers = [
    ``,
    ``,
    `Twenty `,
    `Thirty `,
    `Fourty `,
    `Fifty `,
    `Sixty `,
    `Seventy `,
    `Eighty `,
    `Ninety `,
  ];

  let thousand = `Thousand `;

  

  function convertingMath(num) {
    let inputNumber = ``;
    if (num >= 100) {
      inputNumber += `${numbersToTen[Math.floor(num / 100)]} Hundred `;
      num %= 100;
    }
    if (num >= 20) {
      inputNumber += `${wholeNumbers[Math.floor(num / 10)]}`;
      num %= 10;
    }
    if (num >= 10) {
      inputNumber += `${numbersToTwenty[num - 10]}`;
      num = 0;
    }
    if (num > 0) {
      inputNumber += `${numbersToTen[num]}`;
    }
    return inputNumber;
  }

  let result = ``;
  let thousandsNumber = Math.floor(number / 1000);
  let hundredsNumber = number % 1000;

  if (thousandsNumber > 0) {
    result += `${convertingMath(thousandsNumber)} ${thousand}`;
  }
  if (hundredsNumber > 0) {
    result += `${convertingMath(hundredsNumber)}`;
  }
  return result;

  
}
function finalConvert() {
    let input = document.getElementById(`numInput`);
    let finalResult = document.getElementById(`result`);

    let number = parseInt(input.value);
    let result = convertingNumberToWord(number);
    
    finalResult.innerText = result;
  }
