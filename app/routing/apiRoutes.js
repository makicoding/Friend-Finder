// HERE WE ARE CREATING OUR OWN API
// We are defining the API to reside in the route /api      (/ on its own is the root directory)

// --------------------------------------------------------------------------------
// LOAD DATA                                        // We are linking our routes to a series of "data" sources.
                                                    // These data sources hold arrays of information on friends

var friendsData = require("../data/friends");       // Here we are referencing var friendsArray that was exported from ../data/friends.js
                                                    // We are basically saying friendsData = friendsArray



// --------------------------------------------------------------------------------
// ROUTING

// Export API routes
module.exports = function(app) {
  
  // ----------------------------------------
  // API GET Requests                               // The below code handles when users "visit" a page.
                                                    // In the below case when a user visits a link
                                                    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)

  // Total list of friend entries
  app.get("/api/friends", function(req, res) {  
    res.json(friendsData);                          // the response (res) is a JSON object with the friendsData passed through.
  });



  // ----------------------------------------
  // API POST Requests                              
                                                    /*
                                                    The below code handles when a user submits a form and thus submits data to the server.
                                                    In the below case, when a user submits form data (a JSON object),
                                                    the JSON is pushed to the JavaScript array
                                                    (ex. User fills out a survey request... this data is then sent to the server...
                                                    Then the server saves the data to friendsArray)
                                                    */
  app.post('/api/friends', function(req, res){
                                                    /*
                                                    Determine the user's most compatible friend using the following:
                                                    Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
                                                    With that done, compare the difference between current user's scores against those from other users, 
                                                    question by question. Add up the differences to calculate the totalDifference.
                                                    Example:
                                                    User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
                                                    User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
                                                    Total Difference: 2 + 1 + 2 + 0 + 0 + 0 + 0 + 0 + 0 + 0 = 5
                                                    Remember to use the absolute value of the differences (i.e. no negative solutions). 
                                                    The app should calculate both 5-3 and 3-5 as 2, and so on.

                                                    The closest match will be the user with the least amount of difference (best friend match).
                                                    In the case of multiple users with the same result it will choose the first match.
                                                    After the test, it will push the user to the database.
                                                    */

    // --------------------
    //// CODE FOR BEST MATCH STARTS HERE ////

    // We will use this object to hold the "best match". We will constantly update it as we
    // loop through all of the options
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    // Here we take the result of the user's survey POST and store them in variables.
    var userData = req.body;
    var userScores = userData.scores;

    // This variable will calculate the difference between the user's scores and the scores of
    // each user in the database. It is initially set to zero.
    var totalDifference = 0;

    // Here we loop through all the friend possibilities in the database.
    for (var i = 0; i < friendsData.length; i++) {

      console.log(friendsData[i].name);
      totalDifference = 0;

      // We then loop through all the scores of each friend
      for (var j = 0; j < friendsData[i].scores[j]; j++) {

        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));

        // If the sum of differences is less then the differences of the current "best match"
        if (totalDifference <= bestMatch.friendDifference) {

          // Reset the bestMatch to be the new friend.
          bestMatch.name = friendsData[i].name;
          bestMatch.photo = friendsData[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    //// CODE FOR BEST MATCH ENDS HERE ////
    // --------------------

    // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
    // the database will always return that the user is the user's best friend).
    friendsData.push(userData);

    // Return a JSON with the user's bestMatch (This will be used by survey.html)
    res.json(bestMatch);

  });

};