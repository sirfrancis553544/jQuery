$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

$("button").on("click", function () {
  $("h1").toggle();
});

$("button").on("click", function () {
  $("h2").fadeOut();
  $("h2").fadeIn(30000);
});
