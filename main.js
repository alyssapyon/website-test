// COMMENT: PREVENT RIGHT CLICKING

// document.addEventListener('contextmenu', event => {
//     event.preventDefault();
// });

// document.querySelectorAll('.disabled').forEach(element => {
//     element.style.pointerEvents = 'none';
// });


// COMMENT: NAVBAR SHRINK ON SCROLL
// https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
const scrollchangepoint = 80
window.onscroll = function () { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > scrollchangepoint || document.documentElement.scrollTop > scrollchangepoint) {
        // document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("animated-logo").style.width = "0%";
        document.getElementById("animated-logo").style.transition = "0.7s ease";
    } else {
        // document.getElementById("navbar").style.padding = "80px 10px";
        document.getElementById("animated-logo").style.width = "100%";
        document.getElementById("animated-logo").style.transition = "0.7s ease";
    }
}

