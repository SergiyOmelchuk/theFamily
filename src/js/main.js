export const HeaderJS = () => {

    window.addEventListener('scroll', function () {

        if (window.pageYOffset > 60) {
            document.getElementById("container_header").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("container_header").style.backgroundColor = "transparent";
            document.getElementById("header").style.top = "13px";
        }
    });
}

//
// window.addEventListener('scroll', function() {
//     if (pageYOffset > 100 ) {
//         document.getElementById("header").style.backgroundColor = "red";
//     }
// });
