$(document).ready(function() {
  var animal = prompt("Lion, tiger, bear - what's your favorite?")

  if (animal === "lion") {
    $("#lion").show();
  } else if (animal === "tiger")
    $("#tiger").show();
   else if (animal === "bear")
      $("#bear").show();
    else
       prompt("Lion, tiger, bear - what's your favorite?")
});
