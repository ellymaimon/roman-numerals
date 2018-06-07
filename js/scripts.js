// Tens Places
function tensFunction(number, word) {
  if (number < 4  && number !== 0) {
    for(i=0; i < number; i++) {
    // console.log(romanWord);
    word.push("X");
    // console.log("called");
    }
  } else if (parseInt(number) === 4) {
    word.push("XL");
  } else if (parseInt(number) > 4 && parseInt(number) < 9) {
    word.push("L");
    for (i=5; i < number; i++) {
    word.push("X");
    // console.log("called2");
    }
  } else if (parseInt(number) === 9) {
    word.push("XC");
  }
};

// One's Places
function onesFunction(place, word) {
  if (place < 4) {
    for(i=0; i < place; i++) {
    word.push("I");
    }
  } else if (parseInt(place) === 4) {
    word.push("IV");
  } else if (parseInt(place) > 4 && parseInt(place) < 9) {
    word.push("V");
    for (i=5; i < place; i++) {
    word.push("I");
    }
  } else if (parseInt(place) === 9) {
    word.push("IX");
  }
};

// Hundreds Places
function hundredsFunction(place, word) {
  if (place < 4) {
    for(i=0; i < place; i++) {
    word.push("C");
    }
  } else if (parseInt(place) === 4) {
    word.push("CD");
  } else if (parseInt(place) > 4 && parseInt(place) < 9) {
    word.push("D");
    for (i=5; i < place; i++) {
    word.push("C");
    }
  } else if (parseInt(place) === 9) {
    word.push("CM");
  }
};

// Thousands Places
function thousandsFunction(place, word) {
  if (place < 4) {
    for(i=0; i < place; i++) {
    word.push("M");
    }
  }
};


function romanNumeral(userNum) {
  var finalWord = "";

  var userArray = userNum.split("");
  // console.log(userArray);
  var arrayPlaceValue = userArray.length;
  var romanWord = [];
  userArray.forEach(function(number) {
    if (arrayPlaceValue === 4) {
      thousandsFunction(number, romanWord);
    } else if (arrayPlaceValue === 3) {
      hundredsFunction(number, romanWord);
    } else if (arrayPlaceValue === 2) {
      tensFunction(number, romanWord);
    } else if (arrayPlaceValue === 1) {
      onesFunction(number, romanWord);
    }
    console.log(finalWord, romanWord);
    arrayPlaceValue--;
    // console.log(arrayPlaceValue);
  });
  finalWord = finalWord.concat(romanWord.join(""));
  romanWord = [];
  console.log(finalWord);
  return finalWord;
}

//front-end logic
$(document).ready(function(){
  $("#roman").submit(function(event){
    event.preventDefault();
    var num = $("#number").val();
    var final = romanNumeral(num);
    $("#result").text(final);
    romanWord = [];
  });
});
