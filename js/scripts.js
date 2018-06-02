$(document).ready(function(){
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("#quiz").submit(function(event){
    var name = $("input#nameInput").val();
    var one = parseInt($("input:radio[name=oneChoice]:checked").val());
    var two = parseInt($("input:radio[name=twoChoice]:checked").val());
    var three = parseInt($("input:radio[name=threeChoice]:checked").val());
    var four = parseInt($("input:radio[name=fourChoice]:checked").val());
    var five = parseInt($("input:radio[name=fiveChoice]:checked").val());
    var result = one + two + three + four + five;
    debugger;
      $(".nameConfirm").text(name);
    if (result <= 25) {
      $("#ones-showing").show()
      $("#twos-showing").hide()
      $("#threes-showing").hide()
      $("#fours-showing").hide()
    } else if (result <= 50) {
      $("#twos-showing").show()
      $("#ones-showing").hide()
      $("#threes-showing").hide()
      $("#fours-showing").hide()
    } else if (result <= 75) {
      $("#threes-showing").show()
      $("#twos-showing").hide()
      $("#ones-showing").hide()
      $("#fours-showing").hide()
    } else {
      $("#fours-showing").show()
      $("#twos-showing").hide()
      $("#threes-showing").hide()
      $("#ones-showing").hide()
    }
    event.preventDefault();
  });
});
