//Pizza image shifts

$(document).ready(function() {
  $("#Pizza").click(function() {
    
    $("img").animate({right: '300px'}, "slow",function() {
    $("img").animate({right: '0px'}, "slow");
    });
  });
});
