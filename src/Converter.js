import React from "react";
import FirstPopup from "./FirstVisitMessage"
import Button from 'react-bootstrap/Button';
import './converter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { calculateExchange } from "./ExchangeUtils"

class Converter extends React.Component {
  state = {
    currencies: ["USD", "AUD", "SGD", "HRK", "EUR"],
    base: "EUR",
    amount: "",
    convertTo: "HRK",
    result: "",
    date: ""
  };

  handleSelect = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleInput = e => {
    this.setState(
      {
        amount: e.target.value,
        result: null,
        date: null
      },
      this.calculate
    );
  };

  calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      calculateExchange(this.state.base, (data)=>{
          const date = data.date;
          const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
          this.setState({
            result,
            date
          });
      });
    }
  };

  handleSwap = e => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    e.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null
      },
      this.calculate
    );
  };
  
  render() {
    const { currencies, base, amount, convertTo, result, date } = this.state;
    return (

      <div className="container my-5"  style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card card-body">
              <h5>
                {amount} {base} je jednako
              </h5>
              <h2>
                {amount === ""
                  ? "0"
                  : result === null
                  ? "Računam..."
                  : result}{" "}
                {convertTo}
              </h2>
              <div className="row">
                <div className="col-lg-10">
                  <form className="form-inline mb-4">
                    <input
                      type="number"
                      value={amount}
                      onChange={this.handleInput}
                      className="form-control form-control-lg mx-3"
                    />
                    <select
                      name="base"
                      value={base}
                      onChange={this.handleSelect}
                      className="form-control form-control-lg"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>

                  <form className="form-inline mb-4">
                    <input
                      disabled={true}
                      value={
                        amount === ""
                          ? "0"
                          : result === null
                          ? "Računam..."
                          : result
                      }
                      className="form-control form-control-lg mx-3"
                    />
                    <select
                      name="convertTo"
                      value={convertTo}
                      onChange={this.handleSelect}
                      className="form-control form-control-lg"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
                <div>
                <Button className="k-button" block onClick={this.handleSwap}>Zamijeni Valute</Button>
                </div>
                
              </div>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Converter;
