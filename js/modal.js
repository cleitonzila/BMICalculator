export const Modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    buttonClose: document.querySelector("#close"),
    message: document.querySelector("h2"),

    close() {
        this.wrapper.classList.remove('open')
    },
    open() {
        this.wrapper.classList.add('open')
    },

    // Event handler for 'Escape' key press
    handleKeydown(event) {
        if(event.key === 'Escape') {
            this.close()
        }
    }
}

// Add event listeners
Modal.buttonClose.addEventListener("click", () => Modal.close())
window.addEventListener('keydown', (event) => Modal.handleKeydown(event))
