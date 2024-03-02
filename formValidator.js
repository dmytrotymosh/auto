document.addEventListener('DOMContentLoaded', () => {
const forms = document.querySelectorAll('.form__form');
forms.forEach(element => element.addEventListener('submit', (event) => {
    event.preventDefault();
    const self = event.currentTarget;
    const nameError = self.querySelector('.error-wrapper[error-message-name]');
    const phoneError = self.querySelector('.error-wrapper[error-message-phone]');
    const inputsNumber =  self.querySelectorAll('input').length;
    console.log(inputsNumber);
    self.querySelectorAll('input').forEach(input => {
        const inputAttribute = input.getAttribute('type');
        if(!input.value) {
            if(inputAttribute === 'text') {
                nameError.style.display = 'flex';
            }
            if(inputAttribute === 'tel') {
                phoneError.style.display = 'flex';
            }
        } 
        if(input.value) {
            if(inputAttribute === 'text') {
                if(input.value.length === 1) {
                    nameError.style.display = 'flex';
                } else {
                    nameError.style.display = 'none';
                }
            }
            if(inputAttribute === 'tel') {
                const inputMaxlengthAttribute = input.getAttribute('maxlength');
                if(inputMaxlengthAttribute == 13 || inputMaxlengthAttribute == 17) {
                    if(inputMaxlengthAttribute != input.value.length) {
                        phoneError.style.display = 'flex';
                    } else {
                        phoneError.style.display = 'none';
                    }
                } else {
                    phoneError.style.display = 'none';
                }
            }
        }
    });
        if(inputsNumber == 1) {
            if(phoneError.style.display == 'none') {
                self.submit();
            }
        } else {
            if(nameError.style.display == 'none' && phoneError.style.display == 'none') {
                self.submit();
            }
        }
    })); 
});