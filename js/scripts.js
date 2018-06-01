$(document).ready(function(){
  //front end
  $("#date").submit(function(event){
    var one = parseInt($("input:radio[name=oneChoice]:checked").val());
    var two = parseInt($("input:radio[name=twoChoice]:checked").val());
    var three = parseInt($("input:radio[name=threeChoice]:checked").val());
    var four = parseInt($("input:radio[name=fourChoice]:checked").val());
    var five = parseInt($("input:radio[name=fiveChoice]:checked").val());
    var result = one + two + three + four + five;

    if (match <= 25) {
      $("#ones-showing").show()
    } else if (match <= 50) {
      $("#twos-showing").show()
    } else if (match <= 75) {
      $("#threes-showing").show()
    } else {
      $("#fours-showing").show()
    }

    event.preventDefault();
  });
});
