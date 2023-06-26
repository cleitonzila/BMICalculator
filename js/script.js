import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateBMI, isInputInvalid } from './utils.js'

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = handleSubmit

// Handles the form submission
function handleSubmit(e) {
    e.preventDefault()

    const height = inputHeight.value
    const weight = inputWeight.value
    // Check if the input is invalid
    const isInvalidInput = (isInputInvalid(height) || isInputInvalid(weight))

    if (isInvalidInput) {
        // If input is invalid, open the error alert
        AlertError.open()
    } else {
        // If input is valid, calculate BMI and display the result in the modal
        const bmi = calculateBMI(weight, height)
        Modal.message.innerText = `Your BMI is ${bmi}`
        Modal.open()
        // Close the error alert
        AlertError.close()
    }
}
