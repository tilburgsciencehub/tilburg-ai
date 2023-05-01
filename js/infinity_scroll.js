var windowHeight = window.innerHeight;

var myElement = document.getElementById('my-element');

var nestedDivs = myElement.querySelectorAll('#infinity_scroll_item_row');

nestedDivs[0].style.display = 'flex'

$(window).scroll(function () {
    for (var i = 0; i < nestedDivs.length; i++) {

        if (nestedDivs[i].style.display === 'flex'  && nestedDivs[i].getBoundingClientRect().top < windowHeight) {
            var nextDiv = i + 1
            nestedDivs[nextDiv].style.display = 'flex'
            console.log('Element is within the visible portion of the window');
        } else {
            console.log('Element is not within the visible portion of the window');
        }
    }
})