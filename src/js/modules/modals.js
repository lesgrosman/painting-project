
function modals() {

    function showModal(modalSelector, btn) {
        const modal = document.querySelector(modalSelector);

        if (btn.nodeName === 'IMG') {
            btn.style.display = 'none';
        }
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';       
    }

    function hideModal(modalSelector, btn) {
        const modal = document.querySelector(modalSelector);

        if (btn.nodeName === 'IMG') {
            btn.style.display = 'block';
        } 
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    function bindModal(openSelector, modalSelector, closeSelector) {
        const openModal = document.querySelectorAll(openSelector),
              modal = document.querySelector(modalSelector),
              closeModal = document.querySelector(closeSelector);

        openModal.forEach(btn => {
            btn.addEventListener('click', () => {
                showModal(modalSelector, btn);

                closeModal.addEventListener('click', () => {
                    hideModal(modalSelector, btn);
                });

                window.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        hideModal(modalSelector, btn);
                    }
                });
            });     
        });
    }
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close');
}

export default modals;