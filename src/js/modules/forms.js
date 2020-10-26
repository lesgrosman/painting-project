import postData from '../services/services';
import {hideModal, showModal} from './modals';

function forms() {
    const forms = document.querySelectorAll('form');

    const messages = {
        success: "Thank you, we'll call you back!",
        loading: "Loading...",
        failure: "Something goes wrong..."
    };

    function showThanksModal(message) {
        const prevModal = document.querySelector('.shown');

        if (prevModal) {
            hideModal('.shown');
        }

        const modalDialog = document.querySelector('.popup-gift .popup-dialog');
        modalDialog.classList.add('hide');
        showModal('.popup-gift');

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('popup-dialog');
        thanksModal.innerHTML = `
            <div class=popup-content>
                <button class=popup-close>&times;</button>
                <h2>${message}</h2>
            </div>
        `;
        document.querySelector('.popup-gift').append(thanksModal);
        
        setTimeout(() => {
            hideModal('.popup-gift');
            modalDialog.classList.remove('hide');
            thanksModal.remove();
        }, 2000);
    }

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = messages.loading;
            form.appendChild(statusMessage);

            const formData = new FormData(form);
            const obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            const json = JSON.stringify(obj);

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    // statusMessage.textContent = messages.success;
                    showThanksModal(messages.success);
                    form.reset();
                })
                .catch(() => {
                    // statusMessage.textContent = messages.failure
                    showThanksModal(messages.failure);
                })
                .finally(() => {
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                });

        });
    });
}
export default forms;