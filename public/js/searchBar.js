var searchUsers = function() {
  var matches = 0;
  var usernameSearch = document.getElementsByClassName("search-input")[0].value;
  var userList = document.getElementsByClassName("username");
  for (var i = 0; i < userList.length; i++) {
    userList[i].style.backgroundColor = "white"
    var username = userList[i].getAttribute("data-username");
    console.log('username:', username);
    if (usernameSearch === username) {
      matches++;
      userList[i].style.backgroundColor = "yellow";
    }
  }

  if (matches === 0) {
    document.getElementsByClassName("search-results")[0].innerHTML = "No Matches Found!"
  } else {
    document.getElementsByClassName("search-results")[0].innerHTML = matches + " Matches Found!"
  }
}

