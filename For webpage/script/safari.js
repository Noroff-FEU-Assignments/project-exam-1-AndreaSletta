// Changes the vertical height of the element (mainly issue on safari phone)

let height = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${height}px`);

// smooth scroll that also works on safari

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
