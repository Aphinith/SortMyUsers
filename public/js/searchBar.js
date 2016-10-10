//function to handle onsubmit calls from search bar
var searchUsers = function() {
  //count number of matches in search
  var matches = 0;
  //capture value of text entered in search bar
  var usernameSearch = document.getElementsByClassName("search-input")[0].value.toLowerCase();
  //get list of usernames to compare search
  var userList = document.getElementsByClassName("username");
  for (var i = 0; i < userList.length; i++) {
    //keep background color consistent upon function call
    userList[i].style.backgroundColor = "azure"
    //iterate through list of names to compare searched name
    var username = userList[i].getAttribute("data-username");
    //if there is a match, increment matches and highlight name on dom
    if (usernameSearch === username.toLowerCase()) {
      matches++;
      userList[i].style.backgroundColor = "yellow";
    }
  }

  //show number of matches
  if (matches === 0) {
    document.getElementsByClassName("search-results")[0].innerHTML = "No Matches Found!"
  } else {
    document.getElementsByClassName("search-results")[0].innerHTML = matches + " Matches Found!"
  }
}

