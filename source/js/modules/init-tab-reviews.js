const initTabReviews = () => {
    const tabButtons = document.querySelectorAll('.reviews__tab-btn');
    const tabPanels = document.querySelectorAll('.reviews__panel-item');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            
            tabButtons.forEach(btn => btn.classList.remove('reviews__tab-btn--active'));
            
            button.classList.add('reviews__tab-btn--active');

           
            const tabId = button.getAttribute('data-tab');

            
            tabPanels.forEach(panel => {
                panel.classList.remove('reviews__panel-item--active');
                if (panel.id === tabId) {
                    panel.classList.add('reviews__panel-item--active'); 
                }
            });
        });
    });

}

export{initTabReviews};