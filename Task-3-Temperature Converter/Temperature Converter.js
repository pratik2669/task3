const convertToDegree = (option, value) => {
    if (option === 'Fahrenheit')
        return ((value - 32) * 0.56).toPrecision(4);

    return (value - 273.15).toPrecision(4);
}

const convertToFahrenheit = (option, value) => {
    if (option === 'Degree')
        return ((value * 1.8) + 32).toPrecision(4);

    return ((value - 273.15) * 1.8 + 32).toPrecision(4);
}

const convertToKelvin = (option, value) => {
    if (option === 'Kelvin')
        return (value + 273.15).toPrecision(4);

    return ((value - 32) * 0.56 + 273.15).toPrecision(4);
}

const getResult = () => {
    let temperature = parseFloat(document.getElementById('temp1').value);
    let option1 = document.getElementById('option1').value;
    let option2 = document.getElementById('option2').value;

    if (option1 === option2) {
        document.getElementById('temp2').value = temperature;

    } else {
        if (option2 === 'Fahrenheit') {
            document.getElementById('temp2').value = convertToFahrenheit(option1, temperature);

        } else if (option2 === 'Degree') {
            document.getElementById('temp2').value = convertToDegree(option1, temperature);

        } else {
            document.getElementById('temp2').value = convertToKelvin(option1, temperature);

        }
        
    }
}