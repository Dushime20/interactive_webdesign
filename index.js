//question 1
// Convert each item to a number

function calculateSum(event) {
  // Prevent form submission
  event.preventDefault();

  const input = document.getElementById("numbers").value;
  const numbersArray = input.split(",").map(Number);

  console.log(numbersArray);

  // Check if there are exactly 20 numbers
  if (numbersArray.length !== 20) {
    document.getElementById("result").textContent =
      "Please enter exactly 20 numbers.";
    return;
  }

  // Calculate the sum using reduce
  const sum = numbersArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  // Display the result
  document.getElementById("result").textContent = "The sum is: " + sum;
  console.log("The sum is: " + sum);
}

//question2
function isLargest() {
    const input = document.getElementById("numbers2").value;
    const numbersArray = input.split(",").map(Number);

    if (numbersArray.length !== 20) {
        document.getElementById("result2").textContent =
          "Please enter exactly 20 numbers.";
        return;
      }
    
    const maximum = Math.max(...numbersArray);
    document.getElementById("result2").textContent = "The largest is: " + maximum;
    

}
//question3 
function sorting(){
    const input = document.getElementById("numbers3").value;
    const numbersArray = input.split(",").map(Number);
    if (numbersArray.length !== 20) {
        document.getElementById("result3").textContent =
          "Please enter exactly 20 numbers.";
        return;
      }
     const sortedArray = numbersArray.sort((a, b) => a - b);
   

    document.getElementById("result3").textContent = "The sorted number are: " + sortedArray;

}

//question 4
function reverse(){
    const input = document.getElementById("numbers4").value;
    const numbersArray = input.split(",").map(Number);
    if (numbersArray.length !== 20) {
        document.getElementById("result4").textContent =
          "Please enter exactly 20 numbers.";
        return;
      }
     const reversedArray = numbersArray.reverse();
   

    document.getElementById("result4").textContent = "The reversed array is: " + reversedArray;

}

//question 5
function isEven() {
  let evenNumber = [];
  const input = document.getElementById("numbers5").value;
  const numbersArray = input.split(",").map(Number);

  // Check if there are exactly 20 numbers
  if (numbersArray.length !== 20) {
    document.getElementById("result5").textContent = "Please enter exactly 20 numbers.";
    return;
  }

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
      evenNumber.push(numbersArray[i]);
    }
  }

  document.getElementById("result5").textContent = "The even numbers are: " + evenNumber.join(", ");
}
//question6
function isAdd() {
  let evenNumber = [];
  const input = document.getElementById("numbers6").value;
  const numbersArray = input.split(",").map(Number);

  // Check if there are exactly 20 numbers
  if (numbersArray.length !== 20) {
    document.getElementById("result6").textContent = "Please enter exactly 20 numbers.";
    return;
  }

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 != 0) {
      evenNumber.push(numbersArray[i]);
    }
  }

  document.getElementById("result6").textContent = "The add numbers are: " + evenNumber.join(", ");
}

//question7
function isAverage() {
  let sum = 0;
  let average =0;
  const input = document.getElementById("numbers7").value;
  const numbersArray = input.split(",").map(Number);

 // Check if there are exactly 20 numbers
  if (numbersArray.length !== 20) {
    document.getElementById("result7").textContent = "Please enter exactly 20 numbers.";
    return;
  }

  for (let i = 0; i < numbersArray.length; i++) {
   sum= sum+numbersArray[i]
   
  }
  average=(average+sum)/2

  document.getElementById("result7").textContent = "The average is: " + average;
}

//question8
function isDuplicate() {
  
  const input = document.getElementById("numbers8").value;
  const numbersArray = input.split(",").map(Number);

 // Check if there are exactly 20 numbers
  if (numbersArray.length !== 20) {
    document.getElementById("result8").textContent = "Please enter exactly 20 numbers.";
    return;
  }

  
  const uniqueNumbers = [...new Set(numbersArray)];

  document.getElementById("result8").textContent = "Unique numbers are: " + uniqueNumbers.join(", ");
}

//question9
function findMedian() {
  
  const input = document.getElementById("numbers9").value;
  const numbersArray = input.split(",").map(Number);

 // Check if there are exactly 20 numbers
  if (numbersArray.length !== 20) {
    document.getElementById("result9").textContent = "Please enter exactly 20 numbers.";
    return;
  }

  
  const sortedArray = numbersArray.slice().sort((a, b) => a - b);

  // Find the middle two values and calculate their average
  const mid1 = sortedArray[9];
  const mid2 = sortedArray[10];
  const median = (mid1 + mid2) / 2;

  document.getElementById("result9").textContent = "median is: " + median;
}
//question10
function isDouble() {
  let double= [];
  
  const input = document.getElementById("numbers10").value;
  const numbersArray = input.split(",").map(Number);

 // Check if there are exactly 20 numbers
  if (numbersArray.length !== 20) {
    document.getElementById("result10").textContent = "Please enter exactly 20 numbers.";
    return;
  }

  for (let i = 0; i < numbersArray.length; i++) {
   double.push(numbersArray[i]*2)
   
  }


  document.getElementById("result10").textContent = "The double are: " + double;
}



               /***  STRING   ***/


 //question11
function printName() {
  
  
  const input = document.getElementById("name1").value;
  const namesArray = input.split(",");
     

 // Check if there are exactly 20 numbers
  if (namesArray.length !== 20) {
    document.getElementById("result11").textContent = "Please enter 20 names.";
    return;
  }
    
  const namesText = namesArray.join("<br>");
  
 
  document.getElementById("result11").innerHTML = "The names are:<br>" + namesText;
    


  
} 
//question12     

function sortNames() {
  const input = document.getElementById("name2").value;
  const namesArray = input.split(",");

  // Check if there are exactly 20 names
  if (namesArray.length !== 20) {
    document.getElementById("result12").textContent = "Please enter exactly 20 names.";
    return;
  }

  // Sort names alphabetically (case-insensitive)
  const sortedNames = namesArray.map(name => name.trim()).sort((a, b) => a.localeCompare(b));

  // Display sorted names
  document.getElementById("result12").innerHTML = "Sorted names are:" + sortedNames;
}


//.join("<br>")
//question13
function nameExists(nameToCheck) {
  const input = document.getElementById("name3").value;
  const namesArray = input.split(",").map(name => name.trim());

  // Check if there are exactly 20 names
  if (namesArray.length !== 20) {
    document.getElementById("result13").textContent = "Please enter exactly 20 names.";
    return;
  }

  
  const exists = namesArray.some(name => name.toLowerCase() === nameToCheck.toLowerCase());

  
  document.getElementById("result13").textContent = exists ? "True" : "False";
}

//question14
function findLongestName() {
  const input = document.getElementById("name4").value;
  const namesArray = input.split(",").map(name => name.trim());

  // Check if there are exactly 20 names
  if (namesArray.length !== 20) {
    document.getElementById("result14").textContent = "Please enter exactly 20 names.";
    return;
  }

  
   // Use reduce to find the longest name
   const longestName = namesArray.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");

  
  document.getElementById("result14").textContent = "Please enter exactly 20 names."+longestName;
}

//question15


function findNamesStartingWith(letter) {
  const input = document.getElementById("name5").value;
  const namesArray = input.split(",").map(name => name.trim());

  // Check if there are exactly 20 names
  // if (namesArray.length !== 20) {
  //   document.getElementById("result13").textContent = "Please enter exactly 20 names.";
  //   return;
  // }

  
  const filteredNames = namesArray.filter(name => 
    name.trim().toLowerCase().startsWith(letter.toLowerCase())
  );
  if (filteredNames.length > 0) {
    document.getElementById("result15").textContent = "Names starting with '" + letter + "': " + filteredNames.join(", ");
} else {
    document.getElementById("result15").textContent = "No names start with '" + letter + "'.";
}
}


