export default class ExchangeService {
  constructor() {

  }
  
  shouldCall() {

    switch (true) {
      case !(`rateObj` in this):
        return true;
      case this.rateObj:
        return true;
      case Date.now() >= this.rateObj[`time_next_update_utc`]:
        return true;
      default:
        return false;
    }
  }

  async call(currency) {
    this.rateObj = null;
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`);
      const jsonResponse = await response.json();
      if (response.status !== 200 || jsonResponse.result === `error`) {
        const errorMsg = `There was an error accessing the exchange rate data for currency '${currency}' \n ${response.status} ${jsonResponse[`error-type`]}`;
        throw new Error(errorMsg);
      }
      this.rateObj = jsonResponse;
      return jsonResponse;
    } catch (error) {
      return error;
    }
  }

  async get(currency) {
    if (this.shouldCall()) {
      return await this.call(currency);
    } else {
      return this.rateObj;
    }
  }
}