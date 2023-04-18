

const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
    items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
    });

    el.classList.add('is-active');
}

items.forEach((item, index) => {
    item.addEventListener('click', e => { handleIndicator(e.target); });
    if (item.classList.contains("is-active") && handleIndicator(item)) {
        item.classList.add(!"is-active");
    }
});