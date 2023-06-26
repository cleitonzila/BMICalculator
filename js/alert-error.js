export const AlertError = {
    element: document.querySelector('.error-alert'),
    close() {
        this.element.classList.remove("open")
    },
    open() {
        this.element.classList.add("open")
    },
    handleInput() {
        this.close()
    }
}

window.addEventListener('input', () => AlertError.handleInput())
