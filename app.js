//toggle hidden class on P element in Ul of faqs

const accItem = document.querySelectorAll('.faq');
const accHeading = document.querySelectorAll('.faq-title');

// add event listener to the heading of each list item
for (i = 0; i < accHeading.length; i++) {

    accHeading[i].addEventListener('click', function () {
        //gets the class names on the parent of the clicked item i.e. the li item
        let itemClass = this.parentNode.className;
        //set all the list items to hidden. In css use ".hidden p" to access the para to hide
        for (j = 0; j < accItem.length; j++) {
            accItem[j].className = 'faq hidden';
        }
        //for the list item that was clicked on change the classes to "faq selected". In addition to removing ".hidden p", in css use ".selected .faq-title" to change the styling of the selected list item
        if (itemClass == 'faq hidden') {
            this.parentNode.className = 'faq selected';
        }
    })


}