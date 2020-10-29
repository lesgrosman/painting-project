import {getResources} from '../services/services';

const  calc = (resultSelector, promocodeSelector) => {
    const resultSpace = document.querySelector(resultSelector),
          promocode = document.querySelector(promocodeSelector);

    let res, size, material,
        options = 0;

    function checkPromocode() {
        if (promocode.value === 'IWANTPOPART' && (size && material)) {
            resultSpace.textContent = res * 0.7 + ' UAH';  
        } else if (promocode.value !== 'IWANTPOPART' && (size && material)) {
            resultSpace.textContent = res + ' UAH';  
        } else {
            resultSpace.textContent = res;  
        }
    }

    function calculate() {
        if (!size || !material) {
            res = 'You need to choose size AND materials';
        } else if (!options) {
            res = size + material;
        } else {
            res = size + material + options;
        }
        checkPromocode();
    }

    promocode.addEventListener('input', checkPromocode);

    function readDataFromInputs(selector) {
        const prop = document.querySelector(selector);

        prop.addEventListener('change', () => {
            switch(prop.getAttribute('id')) {
                case 'size': 
                    getResources('http://localhost:3000/prices/size')
                        .then(data => {
                            size = parseInt(data[prop.value]);
                            calculate();
                        })
                        .catch(error => alert('Please, start JSON server'));
                    break;
                case 'material':
                    getResources('http://localhost:3000/prices/material')
                        .then(data => {
                            material = parseInt(data[prop.value]);
                            calculate();
                        })
                        .catch(error => alert('Please, start JSON server'));
                    break;
                case 'options':
                    getResources('http://localhost:3000/prices/options')
                        .then(data => {
                            options = parseInt(data[prop.value]);
                            calculate();
                        })
                        .catch(error => alert('Please, start JSON server'));
                    break;
            }
        });
    }
    readDataFromInputs('#size');
    readDataFromInputs('#material');
    readDataFromInputs('#options');
};

export default calc;