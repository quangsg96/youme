function openFunc() {
  document.getElementById("container__navi").style.left = "0%";
}
function closeFunc() {
  document.getElementById("container__navi").style.left = "-100%";
}
$(document).ready(function () {
  $("#open-close").click(function () {
    $("#menu-child").slideToggle();
  });
});
