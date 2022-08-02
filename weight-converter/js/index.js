
const value = document.querySelector("#input-value");
const output = document.querySelector("#output-text-field");

/**
 * This function initiates the conversion process.
 */
const initConvert = () => {
    const inputValue = document.querySelector('#source-unit').value;
    const destinationValue = document.querySelector('#destination-unit').value;
    let value = document.querySelector("#input-value").value;

    output.value = convert(value, inputValue, destinationValue);
}

/**
 * This function perform the actual conversion
 * @param {*} source - String - Source unit
 * @param {*} destination - String - Destination unit 
 * @param {*} value - Number - The value to be converted
 * @returns Number - Destination value equivalent of the source unit 
 */
const convert = (value, source, destination) => {

    if (source === destination) return value;

    if (source === 'kg') {
        if (destination === 'gm') {
            return value * 1000;
        }
        if (destination === 'ml') {
            return value * 1000000
        }
    } else if (source === 'gm') {
        if (destination === 'kg') {
            return value / 1000
        }
        if (destination === 'ml') {
            return value * 1000
        }
    } else if (source === 'ml') {
        if (destination === 'kg') {
            return value * (1/1000000);
        }
        if (destination === 'gm') {
            return value / 1000;
       }
    }
}

/**
 * This function restrict all input values except numbers
 * @param {*} evt - Javascript input event
 * @returns Boolean 
 */
const isNumberKey = (evt) => {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

/**
 * This function switches the input unit values and perform 
 * the value conversion accordingly
 */
const switchFnx = () => {
    const inputField = document.querySelector('#source-unit');
    const destinationField = document.querySelector('#destination-unit');

    const source = inputField.value;
    const destination = destinationField.value;

    inputField.value = destination;
    destinationField.value = source;

    initConvert()
}