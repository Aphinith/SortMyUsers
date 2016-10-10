/***********************************************************************************
Lines 5 - 34: for handling on-click event handler for selecting user from list
************************************************************************************/

var selectedUser = function(e) {
  var userId = e.target.getAttribute("data-id");
  var user = finalSortedUserList[userId - 1];
  //clear the UL tag
  var ul = document.getElementsByClassName("single-user-info")[0];
  ul.innerHTML = '';

  //create variable to target div tag to insert pic
  var div = document.getElementsByClassName("single-user-pic")[0];
  div.innerHTML = '';
  //create all tags
  var imgPic = document.createElement("IMG");
  var liUsername = document.createElement("li");
  var liId = document.createElement("li");
  var liBook = document.createElement("li");
  var liQuote = document.createElement("li");
  //create text for list items
  imgPic.setAttribute("src", "styles/assets/" + user['pic'] + '.jpeg')
  liUsername.appendChild(document.createTextNode("USERNAME: " + user['username']));
  liId.appendChild(document.createTextNode("USER ID: " + user['id']));
  liBook.appendChild(document.createTextNode("FAVORITE BOOK: " + user['favoriteBook']));
  liQuote.appendChild(document.createTextNode("FAVORITE QUOTE: " + user['favoriteQuote']));
  //append information to ul
  div.appendChild(imgPic);
  ul.appendChild(liUsername);
  ul.appendChild(liId);
  ul.appendChild(liBook);
  ul.appendChild(liQuote);

}

/***********************************************************************************
Lines 40 - 46: for creating the on-click event handler for selecting user from list
************************************************************************************/

function clickUsers() {
  var selectUser = document.getElementsByClassName("username");
  for (var i = 0; i < selectUser.length; i++) {
    selectUser[i].addEventListener("click", selectedUser, false);
  }
};
clickUsers();