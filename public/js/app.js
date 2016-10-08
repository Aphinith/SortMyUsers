document.addEventListener("DOMContentLoaded", function() {

  var allUsers = ['Nick', 'jake', 'RAY', 'Kate', 'Nick',  'Jeremy', 'nick', 'AMOL', 'rAY', 'VIANNEY', 'Shilpika', 'nick', 'THOMAS', 'tom', 'james', 'JERM', 'amOl', 'kate', 'SCOTT', 'Jenifer', 'bill', 'jenny', 'STEVEN'];

  //create variable to store sorted users;
  var allUsersSorted;

  //create variable to hold unique number ID for users
  var userId = 0;

  /***********************************************************************************
  Below function automatically sorts usernames upon page loading
  ************************************************************************************/

  (function defaultSort() {
    //create new variable to hold all user names
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

    //iterate through newly sorted 
    for (var i = 0; i < allUsersSorted.length; i++) {
      var ul = document.getElementsByClassName("all-usernames")[0];
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(allUsersSorted[i]));
      li.setAttribute("class", "username");
      li.setAttribute("data-key", allUsersSorted[i]);
      userId++;
      li.setAttribute("data-id", userId);
      ul.appendChild(li);
    }
  })();

  /***********************************************************************************
  Below are the different sorting methods
  ************************************************************************************/

  //create function to sort by alphabet 
  var sortByAlphabet = function() {
    //clear the UL tag
    var ul = document.getElementsByClassName("all-usernames")[0];
    ul.innerHTML = '';

    //reset userId
    userId = 0;

    //iterate through list and populate names on DOM
    for (var i = 0; i < allUsersSorted.length; i++) {
      ul = document.getElementsByClassName("all-usernames")[0];
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(allUsersSorted[i]));
      li.setAttribute("class", "username");
      li.setAttribute("data-key", allUsersSorted[i]);
      userId++;
      li.setAttribute("data-id", userId);
      ul.appendChild(li);
    }
  }

  //create function to sort in reverse alphabetical order
  var sortByReverse = function() {
    //clear the UL tag
    var ul = document.getElementsByClassName("all-usernames")[0];
    ul.innerHTML = '';

    //start userId from the last number available
    userId = allUsersSorted.length;

    //iterate through list and populate names on DOM
    for (var i = allUsersSorted.length - 1 ; i >= 0; i--) {
      ul = document.getElementsByClassName("all-usernames")[0];
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(allUsersSorted[i]));
      li.setAttribute("class", "username");
      li.setAttribute("data-key", allUsersSorted[i]);
      li.setAttribute("data-id", userId);
      userId--;
      ul.appendChild(li);
    }
  }

  //create function to sort by all caps first
  var sortByAllCaps = function() {
    //clear the ul tag
    var ul = document.getElementsByClassName("all-usernames")[0];
    ul.innerHTML = '';

    userId = 0;

    //create variable to hold list of users with corresponding Id's
    var usernameWithId = [];

    //create class to instantiate username with id
    var UserObject = function(id, username) {
      this.id = id;
      this.username = username;
    }

    //iterate through sorted users to make instantiation of UserObjects
    for (var i = 0; i < allUsersSorted.length; i++) {
      userId++;
      //push new instantiations into usernameWithId array
      usernameWithId.push(new UserObject(userId, allUsersSorted[i]));
    }

    //create two new arrays, one to hold names that start with uppercase and one to hold names that start with a lowercase
    var uppercaseNames = [];
    var lowercaseNames = [];

    //iterat through usernameWithId array
    for (var i =0; i < usernameWithId.length; i++) {
      //now we can separate the names that begin with uppercase and lowercase by pushing them to their corresponding arrays
      if (usernameWithId[i]['username'][0] === usernameWithId[i]['username'][0].toUpperCase()) {
        uppercaseNames.push(usernameWithId[i])
      } else {
        lowercaseNames.push(usernameWithId[i])
      }
    }
    //create array to combine newly ordered names with matching ids, starting with names that begin a capital letter first, then all names sorted beginning with lower case letters
    var joinedNames = uppercaseNames.concat(lowercaseNames);

    //iterate through list and populate names on DOM
    for (var i = 0; i < joinedNames.length; i++) {
      ul = document.getElementsByClassName("all-usernames")[0];
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(joinedNames[i]['username']));
      li.setAttribute("class", "username");
      li.setAttribute("data-key", joinedNames[i]['username']);
      li.setAttribute("data-id", joinedNames[i]['id']);
      ul.appendChild(li);
    }
  }

  //create function to sort by all lowercase first
  var sortByLowercase = function() {
    var ul = document.getElementsByClassName("all-usernames")[0];
    ul.innerHTML = '';
  }


//create function to execute the requested sorting type
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



});
