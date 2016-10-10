/***********************************************************************************
Lines 5 - 14: to help sorting functions by "TitleCase" and by "LowerCase" options 
************************************************************************************/

var titleCaseNames = [];
var lowerCaseNames = [];

for (var i = 0; i < finalSortedUserList.length; i++) {
  if (finalSortedUserList[i]['username'][0] === finalSortedUserList[i]['username'][0].toUpperCase()) {
    titleCaseNames.push(finalSortedUserList[i]);
  } else {
    lowerCaseNames.push(finalSortedUserList[i]);
  }
}

/***********************************************************************************
Lines 20 - 101: the different sorting functions
************************************************************************************/

//create function to sort by alphabet 
var sortByAlphabet = function() {
  //clear the UL tag
  var ul = document.getElementsByClassName("all-usernames")[0];
  ul.innerHTML = '';

  //iterate through finalSortedUserList and populate names on DOM
  for (var i = 0; i < finalSortedUserList.length; i++) {
    ul = document.getElementsByClassName("all-usernames")[0];
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(finalSortedUserList[i]['username']));
    li.setAttribute("class", "username");
    li.setAttribute("data-username", finalSortedUserList[i]['username']);
    li.setAttribute("data-id", finalSortedUserList[i]['id']);
    ul.appendChild(li);
  }
  clickUsers();
  document.getElementsByClassName("search-results")[0].innerHTML = '';
}

//create function to sort in reverse alphabetical order
var sortByReverse = function() {
  //clear the UL tag
  var ul = document.getElementsByClassName("all-usernames")[0];
  ul.innerHTML = '';

  for (var i = finalSortedUserList.length - 1; i >= 0; i--) {
    ul = document.getElementsByClassName("all-usernames")[0];
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(finalSortedUserList[i]['username']));
    li.setAttribute("class", "username");
    li.setAttribute("data-username", finalSortedUserList[i]['username']);
    li.setAttribute("data-id", finalSortedUserList[i]['id']);
    ul.appendChild(li);
  }
  clickUsers();
  document.getElementsByClassName("search-results")[0].innerHTML = '';
}

//create function to sort by all caps first
var sortByTitleCase = function() {
  //clear the ul tag
  var ul = document.getElementsByClassName("all-usernames")[0];
  ul.innerHTML = '';

  //create a final sorted list with all names starting with a capital letter first
  var joinedNames = titleCaseNames.concat(lowerCaseNames);

  for (var i = 0; i < joinedNames.length; i++) {
    ul = document.getElementsByClassName("all-usernames")[0];
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(joinedNames[i]['username']));
    li.setAttribute("class", "username");
    li.setAttribute("data-username", joinedNames[i]['username']);
    li.setAttribute("data-id", joinedNames[i]['id']);
    ul.appendChild(li);
  }
  clickUsers();
  document.getElementsByClassName("search-results")[0].innerHTML = '';
}

//create function to sort by all lowercase first
var sortByLowerCase = function() {
  //clear the ul tag
  var ul = document.getElementsByClassName("all-usernames")[0];
  ul.innerHTML = '';

  //create a final sorted list with all names starting with a lowercase letter first
  var joinedNames = lowerCaseNames.concat(titleCaseNames);

  for (var i = 0; i < joinedNames.length; i++) {
    ul = document.getElementsByClassName("all-usernames")[0];
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(joinedNames[i]['username']));
    li.setAttribute("class", "username");
    li.setAttribute("data-username", joinedNames[i]['username']);
    li.setAttribute("data-id", joinedNames[i]['id']);
    ul.appendChild(li);
  }
  clickUsers();
  document.getElementsByClassName("search-results")[0].innerHTML = '';
}

/***********************************************************************************
Lines 180 - 215: for creating the on-click event handler for sorting functions
************************************************************************************/
var sortingCommand = function(e) {

//return background color of sorting options back to original color
var allButtons = document.getElementsByClassName("sorting-option");
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].style.backgroundColor = "#F9A70C";
}

//keep background color of sorting option yellow after clicking
var button = e.target;
button.style.backgroundColor = "yellow";

//call corresponding sorting function to sort names
var command = e.target.getAttribute("id");
switch (command) {
  case "sort-by-alphabet":
    sortByAlphabet();
    break;
  case "sort-reverse":
    sortByReverse();
    break;
  case "sort-all-caps":
    sortByTitleCase();
    break;
  case "sort-all-lowercase":
    sortByLowerCase();
    break;
}
} 

//create on click handlers for the different sorting buttons
var sortingButtons = document.getElementsByClassName("sorting-option");

for (var i = 0; i < sortingButtons.length; i++) {
sortingButtons[i].addEventListener("click", sortingCommand, false);
}
