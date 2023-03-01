// JS

let addToBasket = document.getElementsByClassName("main__container__list__item__link");
const getBasketCount = document.getElementById('itemCount');

addToBasket = Array.from(addToBasket);

let totalPrice = 0;

addToBasket.forEach(e => e.addEventListener('click', function (e) {
    e.preventDefault();
    totalPrice += parseInt(e.target.dataset['price'])
    if (totalPrice > 0) {
        getBasketCount.classList.remove('hidden');
        let str = getBasketCount.innerHTML
        str = str.split(' ')
        getBasketCount.innerHTML = totalPrice + ' ' + str[1];
    }

    console.log(totalPrice);
}));



