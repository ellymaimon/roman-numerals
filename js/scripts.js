function romanNumeral(userNum) {
  var romanWord = "";
  console.log(userNum);
  // One's Places
  if (userNum < 4) {
    for(i=0; i < userNum; i++) {
      romanWord = romanWord.concat("I");
    }
  } else if (parseInt(userNum) === 4) {
    romanWord = romanWord.concat("IV");
  } else if (parseInt(userNum) > 4 && parseInt(userNum) < 9) {
    romanWord = romanWord.concat("V");
    for (i=5; i < userNum; i++) {
      romanWord = romanWord.concat("I");
    }
  } else if (parseInt(userNum) === 9) {
    romanWord = romanWord.concat("IX");
  }

// // Tens Places
//   if (userNum < 4) {
//     for(i=0; i < userNum; i++) {
//       romanWord = romanWord.concat("I");
//     }
//   } else if (parseInt(userNum) === 4) {
//     romanWord = romanWord.concat("IV");
//   } else if (parseInt(userNum) > 4 && parseInt(userNum) < 9) {
//     romanWord = romanWord.concat("V");
//     for (i=5; i < userNum; i++) {
//       romanWord = romanWord.concat("I");
//     }
//   } else if (parseInt(userNum) <= 9) {
//     romanWord =
//   }
// // Hundreds Places
//   if (userNum < 4) {
//     for(i=0; i < userNum; i++) {
//       romanWord = romanWord.concat("I");
//     }
//   } else if (parseInt(userNum) === 4) {
//     romanWord = romanWord.concat("IV");
//   } else if (parseInt(userNum) > 4 && parseInt(userNum) < 9) {
//     romanWord = romanWord.concat("V");
//     for (i=5; i < userNum; i++) {
//       romanWord = romanWord.concat("I");
//     }
//   } else if (parseInt(userNum) <= 9) {
//     romanWord =
//   }
// // Thousands Places
//     if (userNum < 4) {
//       for(i=0; i < userNum; i++) {
//         romanWord = romanWord.concat("I");
//       }
//     } else if (parseInt(userNum) === 4) {
//       romanWord = romanWord.concat("IV");
//     } else if (parseInt(userNum) > 4 && parseInt(userNum) < 9) {
//       romanWord = romanWord.concat("V");
//       for (i=5; i < userNum; i++) {
//         romanWord = romanWord.concat("I");
//       }
//     } else if (parseInt(userNum) <= 9) {
//       romanWord =
//     }
  console.log(romanWord);
  return romanWord;
}







$(document).ready(function(){
  $("#roman").submit(function(event){
    event.preventDefault();
    var num = $("#number").val();
    var final = romanNumeral(num);
    $("#result").text(final);
  });
});
