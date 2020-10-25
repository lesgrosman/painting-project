import modals from './modules/modals';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {

    modals();
    tabs('.portfolio-menu li', '.portfolio-block img', '.portfolio-wrapper');
});