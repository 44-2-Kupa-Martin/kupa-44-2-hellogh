function convert() {
    let fahrenheit = parseFloat(document.getElementById('tf').value);
    let celsius = ((fahrenheit - 32) * (5/9)).toFixed(2);
    let kelvin = ((fahrenheit - 32) * (5/9) + 273.15).toFixed(2);
    document.getElementById('tc').innerHTML = celsius;
    document.getElementById('tk').innerHTML = kelvin;
}