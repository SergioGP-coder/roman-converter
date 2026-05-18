function handleConversion() {
  // Retrieve the selected conversion mode (either 'intToRoman' or 'romanToInt').
  const mode = document.getElementById('conversionMode').value;

  // Get the user input from the input field.
  const input = document.getElementById('inputValue').value.trim();

  // Get references to the result and error display elements.
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');

  // Clear any previous result or error messages.
  resultDiv.textContent = '';
  errorDiv.textContent = '';

  try {
    if (mode === 'intToRoman') {

      // Attempt to parse the input as an integer.
      const num = parseInt(input, 10);

      if (isNaN(num)) {
        throw new Error('Please enter a valid integer number.');
      }

      // Convert the integer to a Roman numeral.
      const roman = integerToRoman(num);

      resultDiv.textContent = `Roman Numeral: ${roman}`;

      // Google Analytics event
      gtag('event', 'conversion', {
        conversion_type: mode
      });

    } else if (mode === 'romanToInt') {

      // Convert the Roman numeral to an integer.
      const num = romanToInteger(input);

      resultDiv.textContent = `Integer: ${num}`;

      // Google Analytics event
      gtag('event', 'conversion', {
        conversion_type: mode
      });
    }

  } catch (error) {

    // Display any error messages encountered during conversion.
    errorDiv.textContent = error.message;

    // Google Analytics error event
    gtag('event', 'error', {
      message: error.message
    });
  }
}
