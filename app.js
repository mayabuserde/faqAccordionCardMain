//toggle hidden class on P element in Ul of faqs

const ul = document.querySelector('.faqs');

ul.addEventListener('click', function (e) {

    if (e.target.nodeName === 'H2') {
        e.target.classList.toggle('selected');
        e.target.nextElementSibling.classList.toggle('hidden');
    }
})