document.addEventListener("DOMContentLoaded", function() {

  /***********************************************************************************
  Ignore everything between lines 7 - 16 , it is just used to create extra information for users
  ************************************************************************************/

  var allUsers = ['Nick', 'jake', 'RAY', 'Kate', 'Nick',  'Jeremy', 'nick', 'AMOL', 'rAY', 'VIANNEY', 'Shilpika', 'nick', 'THOMAS', 'tom', 'james', 'JERM', 'amOl', 'kate', 'SCOTT', 'Jenifer', 'bill', 'jenny', 'STEVEN'];

  //create variable to hold unique number ID for users
  var userId = 0;

  var pic = ['pic1', 'pic2', 'pick', 'pic4', 'pic5', 'pic6', 'pic7', 'pic8', 'pic9', 'pic10', 'pic11', 'pic12', 'pic13', 'pic14', 'pic15', 'pic16', 'pic17', 'pic18', 'pic19', 'pic20', 'pic21', 'pic22', 'pic23'];

  var bookTitles = ['Book1', 'Book2', 'Book3', 'Book4', 'Book5', 'Book6', 'Book7', 'Book8', 'Book9', 'Book10', 'Book11', 'Book12', 'Book13', 'Book14', 'Book15', 'Book16', 'Book17', 'Book18', 'Book19', 'Book20', 'Book21', 'Book22', 'Book23'];

  var quotes = ['quote1', 'quote2', 'quote3', 'quote4', 'quote5', 'quote6', 'quote7', 'quote8', 'quote9', 'quote10', 'quote11', 'quote12', 'quote13', 'quote14', 'quote15', 'quote16', 'quote17', 'quote18', 'quote19', 'quote20', 'quote21', 'quote22', 'quote23']

  /***********************************************************************************
  Below is where the real fun begins
  ************************************************************************************/

  //create variable to store sorted users;
  var allUsersSorted;

  //create class to create users with information
  var UserInfo = function(username, id, pic, favoriteBook, favoriteQuote) {
    this.username = username;
    this.id = id;
    this.pic = pic;
    this.favoriteBook = favoriteBook;
    this.favoriteQuote = favoriteQuote;
  }

  //create variable to store sorted users as objects
  var finalSortedUserList = [];

  /***********************************************************************************
  Lines 37-67: for automatically sorting usernames upon page loading and creating an array of objects that are the newly sorted usernames
  ************************************************************************************/

  (function defaultSort() {
    //create new variable to hold all usernames
    var mapped = allUsers.map(function(el, i) {
      return { index: i, value: el.toLowerCase() };
    })

    // sorting the mapped array containing the reduced values
    mapped.sort(function(a, b) {
      return +(a.value > b.value) || +(a.value === b.value) - 1;
    });

    // update allUsersSorted variable for the resulting order
    allUsersSorted = mapped.map(function(el){
      return allUsers[el.index];
    });

    //iterate through newly sorted list and show sorted names on DOM
    for (var i = 0; i < allUsersSorted.length; i++) {
      var ul = document.getElementsByClassName("all-usernames")[0];
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(allUsersSorted[i]));
      li.setAttribute("class", "username");
      li.setAttribute("data-key", allUsersSorted[i]);
      userId++;
      li.setAttribute("data-id", userId);
      ul.appendChild(li);

      //create final user list as objects which will be used as our main array for everything else
      finalSortedUserList.push(new UserInfo(allUsersSorted[i], userId, pic[i], bookTitles[i], quotes[i]));
    }

  })();

  /***********************************************************************************
  Lines ## - ##: to help sorting functions by "ALL CAPS" and by "lowercase" options 
  ************************************************************************************/

  var nameWithCap = [];
  var nameWithLowercase = [];

  for (var i = 0; i < finalSortedUserList.length; i++) {
    if (finalSortedUserList[i]['username'][0] === finalSortedUserList[i]['username'][0].toUpperCase()) {
      nameWithCap.push(finalSortedUserList[i]);
    } else {
      nameWithLowercase.push(finalSortedUserList[i]);
    }
  }

  /***********************************************************************************
  Lines 89 - 164: the different sorting functions
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
  }

  //create function to sort by all caps first
  var sortByAllCaps = function() {
    //clear the ul tag
    var ul = document.getElementsByClassName("all-usernames")[0];
    ul.innerHTML = '';

    //create a final sorted list with all names starting with a capital letter first
    var joinedNames = nameWithCap.concat(nameWithLowercase);

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
  }

  //create function to sort by all lowercase first
  var sortByLowercase = function() {
    //clear the ul tag
    var ul = document.getElementsByClassName("all-usernames")[0];
    ul.innerHTML = '';

    //create a final sorted list with all names starting with a lowercase letter first
    var joinedNames = nameWithLowercase.concat(nameWithCap);

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
  }


/***********************************************************************************
Lines 169 - 191: for creating the on-click event handler for sorting functions
************************************************************************************/
var sortingCommand = function(e) {
  var command = e.target.getAttribute("class");
  switch (command) {
    case "sort-by-alphabet":
      sortByAlphabet();
      break;
    case "sort-reverse":
      sortByReverse();
      break;
    case "sort-all-caps":
      sortByAllCaps();
      break;
    case "sort-all-lowercase":
      sortByLowercase();
      break;
  }
} 

//create on click handlers for the different sorting buttons
var sortingButtons = document.getElementsByTagName("button");

for (var i = 0; i < sortingButtons.length; i++) {
  sortingButtons[i].addEventListener("click", sortingCommand, false);
}

  /***********************************************************************************
  Lines ### - ###: for handling on-click event handler for selecting user from list
  ************************************************************************************/

  var selectedUser = function(e) {
    var userId = e.target.getAttribute("data-id");
    var user = finalSortedUserList[userId - 1];
    //clear the UL tag
    var ul = document.getElementsByClassName("single-user-info")[0];
    ul.innerHTML = '';

    //create all tags
    var imgPic = document.createElement("IMG");
    var liUsername = document.createElement("li");
    var liId = document.createElement("li");
    var liBook = document.createElement("li");
    var liQuote = document.createElement("li");
    //create text for list items
    imgPic.setAttribute("src", "styles/assets/" + user['pic'] + ".jpeg")
    liUsername.appendChild(document.createTextNode("Username: " + user['username']));
    liId.appendChild(document.createTextNode("User ID: " + user['id']));
    liBook.appendChild(document.createTextNode("Favorite Book: " + user['favoriteBook']));
    liQuote.appendChild(document.createTextNode("Favorite Book: " + user['favoriteQuote']));
    //append information to ul
    ul.appendChild(imgPic);
    ul.appendChild(liUsername);
    ul.appendChild(liId);
    ul.appendChild(liBook);
    ul.appendChild(liQuote);

  }

  /***********************************************************************************
  Lines ### - ###: for creating the on-click event handler for selecting user from list
  ************************************************************************************/

  function clickUsers() {
    var selectUser = document.getElementsByClassName("username");
    for (var i = 0; i < selectUser.length; i++) {
      selectUser[i].addEventListener("click", selectedUser, false);
    }
  };
  clickUsers();

});
