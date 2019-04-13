// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
      friendName: "Maki",
      answer1: "3",
      answer2: "3",
      answer3: "3",
      answer4: "3",
      answer5: "3",
      answer6: "3",
      answer7: "3",
      answer8: "3",
      answer9: "3",
      answer10: "3"
    }
  ];
  
  // We use module.exports to export the friendsArray. This makes friendsArray accessible to other files using "require".
  // We separate out the JS files into smaller chunks like this to keep files organized.
  module.exports = friendsArray;
  