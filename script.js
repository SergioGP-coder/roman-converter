function trackEvent(eventName, params) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }
}

function integerToRoman(num) {
  if (!Number.isInteger(num) || num < 1 || num > 3999) {
    throw new Error('The number must be between 1 and 3999.');
  }

  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';

  for (const item of romanNumerals) {
    while (num >= item.value) {
      result += item.numeral;
      num -= item.value;
    }
  }

  return result;
}

function romanToInteger(roman) {
  if (typeof roman !== 'string' || roman.trim() === '') {
    throw new Error('Input must be a valid Roman numeral.');
  }

  roman = roman.trim().toUpperCase();

  if (!/^[IVXLCDM]+$/.test(roman)) {
    throw new Error('The Roman numeral contains invalid characters.');
  }

  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;
  let previousValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = romanMap[roman[i]];

    if (currentValue < previousValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }

    previousValue = currentValue;
  }

  if (integerToRoman(total) !== roman) {
    throw new Error('The Roman numeral is not in canonical form.');
  }

  return total;
}

function handleConversion() {
  const mode = document.getElementById('conversionMode').value;
  const input = document.getElementById('inputValue').value.trim();
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');

  resultDiv.textContent = '';
  errorDiv.textContent = '';

  try {
    if (mode === 'intToRoman') {
      const num = Number(input);
      const roman = integerToRoman(num);
      resultDiv.textContent = `Roman Numeral: ${roman}`;

      trackEvent('conversion_success', {
        conversion_type: 'integer_to_roman'
      });

    } else if (mode === 'romanToInt') {
      const num = romanToInteger(input);
      resultDiv.textContent = `Integer: ${num}`;

      trackEvent('conversion_success', {
        conversion_type: 'roman_to_integer'
      });
    }

  } catch (error) {
    errorDiv.textContent = error.message;

    trackEvent('conversion_error', {
      error_message: error.message
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('convertButton')
    .addEventListener('click', handleConversion);
});
