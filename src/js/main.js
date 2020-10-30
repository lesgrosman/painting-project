import modals from './modules/modals';
import filter from './modules/filter';
import sizePicture from './modules/sizePicture';
import slider from './modules/slider';
import forms from './modules/forms';
import validateInput from './modules/validateInput';
import setMask from './modules/mask';
import styles from './modules/styles';
import calc from './modules/calc';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {

    modals();
    filter('.portfolio-menu li', '.portfolio-block img', '.portfolio-wrapper');
    sizePicture('.sizes-block');
    slider('.main-slider-item');
    slider('.feedback-slider-item', '.main-prev-btn', '.main-next-btn', true);
    forms();
    validateInput('[name="name"]');
    validateInput('[name="message"]');
    setMask('[name="phone"]');
    styles('.button-styles', '#styles .row');
    calc('.calc-price', '.promocode');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
    drop();

});