const initTab = () => {
    const tabButtons = document.querySelectorAll('.select__tab-btn');
    const tabPanels = document.querySelectorAll('.select__panel-item');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            
            tabButtons.forEach(btn => btn.classList.remove('select__tab-btn--active'));
            
            button.classList.add('select__tab-btn--active');

           
            const tabId = button.getAttribute('data-tab');

            
            tabPanels.forEach(panel => {
                panel.classList.remove('select__panel-item--active');
                if (panel.id === tabId) {
                    panel.classList.add('select__panel-item--active'); 
                }
            });
        });
    });
}

export{initTab};