import {getResources} from '../services/services';

function styles(trigerSelector, parentSelector) {

    const triger = document.querySelector(trigerSelector);

    function addStyle(data) {
        data.forEach(item => {
            const parent = document.querySelector(parentSelector);

            const styleExample = document.createElement('div');
            styleExample.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            styleExample.classList.add("animated", "fadeInUp"); 

            styleExample.innerHTML = `
                <div class=styles-block>
                    <img src=${item.src} alt>
                    <h4>${item.title}</h4>
                    <a href=${item.link}>More details</a>
                </div>
            `;
            parent.append(styleExample);
        });
        triger.style.display = 'none';
    }

    triger.addEventListener('click', () => {
        getResources('http://localhost:3000/styles')
        .then(data => addStyle(data))
        .catch(error => console.log(error));

        
    });
}

export default styles;