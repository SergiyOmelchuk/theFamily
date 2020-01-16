export const BackgroundRed = () => {

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
            document.getElementById("header").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.backgroundColor = "transparent";
            document.getElementById("header").style.top = "23px";
        }
    });
}

//
// window.addEventListener('scroll', function() {
//     if (pageYOffset > 100 ) {
//         document.getElementById("header").style.backgroundColor = "red";
//     }
// });
