import './scss/styles.scss';
import * as bootstrap from 'bootstrap';
import ExchangeService from "./js/ExchangeService";

async function handleSearch(e) {
  e.preventDefault();
  const button = document.querySelector(`#search-submit`);
  button.setAttribute(`disabled`, ``);
  
  try {
    const currencyInput = document.querySelector(`#currency-dropdown input:checked`);
    const numberInput = document.querySelector(`#dollar-input`).value;

    // this is bad use of try and catch, but it doesn't really matter
    if(!currencyInput || Math.sign(numberInput) !== 1) {
      throw new Error(`Please correctly fill out all fields of the form`);
    }
    const exchange = await exchangeServiceObj.get(`USD`);
    if (exchange instanceof Error) {
      throw exchange;
    } else if (!Object.hasOwn(exchange.conversion_rates, currencyInput.value)) {
      throw new Error (`The selected currency is (somehow) not present in the exchange rate data`);
    }
    const result = exchangeServiceObj.exchangeTo(currencyInput.value, numberInput)
    displayResult(numberInput, result, currencyInput.nextElementSibling.innerText);
  } catch(error) {
    handleError(error);
  }
  button.removeAttribute(`disabled`, ``);
}

function handleError(error) {
  const display = document.querySelector(`#display`);
  display.innerText = error.message;
  display.classList.remove(`d-none`);
}

function displayResult(input, result, currency) {
  const display = document.querySelector(`#display`);
  result = result.toFixed(2)
  display.innerText = `${input} US ${input === `1` ? `dollar` : `dollars`} is equal to ${result} ${result === `1` && /s$/.test(currency) ? currency.slice(0, -1) : currency}`;
  display.classList.remove(`d-none`);
}

window.addEventListener(`load`, () => {
  document.querySelector(`#search`).addEventListener(`submit`, handleSearch);
})

let exchangeServiceObj = new ExchangeService();