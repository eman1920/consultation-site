//loading screen 
$(window).on("load", function() {

    $(".loading-screen .spinner").fadeOut(1000, function() {
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(1000, function() {
            $(this).remove();


        });
    })
});



document.addEventListener("DOMContentLoaded", () => {


    //navbar change background on scroll
    var targetOffset;
    const scrollChange = () => {
        const navbar = document.querySelector(".navbar")
        if (window.outerWidth < 768) {
            targetOffset = 580
        } else {
            targetOffset = 400
        }
        if (window.pageYOffset >= targetOffset) {
            navbar.classList.add("scrolled")
        } else {
            navbar.classList.remove("scrolled")
        }
    }
    scrollChange();

    document.addEventListener("scroll", scrollChange)


    AOS.init({
        offset: 0,
        duration: 800,
        easing: 'ease-in-quad',
        delay: 100,
    });

    //menu spy
    var navList = document.getElementById("navbar-nav")
    var menuSpy = new MenuSpy(navList);

    //about us tab changes
    const tabs = document.querySelectorAll(".tab-heading");
    const tab_content = document.querySelectorAll(".tab-content");

    for (tab of tabs) {
        tab.addEventListener("click", (e) => {
            for (tab of tabs) { tab.classList.remove("active") }
            e.target.classList.add("active")
            let tab_id = e.target.getAttribute("id")
            console.log(tab_id)
            for (content of tab_content) {
                let data = content.getAttribute("data-content");
                if (tab_id === data) {
                    content.classList.add("active")
                } else {
                    content.classList.remove("active")
                }
            }
        })
    }

})