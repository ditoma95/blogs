$(document).ready(function() {
    $(".filter-item").click(function(e) {
        e.preventDefault();
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".cardim").show("1000");
        }else{
            $(".cardim").not("." + value).hide("1000");

            $(".cardim").filter("." + value).show("1000");
        }
    });
    //active
    $(".filter-item").click(function(e) {
        e.preventDefault();
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });

    //header
    // let header = document.querySelector("header");
    // window.addEventListener("scroll", ()=>{
    //     header.classList.toggle("shadow",window.scrollY > 0);
    // })

    //agrendissement du textes
    $("#range-slider").on("input change", function() {
        $(".text").css("font-size", $(this).val() + "px");

        $(".value").text($(this).val() + "px");
    });


    // sombre mode
    $("#toggle-btn").click(function() {

        $("body").toggleClass("change-background");
        $(this).css("border", "1px solid #f5f5f5");

        $("span").text(
            $("span").text() == "Light Mode" ? "Dark Mode" : "Light Mode"
        );
    });
    $("#toggle-btn").click(function() {
        $(this).find("i").toggleClass("fa-moon fa-sun");
    })

});