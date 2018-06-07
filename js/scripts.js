function romanNumeral(userNum) {
  var romanWord = "";
  var userArray = userNum.split("");
  console.log(userArray);

  userArray.forEach(function(place)) {
    var arrayPlaceValue = userArray.length;

    if (arrayPlaceValue === 4) {
      thousandsFunction(place);
    } else if (arrayPlaceValue === 3) {
      hundredsFunction(place);
    } else if (arrayPlaceValue === 2) {
      tensFunction(place);
    } else if (arrayPlaceValue === 1) {
      onesFunction(place);
    } else {
      console.log("Not a number");
    }

  // Tens Places
    if (place < 4) {
      for(i=0; i < place; i++) {
        romanWord = romanWord.concat("X");
      }
    } else if (parseInt(place) === 4) {
      romanWord = romanWord.concat("XL");
    } else if (parseInt(place) > 4 && parseInt(place) < 9) {
      romanWord = romanWord.concat("L");
      for (i=5; i < place; i++) {
        romanWord = romanWord.concat("X");
      }
    } else if (parseInt(place) === 9) {
      romanWord = romanWord.concat("XC");
    }

    // One's Places
    if (place < 4) {
      for(i=0; i < place; i++) {
        romanWord = romanWord.concat("I");
      }
    } else if (parseInt(place) === 4) {
      romanWord = romanWord.concat("IV");
    } else if (parseInt(place) > 4 && parseInt(place) < 9) {
      romanWord = romanWord.concat("V");
      for (i=5; i < place; i++) {
        romanWord = romanWord.concat("I");
      }
    } else if (parseInt(place) === 9) {
      romanWord = romanWord.concat("IX");
    }
  }
// // Hundreds Places
//   if (place < 4) {
//     for(i=0; i < place; i++) {
//       romanWord = romanWord.concat("I");
//     }
//   } else if (parseInt(place) === 4) {
//     romanWord = romanWord.concat("IV");
//   } else if (parseInt(place) > 4 && parseInt(place) < 9) {
//     romanWord = romanWord.concat("V");
//     for (i=5; i < place; i++) {
//       romanWord = romanWord.concat("I");
//     }
//   } else if (parseInt(place) <= 9) {
//     romanWord =
//   }
// // Thousands Places
//     if (place < 4) {
//       for(i=0; i < place; i++) {
//         romanWord = romanWord.concat("I");
//       }
//     } else if (parseInt(place) === 4) {
//       romanWord = romanWord.concat("IV");
//     } else if (parseInt(place) > 4 && parseInt(place) < 9) {
//       romanWord = romanWord.concat("V");
//       for (i=5; i < place; i++) {
//         romanWord = romanWord.concat("I");
//       }
//     } else if (parseInt(place) <= 9) {
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
