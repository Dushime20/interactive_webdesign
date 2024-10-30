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
  if (namesArray.length !== 20) {
    document.getElementById("result15").textContent = "Please enter exactly 20 names.";
    return;
  }

  
  const filteredNames = namesArray.filter(name => 
    name.trim().toLowerCase().startsWith(letter.toLowerCase())
  );
  if (filteredNames.length > 0) {
    document.getElementById("result15").textContent = "Names starting with '" + letter + "': " + filteredNames.join(", ");
} else {
    document.getElementById("result15").textContent = "No names start with '" + letter + "'.";
}
}

//question16


function convertNamesToUppercase() {
  const input = document.getElementById("name6").value;
  const namesArray = input.split(",").map(name => name.trim());

  // Check if there are exactly 20 names
  if (namesArray.length !== 20) {
    document.getElementById("result16").textContent = "Please enter exactly 20 names.";
    return;
  }

  
 const uppercaseName= namesArray.map(name => name.toUpperCase());
    document.getElementById("result16").textContent = "name to Uppercase'" + uppercaseName;

}
// question 17
function removeName(nameToRemove) {
  const input = document.getElementById("name7").value;
  const namesArray = input.split(",").map(name => name.trim());

  // Check if there are exactly 20 names
  if (namesArray.length !== 20) {
    document.getElementById("result17").textContent = "Please enter exactly 20 names.";
    return;
  }

  // Filter the name to remove
  const remainedNames = namesArray.filter(name => name !== nameToRemove);

  document.getElementById("result17").textContent = "Filtered names: " + remainedNames.join(", ");
}

//question18
function countNamesWithA() {
  const input = document.getElementById("name8").value;
  const namesArray = input.split(",").map(name => name.trim());

  // Check if there are exactly 20 names
  if (namesArray.length !== 20) {
    document.getElementById("result18").textContent = "Please enter exactly 20 names.";
    return;
  }

  // Count names containing the letter 'a'
  const count = namesArray.filter(name => name.toLowerCase().includes('a')).length;

  document.getElementById("result18").textContent = "Number of names containing the letter 'a': " + count;
}

//question19
function concatenateNames() {
  const input = document.getElementById("name9").value;
  const namesArray = input.split(",").map(name => name.trim());

  // Check if there are exactly 20 names
  if (namesArray.length !== 20) {
    document.getElementById("result19").textContent = "Please enter exactly 20 names.";
    return;
  }

  // Concatenate names into a single string separated by commas
  const concatenatedNames = namesArray.join(", ");

  document.getElementById("result19").textContent = "Concatenated names: " + concatenatedNames;
}
//question20
function reverseNames() {
  const input = document.getElementById("name20").value;
  const namesArray = input.split(",").map(name => name.trim());

  // Check if there are exactly 20 names
  if (namesArray.length !== 20) {
    document.getElementById("result20").textContent = "Please enter exactly 20 names.";
    return;
  }

  // Reverse the order of names
  const reversedNames = namesArray.reverse();

  document.getElementById("result20").textContent = "Reversed names: " + reversedNames.join(", ");
}

//question21 && 22
function createPerson() {
  // Create the person object
  const person = {
      name: "John Doe",
      age: 30,
      occupation: "Software Developer"
  };
  
  // Display the person object properties
  const resultElement = document.getElementById("result21");
  resultElement.innerHTML = `Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}`;
}
//question23
function addPropertyToObject(obj, propName, propValue) {
  obj[propName] = propValue;
}

function displayPersonWithNewProperty() {
  const person = {
      name: "John Doe",
      age: 30,
      occupation: "Software Developer"
  };

  // Adding a new property 'country' to the person object
  addPropertyToObject(person, "country", "USA");
  
  // Display the updated person object properties
  const formattedInfo = `Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}, Country: ${person.country}`;
  document.getElementById("result23").innerText = formattedInfo;
}
//question 24
function removePropertyFromObject(obj, propName) {
  delete obj[propName];
}

function displayPersonWithoutProperty() {
  const person = {
      name: "John Doe",
      age: 30,
      occupation: "Software Developer",
      country: "USA"
  };

  // Removing the 'country' property from the person object
  removePropertyFromObject(person, "country");
  
  // Display the updated person object properties
  const formattedInfo = `Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}`;
  document.getElementById("result24").innerText = formattedInfo;
}

//question 25
function listPropertiesAndValues(obj) {
  const entries = Object.entries(obj);
  let result = "";
  for (const [key, value] of entries) {
      result += `${key}: ${value}\n`;
  }
  return result;
}

function displayPropertiesAndValues() {
  const person = {
      name: "John Doe",
      age: 30,
      occupation: "Software Developer",
      country: "USA"
  };

  const propertiesAndValues = listPropertiesAndValues(person);
  document.getElementById("result25").innerText = propertiesAndValues;
}
// question26

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

function displayMergedObjects() {
  const obj1 = {
      name: "John Doe",
      age: 30
  };

  const obj2 = {
      occupation: "Software Developer",
      country: "USA"
  };

  const mergedObject = mergeObjects(obj1, obj2);
  const propertiesAndValues = listPropertiesAndValues(mergedObject);
  document.getElementById("result26").innerText = propertiesAndValues;
}

function listPropertiesAndValues(obj) {
  const entries = Object.entries(obj);
  let result = "";
  for (const [key, value] of entries) {
      result += `${key}: ${value}\n`;
  }
  return result;
}
//question27
function propertyExists(obj, propName) {
  return propName in obj;
}

function checkProperty() {
  const person = {
      name: "John Doe",
      age: 30,
      occupation: "Software Developer"
  };

  // Check if the 'occupation' property exists
  const hasOccupation = propertyExists(person, "occupation");
  // Check if the 'country' property exists
  const hasCountry = propertyExists(person, "country");

  document.getElementById("result27").innerText = 
      `Has occupation: ${hasOccupation}\nHas country: ${hasCountry}`;
}

//question28
function cloneObject(obj) {
  return { ...obj };
}

function cloneObjectExample() {
  const person = {
      name: "John Doe",
      age: 30,
      occupation: "Software Developer"
  };

  // Clone the person object
  const clonedPerson = cloneObject(person);

  // Modify the cloned object
  clonedPerson.age = 35;

  const result = `Original person age: ${person.age}\nCloned person age: ${clonedPerson.age}`;
  document.getElementById("result28").innerText = result;
}

//question29
function printPropertyValues(arr, propName) {
  return arr.map(obj => obj[propName]).join('\n');
}

function displayPropertyValues() {
  const people = [
      { name: "John Doe", age: 30, occupation: "Software Developer" },
      { name: "Jane Smith", age: 25, occupation: "Graphic Designer" },
      { name: "Sam Johnson", age: 40, occupation: "Teacher" }
  ];

  const propertyValues = printPropertyValues(people, "name");
  document.getElementById("result29").innerText = propertyValues;
}

//question 30
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Developer"
};

function updateProperty(obj, propName, newValue) {
  if (propName in obj) {
      obj[propName] = newValue;
      return `Updated ${propName} to ${newValue}`;
  } else {
      return `Property "${propName}" does not exist.`;
  }
}

document.getElementById("updateForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const propName = document.getElementById("property").value;
  const newValue = document.getElementById("value").value;

  const resultMessage = updateProperty(person, propName, newValue);
  document.getElementById("result30").innerText = resultMessage;
});


//question31
function reverseString(str) {
  return str.split('').reverse().join('');
}

function handleReverseString() {
  const inputString = document.getElementById("inputString").value;
  const reversedString = reverseString(inputString);

  document.getElementById("result31").innerText = `Reversed string: ${reversedString}`;
}
//question32
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
      if (vowels.includes(char)) {
          count++;
      }
  }

  return count;
}

function handleCountVowels() {
  const inputString = document.getElementById("inputString1").value;
  console.log(inputString)
  const vowelCount = countVowels(inputString);

  document.getElementById("result32").innerText = `Number of vowels: ${vowelCount}`;
}

//question33
function toUppercase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) { // a-z
          charCode = charCode - 32; // Convert to A-Z
      }
      result += String.fromCharCode(charCode);
  }
  return result;
}

function handleConvertToUppercase() {
  const inputString = document.getElementById("inputString33").value;
  const uppercaseString =toUppercase(inputString)
  

  document.getElementById("result33").innerText = `Uppercase string: ${uppercaseString}`;
}

//question 34
function findLength(str) {
  let count = 0;
  for (let char of str) {
      count++;
  }
  return count;
}

function handleFindLength() {
  const inputString = document.getElementById("inputString34").value;
  const length = findLength(inputString);

  document.getElementById("result34").innerText = `Length of string: ${length}`;
}


//question 35
function replaceSpaces(str) {
  let result = "";
  for (let char of str) {
      if (char === " ") {
          result += "-";
      } else {
          result += char;
      }
  }
  return result;
}

function handleReplaceSpaces() {
  const inputString = document.getElementById("inputString35").value;
  const replacedString = replaceSpaces(inputString);

  document.getElementById("result35").innerText = `Modified string: ${replacedString}`;
}

//question 36
function extractFirst10(str) {
  let result = "";
  for (let i = 0; i < 10 && i < str.length; i++) {
      result += str[i];
  }
  return result;
}

function handleExtractFirst10() {
  const inputString = document.getElementById("inputString36").value;
  const extractedString = extractFirst10(inputString);

  document.getElementById("result36").innerText = `First 10 characters: ${extractedString}`;
}

//question 37

    function findAndReplace(str, find, replace) {
        let result = "";
        let words = str.split(" ");
        for (let word of words) {
            if (word === find) {
                result += replace + " ";
            } else {
                result += word + " ";
            }
        }
        return result.trim();
    }

    function handleFindAndReplace() {
        const inputString = document.getElementById("inputString37").value;
        const findWord = document.getElementById("findWord").value;
        const replaceWord = document.getElementById("replaceWord").value;
        const replacedString = findAndReplace(inputString, findWord, replaceWord);

        document.getElementById("result37").innerText = `Modified string: ${replacedString}`;
    }

    //question 38
    function splitStringToWords(str) {
      return str.split(" ");
  }

  function handleSplitString() {
      const inputString = document.getElementById("inputString38").value;
      const wordsArray = splitStringToWords(inputString);
      
      document.getElementById("result38").innerText = `Array of words: [${wordsArray.join(", ")}]`;
  }


  //question 39
  function removeNumbers(str) {
    let result = "";
    for (let char of str) {
        if (!/\d/.test(char)) {
            result += char;
        }
    }
    return result;
}

function handleRemoveNumbers() {
    const inputString = document.getElementById("inputString39").value;
    const stringWithoutNumbers = removeNumbers(inputString);

    document.getElementById("result39").innerText = `String without numbers: ${stringWithoutNumbers}`;
}

//question 40
function insertStringAtPosition(original, insert, position) {
  return original.slice(0, position) + insert + original.slice(position);
}

function handleInsertString() {
  const inputString = document.getElementById("inputString40").value;
  const insertString = document.getElementById("insertString").value;
  const position = 7;  // Fixed position to insert at 7
  const modifiedString = insertStringAtPosition(inputString, insertString, position);

  document.getElementById("result40").innerText = `Modified string: ${modifiedString}`;
}


//question 41
function changeBackgroundColor() {
  // Generate a random hex color
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

//question 42
function hideElement() {
  const element = document.getElementById("elementToHide");
  element.style.display = "none"; // Hides the element
}

//question43

function addParagraph() {
  // Create a new paragraph element
  const newParagraph = document.createElement("p");
  
  // Set the text content of the new paragraph
  newParagraph.textContent = "This is a newly added paragraph.";

  // Append the new paragraph to the body
  document.body.appendChild(newParagraph);
}

question44

function removeAllListItems() {
  const list = document.getElementById("myList");
 
  while (list.firstChild) {
      list.removeChild(list.firstChild);
  }
}

//question45

function changeTextContent() {
  const element = document.getElementById("textElement");
  element.textContent = "The text has been changed!";
}

//question 46
function toggleClass() {
  const element = document.getElementById("toggleElement");
  element.classList.toggle("highlight"); // Toggles the highlight class
}

//question 47
function countDivs() {
  const divs = document.getElementsByTagName("div"); // Get all div elements
  const count = divs.length; 
  document.getElementById("divCount").textContent = `Number of divs: ${count}`;
}

//qestion 48
function displayInputValue() {
  const inputValue = document.getElementById("textInput").value; 
  document.getElementById("displayParagraph").textContent = `You entered: ${inputValue}`;
}

// question 49
function createTable() {
  const numbers = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
  ];

  const table = document.createElement("table"); // Create a table element
  table.classList.add("table", "table-bordered"); // Add Bootstrap classes for styling

  for (let i = 0; i < numbers.length; i++) {
      const row = document.createElement("tr"); // Create a new row

      for (let j = 0; j < numbers[i].length; j++) {
          const cell = document.createElement("td"); // Create a new cell
          cell.textContent = numbers[i][j]; // Set the cell's text content
          row.appendChild(cell); // Append the cell to the row
      }

      table.appendChild(row); // Append the row to the table
  }

  const tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = ""; // Clear any previous table
  tableContainer.appendChild(table); // Append the table to the container
}

//question 50
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  
  let message = "";

  if (!name) {
      message += "Name is required.<br>";
  }
  if (!email) {
      message += "Email is required.<br>";
  }
  if (!password) {
      message += "Password is required.<br>";
  }

  const validationMessageElement = document.getElementById("validationMessage");
  if (message) {
      validationMessageElement.innerHTML = message;
      validationMessageElement.className = "text-danger"; // Set error message style
  } else {
      validationMessageElement.innerHTML = "Form submitted successfully!";
      validationMessageElement.className = "text-success"; // Set success message style
     
  }
}




