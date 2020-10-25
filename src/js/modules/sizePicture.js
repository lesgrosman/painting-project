function sizePicture(blockSelector) {
    const blocks = document.querySelectorAll(blockSelector);

    function showImg(block) {
        const image = block.querySelector('img'),
              textBlock = block.querySelectorAll('p:not(.sizes-hit)');

        image.src = image.src.replace('.png', '-1.png');
        textBlock.forEach(item => {
                item.style.display = 'none';            
        });
    }

    function hideImg(block) {
        const image = block.querySelector('img'),
              textBlock = block.querySelectorAll('p:not(.sizes-hit)');
              
        image.src = image.src.replace('-1.png', '.png');
        textBlock.forEach(item => {
                item.style.display = 'block';               
        });
    }
    
    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });

        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
}

export default sizePicture;