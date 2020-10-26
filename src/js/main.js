import modals from './modules/modals';
import tabs from './modules/tabs';
import sizePicture from './modules/sizePicture';
import slider from './modules/slider';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {

    modals();
    tabs('.portfolio-menu li', '.portfolio-block img', '.portfolio-wrapper');
    sizePicture('.sizes-block');
    slider('.main-slider-item');
    slider('.feedback-slider-item', '.main-prev-btn', '.main-next-btn', true);
    forms();
});