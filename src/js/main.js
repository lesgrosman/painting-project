import modals from './modules/modals';
import tabs from './modules/tabs';
import sizePicture from './modules/sizePicture';

window.addEventListener('DOMContentLoaded', () => {

    modals();
    tabs('.portfolio-menu li', '.portfolio-block img', '.portfolio-wrapper');
    sizePicture('.sizes-block');
});