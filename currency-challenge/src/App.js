import "./App.css";
import { useState, useEffect } from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

function App() {
  const [currencyInput, setCurrencyInput] = useState("100");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [currencyOutput, setCurrencyOutput] = useState("");

  function handleCurrencyInput(e) {
    setCurrencyInput(e.target.value);
  }

  function handleFromCurrency(e) {
    setFromCurrency(e.target.value);
  }

  function handleToCurrency(e) {
    setToCurrency(e.target.value);
  }

  useEffect(
    function () {
      async function convertCurrency() {
        const currencyUrl = `https://api.frankfurter.app/latest?amount=${currencyInput}&from=${fromCurrency}&to=${toCurrency}`;
        const res = await fetch(currencyUrl);
        const data = await res.json();
        setCurrencyOutput(data.rates[toCurrency]);
        console.log(data);
      }
      convertCurrency();
    },
    [currencyInput, fromCurrency, toCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={currencyInput}
        onChange={(e) => handleCurrencyInput(e)}
      />
      <select value={fromCurrency} onChange={(e) => handleFromCurrency(e)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select selected={toCurrency} onChange={(e) => handleToCurrency(e)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{currencyOutput}</p>
    </div>
  );
}

export default App;
