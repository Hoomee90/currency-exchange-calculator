export default class ExchangeService {
  constructor() {
    this.rateObj = null;
  }
  
  static async call(currency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`);
      const jsonResponse = await response.json();
      if (response.status !== 200 || jsonResponse.result === `error`) {
        const errorMsg = `There was an error accessing the exchange rate data for currency '${currency}' ${response.status} ${jsonResponse[`error-type`]}`;
        throw new Error(errorMsg);
      }
      return jsonResponse;
    } catch (error) {
      return error;
    }
  }

  exchangeTo(into, amount) {
    return this.rateObj.conversion_rates[`${into}`] * amount
  }

  shouldCall(currency) {
    switch (true) {
      case !this.rateObj:
        return true;
      case !Object.hasOwn(this.rateObj, `base_code`):
        return true;
      case this.rateObj[`base_code`] !== currency:
        return true;
      case Date.now() >= this.rateObj[`time_next_update_utc`]:
        return true;
      default:
        return false;
    }
  }

  async get(currency) {
    if (this.shouldCall(currency)) {
      const callResult =  await ExchangeService.call(currency);
      if (!(callResult instanceof Error)) {
        this.rateObj = callResult;
      }
      return callResult;
    } else {
      return this.rateObj;
    }
  }
}