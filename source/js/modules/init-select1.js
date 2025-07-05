const initSelect1 = () => {
    const tabButtons = document.querySelectorAll('.select1__tab-btn');
    const tabPanels = document.querySelectorAll('.select1__panel-item');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            
            tabButtons.forEach(btn => btn.classList.remove('select1__tab-btn--active'));
            
            button.classList.add('select1__tab-btn--active');

           
            const tabId = button.getAttribute('data-tab');

            
            tabPanels.forEach(panel => {
                panel.classList.remove('select1__panel-item--active');
                if (panel.id === tabId) {
                    panel.classList.add('select1__panel-item--active'); 
                }
            });
        });
    });

}

export{initSelect1};