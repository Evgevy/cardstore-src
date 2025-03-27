const initAnotherPhone = () => {
    const phoneList = document.querySelector('.header__phone-list');
    const anotherPhone = document.querySelector('.header__another-phone');

    if (phoneList && anotherPhone) {
        const mediaQuery = window.matchMedia('(min-width: 1024px)'); // Создаем медиа-запрос

        const handleHover = () => { // Функция для обработки наведения мыши
            anotherPhone.classList.add('is-active');
            phoneList.classList.add('is-active');
        };

        const handleMouseLeave = () => { // Функция для обработки ухода мыши
            anotherPhone.classList.remove('is-active');
            phoneList.classList.remove('is-active');
        };

        const handleClick = () => { // Функция для обработки клика
            // Здесь ваш код для обработки клика (если он отличается от добавления классов)
            anotherPhone.classList.toggle('is-active'); // Пример: toggle класс при клике
            phoneList.classList.toggle('is-active');
        };

        const setupListeners = () => { // Функция для настройки слушателей
            if (mediaQuery.matches) { // Если разрешение больше или равно 1024px
                phoneList.addEventListener('mouseenter', handleHover);
                phoneList.addEventListener('mouseleave', handleMouseLeave);
                phoneList.removeEventListener('click', handleClick); // Удаляем слушатель клика, если был
            } else { // Если разрешение меньше 1024px
                phoneList.removeEventListener('mouseenter', handleHover);
                phoneList.removeEventListener('mouseleave', handleMouseLeave);
                phoneList.addEventListener('click', handleClick); // Добавляем слушатель клика
            }
        };

        setupListeners(); // Вызываем функцию для первоначальной настройки слушателей

        mediaQuery.addEventListener('change', setupListeners); // Добавляем слушатель для изменения медиа-запроса
    }
};

export { initAnotherPhone };