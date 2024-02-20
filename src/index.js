import './scss/styles.scss';
import * as bootstrap from 'bootstrap';
import ExchangeService from "./js/ExchangeService";

async function handleSearch(e) {
  e.preventDefault();

  const button = e.target.querySelector(`#search-submit`);
  button.setAttribute(`disabled`, ``);
  const exchange = await exchangeServiceObj.get(`USD`);
  const display = document.querySelector(`#display`);

  button.removeAttribute(`disabled`, ``);
  display.classList.remove(`d-none`);
  console.log(exchange);
}


window.addEventListener(`load`, () => {
  document.querySelector(`#search`).addEventListener(`submit`, handleSearch);
})

let exchangeServiceObj = new ExchangeService();