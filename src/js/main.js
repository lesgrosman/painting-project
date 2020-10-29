import modals from './modules/modals';
import tabs from './modules/tabs';
import sizePicture from './modules/sizePicture';
import slider from './modules/slider';
import forms from './modules/forms';
import validateInput from './modules/validateInput';
import setMask from './modules/mask';
import styles from './modules/styles';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {

    modals();
    tabs('.portfolio-menu li', '.portfolio-block img', '.portfolio-wrapper');
    sizePicture('.sizes-block');
    slider('.main-slider-item');
    slider('.feedback-slider-item', '.main-prev-btn', '.main-next-btn', true);
    forms();
    validateInput('[name="name"]');
    validateInput('[name="message"]');
    setMask('[name="phone"]');
    styles('.button-styles', '#styles .row');
    calc('.calc-price');

});