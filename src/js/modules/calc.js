import {getResources} from '../services/services';

const  calc = (resultSelector) => {
    const resultSpace = document.querySelector(resultSelector),
          promocode = document.querySelector('.promocode');

    let res, size, material,
        options = 0;

    function checkPromocode() {
        if (promocode.value === 'IWANTPOPART' && (size && material)) {
            resultSpace.textContent = res - (res * 0.3) + ' UAH';  
        } else if (promocode.value !== 'IWANTPOPART' && (size && material)) {
            resultSpace.textContent = res + ' UAH';  
        } else {
            resultSpace.textContent = res;  
        }
    }

    function calculate() {
        if (!size || !material) {
            res = 'You need to choose size AND materials';
        } else if (size && material && !options) {
            res = size + material;
        } else {
            res = size + material + options;
        }
        checkPromocode();
    }

    promocode.addEventListener('input', () => {
        checkPromocode();       
    });

    function readDataFromInputs(selector) {
        const prop = document.querySelector(selector);

        prop.addEventListener('change', () => {
            switch(prop.getAttribute('id')) {
                case 'size': 
                    getResources('http://localhost:3000/prices/size')
                        .then(data => {
                            size = parseInt(data[prop.value]);
                            calculate();
                        });
                    break;
                case 'material':
                    getResources('http://localhost:3000/prices/material')
                        .then(data => {
                            material = parseInt(data[prop.value]);
                            calculate();
                        });
                    break;
                case 'options':
                    getResources('http://localhost:3000/prices/options')
                        .then(data => {
                            options = parseInt(data[prop.value]);
                            calculate();
                        });
                    break;
            }
        });
    }
    readDataFromInputs('#size');
    readDataFromInputs('#material');
    readDataFromInputs('#options');
};

export default calc;