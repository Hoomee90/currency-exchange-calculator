# Currency Exchanger

#### By **Samantha Callie**

#### Convert USD into Canadian Dollars, Swiss Francs, Costa Rican Colons, Euros, South Korean Won

## Technologies Used

* HTML
* JS
* CSS
* Sass
* Webpack
* Bootstrap
* [ExchangeRate-API](https://app.exchangerate-api.com/)

## Description

This site allows users to enter an amount of USD into a form, and choose from one of Canadian Dollars, Swiss Francs, Costa Rican Colons, Euros, South Korean Won. They will then see the value of the inputted USD in the inputted currency, as according to the data from ExchangeRathe-API.

## Setup/Installation Requirements

* Press the green <> Code button and select Download ZIP
* Unzip file
* Navigate to the top level of the directory
* Once there, create a new file and title it .env
* Go to https://app.exchangerate-api.com/ and press the blue button title get Free Key
* Go through the account creation process, then copy your new API key on the dashboard
* In the `.env` file, type `API_KEY=` then paste your key such that the file contains nothing but `API_KEY=YOURKEYHERE`
* With npm installed, run `run npm i` on the command line
* After the dependencies are installed, run `npm run build`, navigate to the newly generated dist directory and open its `index.html` file in your browser
* Alternatively, you can run `npm run start` and open http://localhost:8080/ in your browser to locally serve it

## Known Bugs

* There are no known bugs at this time

## License

MIT License

Copyright (c) 20204 Samantha Callie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.