export function calculateBMI(weight, height) {
    return(((weight/(height**2))*10000).toFixed(1))
}

export function isInputInvalid(value) {
    return (isNaN(value) || value == '')
}