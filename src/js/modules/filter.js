function filter(tabSelector, tabContentSelector, tabContainerSelector) {
    const tabs = document.querySelectorAll(tabSelector),
          tabContent = document.querySelectorAll(tabContentSelector),
          tabContainer = document.querySelector(tabContainerSelector),
          noPortfolio = document.querySelector('.portfolio-no');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {

            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            tab.classList.add('active');

            tabContent.forEach(content => {
                const parent = content.parentElement;
                content.style.display = 'none';
                content.classList.remove('animated', 'fadeIn');

                if (tab.classList.contains('grandmother') || tab.classList.contains('granddad')){
                    noPortfolio.style.display = 'block';
                    noPortfolio.classList.add('animated', 'fadeIn');
                } else if (parent.classList.contains(tab.className.split(' ')[0])) {
                    content.classList.add('animated', 'fadeIn');
                    content.style.display = 'block';
                    tabContainer.prepend(parent);
                    noPortfolio.style.display = 'none';
                    noPortfolio.classList.remove('animated', 'fadeIn');
                } 
            });          
        });      
    });
}

export default filter;