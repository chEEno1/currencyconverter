export const calculateExchange = (base, callback) => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
        .then(res => res.json())
        .then(data => {callback(data)});
 }

