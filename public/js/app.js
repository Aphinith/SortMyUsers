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
    alert('sortByAlphabet called!');
    // for (var i = 0; i < allUsersSorted.length; i++) {
    //   var ul = document.getElementsByClassName("all-usernames")[0];
    //   var li = document.createElement("li");
    //   li.appendChild(document.createTextNode(allUsersSorted[i]));
    //   li.setAttribute("class", "username");
    //   ul.appendChild(li);
    // }
  }

  //create function to sort in reverse alphabetical order
  var sortByReverse = function() {
    alert('sortByReverse called!');
  }

  //create function to sort by all caps first
  var sortByAllCaps = function() {
    alert('sortByAllCaps called!');
  }

  //create function to sort by all lowercase first
  var sortByLowercase = function() {
    alert('sortByLowercase called!');
  }


//create function to execute the requested sorting type
var sortingCommand = function(e) {
  var command = e.target.getAttribute("class");
  console.log('this is e.target: ', command);
} 

//create on click handlers for the different sorting buttons
var sortingButtons = document.getElementsByTagName("button");

for (var i = 0; i < sortingButtons.length; i++) {
  sortingButtons[i].addEventListener("click", sortingCommand, false);
}



});