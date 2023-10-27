$(function() {
  $("#allheader").load("https://test.kappas.work/htmlparts/allheader.html");
  $("footer").load("https://test.kappas.work/htmlparts/footer.html");
  $.getScript("https://test.kappas.work/js/main.js", function() {
  });
});
