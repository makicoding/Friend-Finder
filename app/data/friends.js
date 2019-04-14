// DATA                                     // Below data will hold all of the friends.
                                            // Initially we just set it equal to a "dummy" friend.
                                            // But you could have it be an empty array as well.

var friendsArray = [
    {
      name: "Maki",
      photo: "https://via.placeholder.com/150",    // Insert this line of code back in if wanting to display photo too.
      scores: [
        "3",
        "4",
        "5",
        "2",
        "3",
        "4",
        "1",
        "5",
        "5",
        "3"
      ]
    },
    {
      name: "Kyoko",
      photo: "https://via.placeholder.com/150",    // Insert this line of code back in if wanting to display photo too.
      scores: [
        "3",
        "4",
        "1",
        "2",
        "4",
        "5",
        "2",
        "3",
        "1",
        "4"
      ]
    },
    {
      name: "Judy",
      photo: "https://via.placeholder.com/150",    // Insert this line of code back in if wanting to display photo too.
      scores: [
        "1",
        "2",
        "1",
        "4",
        "4",
        "5",
        "2",
        "3",
        "1",
        "3"
      ]
    },
    {
      name: "Brian",
      photo: "https://via.placeholder.com/150",    // Insert this line of code back in if wanting to display photo too.
      scores: [
        "3",
        "4",
        "2",
        "4",
        "2",
        "1",
        "4",
        "5",
        "2",
        "4"
      ]
    },
    {
      name: "Steve",
      photo: "https://via.placeholder.com/150",    // Insert this line of code back in if wanting to display photo too.
      scores: [
        "1",
        "1",
        "5",
        "2",
        "5",
        "3",
        "4",
        "2",
        "3",
        "5"
      ]
    }
  ];
  
  
  
module.exports = friendsArray;        // We use module.exports to export the friendsArray. This makes friendsArray accessible to other files using "require".
                                      // We separate out the JS files into smaller chunks like this to keep files organized.
  