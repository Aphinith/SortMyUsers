document.addEventListener("DOMContentLoaded", function() {

  var allUsers = ['Nick', 'jake', 'RAY', 'Kate', 'Nick',  'Jeremy', 'nick', 'AMOL', 'rAY', 'VIANNEY', 'Shilpika', 'nick', 'THOMAS', 'tom', 'james', 'JERM', 'amOl', 'kate', 'SCOTT', 'Jenifer', 'bill', 'jenny', 'STEVEN'];

  
  for (var i = 0; i < allUsers.length; i++) {
    var ul = document.getElementsByClassName("all-usernames")[0];
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(allUsers[i]));
    li.setAttribute("class", "username");
    ul.appendChild(li);
  }















});