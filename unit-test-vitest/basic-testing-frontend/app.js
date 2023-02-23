import { calculateResult } from './src/math.js';
import { generateResultText, outputResult } from './src/output.js';
import { extractEnteredNumberValues } from './src/parser.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValues(form);

  let result = calculateResult(numberValues);
  
  let resultText = generateResultText(result);

  outputResult(resultText)
}

form.addEventListener('submit', formSubmitHandler);
