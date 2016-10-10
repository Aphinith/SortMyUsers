/***********************************************************************************
Ignore everything between lines 5 - 15 , it is just used to create extra information for users
************************************************************************************/

var allUsers = ['Nick', 'jake', 'RAY', 'Kate', 'Nick',  'Jeremy', 'nick', 'AMOL', 'rAY', 'VIANNEY', 'Shilpika', 'nick', 'THOMAS', 'tom', 'james', 'JERM', 'amOl', 'kate', 'SCOTT', 'Jenifer', 'bill', 'jenny', 'STEVEN'];

//create variable to hold unique number ID for users
var userId = 0;

var pic = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5', 'pic6', 'pic7', 'pic8', 'pic9', 'pic10', 'pic11', 'pic12', 'pic13', 'pic14', 'pic15', 'pic16', 'pic17', 'pic18', 'pic19', 'pic20', 'pic21', 'pic22', 'pic23'];

var bookTitles = ['George Orwell 1984', 'The Great Gatsby', 'The Adventures of Huckleberry Finn', 'Ulysses', 'War and Peace', 'On The Road', 'The Catcher in the Rye', 'The Illiad', 'The Odyssey', "Gullliver's Travels", 'Catch22', 'Emma', 'Pride and Prejudice', 'To Kill a Mockingbird', 'Lord of the Flies', 'Wuthering Heights', 'Frankenstein', 'The Canterbury Tales', 'Robinson Crusoe', 'The Scarlet Letter', 'The Count of Monte Cristo', 'Great Expectations', 'Tales of Edgar Allan Poe'];

var quotes = ['Life is about making an impact, not making an income. –Kevin Kruse', 'Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill', 'Strive not to be a success, but rather to be of value. –Albert Einstein', 'I attribute my success to this: I never gave or took any excuse. –Florence Nightingale', 'You miss 100% of the shots you don’t take. –Wayne Gretzky', 'The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart', 'Every strike brings me closer to the next home run. –Babe Ruth', 'Definiteness of purpose is the starting point of all achievement. –W. Clement Stone', 'Life isn’t about getting and having, it’s about giving and being. –Kevin Kruse', 'Life is what happens to you while you’re busy making other plans. –John Lennon', 'We become what we think about. –Earl Nightingale', 'Life is 10% what happens to me and 90% of how I react to it. –Charles Swindoll', 'The mind is everything. What you think you become.  –Buddha', 'Eighty percent of success is showing up. –Woody Allen', 'Your time is limited, so don’t waste it living someone else’s life. –Steve Jobs', 'You can never cross the ocean until you have the courage to lose sight of the shore. –Christopher Columbus', 'Whether you think you can or you think you can’t, you’re right. –Henry Ford', 'The best revenge is massive success. –Frank Sinatra', 'Start where you are. Use what you have.  Do what you can. –Arthur Ashe', "Don't cry because it's over, smile because it happened. -Dr. Seuss", 'Everything has beauty, but not everyone can see. –Confucius', 'When I let go of what I am, I become what I might be. –Lao Tzu', 'Happiness is not something readymade.  It comes from your own actions. –Dalai Lama']

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

//create variable to store sorted users as objects which will be used in all other JS files
var finalSortedUserList = [];

//below function sorts and renders sorted names onto DOM
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
    li.setAttribute("data-username", allUsersSorted[i]);
    userId++;
    li.setAttribute("data-id", userId);
    ul.appendChild(li);

    //create final user list as objects which will be used as our main array for everything else
    finalSortedUserList.push(new UserInfo(allUsersSorted[i], userId, pic[i], bookTitles[i], quotes[i]));
  }
})();