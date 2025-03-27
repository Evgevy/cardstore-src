const initTabBlog = () => {
    const tabButtons = document.querySelectorAll('.blog__tab-btn');
    const tabPanels = document.querySelectorAll('.blog__panel-item');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            
            tabButtons.forEach(btn => btn.classList.remove('blog__tab-btn--active'));
            
            button.classList.add('blog__tab-btn--active');

           
            const tabId = button.getAttribute('data-tab');

            
            tabPanels.forEach(panel => {
                panel.classList.remove('blog__panel-item--active');
                if (panel.id === tabId) {
                    panel.classList.add('blog__panel-item--active'); 
                }
            });
        });
    });

}

export{initTabBlog};