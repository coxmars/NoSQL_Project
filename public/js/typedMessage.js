// This is for typed js library
if ($(".text-slider").length == 1) {
    var typed_strings =
    $(".text-slider-items").text();
    var typed = new Typed(".text-slider", {
        strings: typed_strings.split(","),
        typeSpeed: 50,
        loop: true,
        backDelay: 2000,
        backSpeed: 50,
    });
}
      