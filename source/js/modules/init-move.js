const headerTop = document.querySelector('.header__top');
const headerCenter = document.querySelector('.header__center');
const headerBottom = document.querySelector('.header__bottom');
const headerSearch = headerCenter.querySelector('.header__search');
const headerCenterBox = headerCenter.querySelector('.header__center-box');

const originalHeaderTop = headerTop.cloneNode(true);
const originalHeaderSearch = headerSearch.cloneNode(true);
const originalHeaderCenterBox = headerCenterBox.cloneNode(true);

const initMoveHeaderElements = () => {
    if (window.innerWidth <= 1022) {
        if (!headerBottom.contains(headerTop)) {
            headerBottom.appendChild(headerTop);
        }
        if (!headerBottom.contains(headerSearch)) {
            headerBottom.appendChild(headerSearch);
        }
        if (!headerBottom.contains(headerCenterBox)) {
            headerBottom.appendChild(headerCenterBox);
        }
    } else {
        
        if (headerBottom.contains(headerTop)) {
            headerBottom.removeChild(headerTop);
            headerCenter.appendChild(originalHeaderTop);
        }
        if (headerBottom.contains(headerSearch)) {
            headerBottom.removeChild(headerSearch);
            headerCenter.appendChild(originalHeaderSearch);
        }
        if (headerBottom.contains(headerCenterBox)) {
            headerBottom.removeChild(headerCenterBox);
            headerCenter.appendChild(originalHeaderCenterBox);
        }
    }
};


initMoveHeaderElements();


window.addEventListener('resize', initMoveHeaderElements);

export { initMoveHeaderElements };