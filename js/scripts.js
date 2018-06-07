var romanWord = [];

function romanNumeral(userNum) {
  var finalWord = "";
  var userArray = userNum.split("");
  // console.log(userArray);
  var arrayPlaceValue = userArray.length;

  userArray.forEach(function(number) {
    if (arrayPlaceValue === 4) {
      thousandsFunction(number);
    } else if (arrayPlaceValue === 3) {
      hundredsFunction(number);
    } else if (arrayPlaceValue === 2) {
      tensFunction(number);
    } else if (arrayPlaceValue === 1) {
      onesFunction(number);
    }
    console.log(finalWord, romanWord);
    arrayPlaceValue--;
    // console.log(arrayPlaceValue);

  });
  finalWord = finalWord.concat(romanWord.join(""));
  console.log(finalWord);
  return finalWord;
}
  // Tens Places
  function tensFunction(number) {
    if (number < 4  && number !== 0) {
      for(i=0; i < number; i++) {
      // console.log(romanWord);
      romanWord.push("X");
      // console.log("called");
      }
    } else if (parseInt(number) === 4) {
      romanWord.push("XL");
    } else if (parseInt(number) > 4 && parseInt(number) < 9) {
      romanWord.push("L");
      for (i=5; i < number; i++) {
      romanWord.push("X");
      // console.log("called2");
      }
    } else if (parseInt(number) === 9) {
      romanWord.push("LC");
    }
  };

  // One's Places
  function onesFunction(place) {
    if (place < 4) {
      for(i=0; i < place; i++) {
      romanWord.push("I");
      }
    } else if (parseInt(place) === 4) {
      romanWord.push("IV");
    } else if (parseInt(place) > 4 && parseInt(place) < 9) {
      romanWord.push("V");
      for (i=5; i < place; i++) {
      romanWord.push("I");
      }
    } else if (parseInt(place) === 9) {
      romanWord.push("IX");
    }
  };

// Hundreds Places
function hundredsFunction(place) {
  if (place < 4) {
    for(i=0; i < place; i++) {
    romanWord.push("C");
    }
  } else if (parseInt(place) === 4) {
    romanWord.push("CD");
  } else if (parseInt(place) > 4 && parseInt(place) < 9) {
    romanWord.push("D");
    for (i=5; i < place; i++) {
    romanWord.push("C");
    }
  } else if (parseInt(place) === 9) {
    romanWord.push("CM");
  }
};

// Thousands Places
function thousandsFunction(place) {
  if (place < 4) {
    for(i=0; i < place; i++) {
    romanWord.push("M");
    }
  }
};

$(document).ready(function(){
  $("#roman").submit(function(event){
    event.preventDefault();
    var num = $("#number").val();
    var final = romanNumeral(num);
    $("#result").text(final);
  });
});
