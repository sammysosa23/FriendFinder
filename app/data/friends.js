// ARRAY THAT HOLDS FRIENDS DATA
var friendsData = [
  {
    "name": "Sam",
    "image": "https://storage.googleapis.com/s8partner-pm_wp/1/2014/07/Untitled-3.jpg",
    "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    "name": "Ahmed",
    "photo": "https://timedotcom.files.wordpress.com/2017/04/time-100-2017-riz-ahmed1.jpg?w=450",
    "scores": [4, 1, 4, 3, 5, 5, 4, 5, 4, 3]
  },
  {
    "name": "Liz",
    "photo": "https://imgnooz.com/sites/default/files/wallpaper/celebrities/57611/elizabeth-banks-wallpapers-57611-5840956.jpg",
    "scores": [5, 3, 1, 2, 5, 3, 5, 1, 2, 5]
  },
  {
    "name": "Kato",
    "photo": "https://s.abcnews.com/images/Nightline/151111_ntl_kato_1251_16x9_1600.jpg",
    "scores": [3, 5, 1, 3, 5, 4, 5, 3, 2, 1]
  },
  {
    "name": "Steve",
    "photo": "https://pbs.twimg.com/profile_images/1037094205519101953/HJhhEUD0_400x400.jpg",
    "scores": [5, 1, 3, 5, 5, 2, 5, 1, 2, 5]
  },
];
// function findMatch(data) {
//   let diff = [];
//   let userScores = [];
//   for (var i = 0; i < data.scores; i++) {
//     var num = parseInt(data.scores[i]);
//     userScores.push(num);
//   };
//   for (var i = 0; i < friendsData.length; i++) {
//     let abs = 0;
//     for (s in friends[i].scores) {
//       var num = parseInt(friendsData[i].scores[s])
//       abs = abs + Math.abs(num - userScores[s]);
//     }
//     diff.push(abs);
//   };
//   diff.pop();
//   var smallest = Math.min(...diff);
//   var match = friends[diff.indexOf(smallest)];
//   return match;
// }
// module.exports = findMatch;
module.exports = friendsData;