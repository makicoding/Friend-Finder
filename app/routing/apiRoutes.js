// HERE WE ARE CREATING OUR OWN API
// We are defining the API to reside in the route /api      (/ on its own is the root directory)

// ================================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends
// ================================================================================

var friendsData = require("../data/friends");       // Here we are referencing var friendsArray that was exported from ../data/friends.js
                                                    // We are basically saying friendsData = friendsArray

// ================================================================================
// ROUTING
// ================================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ----------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);                      // the response (res) is a JSON object with the friendsData passed through.
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey request... this data is then sent to the server...
  // Then the server saves the data to friendsArray)
  // ----------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // req.body is available since we're using the body-parser middleware
    friendsData.push(req.body);                 // friendsData is pushed to the request body (req.body)
  });

  // ----------------------------------------------------------------------
  // The below code was added so you could clear out friendsData while working with the functionality.

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];

    console.log(friendsData);
  });
};