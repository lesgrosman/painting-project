const validateInput = (selector) => {
    const inputs = document.querySelectorAll(selector);

    inputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^a-z0-9]/ig, '');
        });
    });
};

export default validateInput;