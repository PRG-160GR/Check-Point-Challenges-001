var name = windows.prompt("Please enter your name:")
var ageCheck = window.prompt (Please enter your age)

if (ageCheck < 21) {

      window.alert("You submited that you are :" + ageCheck +": years old, " + name + ".");
      window.alert("You must be at least 21 years old to drink in the state of PA");
}

    else if (ageCheck > 21 && ageCheck < 101) {

      window.alert("You are old enough to drink in PA");
      window.alert("Welcome " + name + "!");
    }

else {
      window.alert("You best not be lying about your age, " + name + ".");

}
