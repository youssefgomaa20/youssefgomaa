let api = `https://v6.exchangerate-api.com/v6/258fcdd3329e15a4ec2e069b/latest/USD`;
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

//Create dropdown from the currencies array
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropDown.add(option);
});

//Repeat same thing for the other dropdown
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});

//Setting default values
fromDropDown.value = "USD";
toDropDown.value = "INR";

let convertCurrency = () => {
  //Create References
  const amount = document.querySelector("#amount").value;
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;

  //If amount input field is not empty
  if (amount.length != 0) {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExchangeRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
        result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
          2
        )} ${toCurrency}`;
      });
  } else {
    alert("Please fill in the amount");
  }
};

document
  .querySelector("#convert-button")
  .addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);














// fetch("https://api.currencyfreaks.com/latest?apikey=ADD_YOUR_KEY")
//   .then((result) => {
//     // console.log(result);
//     let myData = result.json();
//     // console.log(myData);
//     return myData;
//   })
//   .then((currency) => {
//     let amount = document.querySelector(".amount");
//     let egpPrice = document.querySelector(".egp span");
//     let sarPrice = document.querySelector(".sar span");

//     egpPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["EGP"]);
//     sarPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["SAR"]);

//     // console.log(currency.rates);
//     console.log(currency.rates["EGP"]);
//     console.log(currency.rates["SAR"]);
//   });
































