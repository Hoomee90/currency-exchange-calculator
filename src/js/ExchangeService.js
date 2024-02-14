export default class ExchangeService {
  
  static async call(currency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`);
      const jsonResponse = await response.json();
      if (response.status !== 200 || jsonResponse.result === `error`) {
        const errorMsg = `There was an error accessing the exchange rate data for currency '${currency}' \n ${response.status} ${jsonResponse[`error-type`]}`;
        throw new Error(errorMsg);
      }
      return jsonResponse;
    } catch (error) {
      return error;
    }
  } 
}