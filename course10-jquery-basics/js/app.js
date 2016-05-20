//Problem: Hints are shown even when form is valid
//Solution: Hide and show hints at appropriate times

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide Hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8
}

function doPasswordsMatch() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && doPasswordsMatch();
}

function passwordEvent() {
  //Find out if password is valid
  if(isPasswordValid()) {
    //Hide hint if valid
    $password.next().hide();
  } else {
    //Show hint
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(doPasswordsMatch()) {
    //Hide hint if matched
    $confirmPassword.next().hide();
   } else {
    //Else show hint
    $confirmPassword.next().show();
   }
}

function enableSubmitEvent() {
  $("input[type=submit]").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();  