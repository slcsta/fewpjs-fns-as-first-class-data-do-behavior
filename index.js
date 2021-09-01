/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

/* 1. write a greet function that takes in 1 arg 
2. the arg is time in the format HH:MM
3. write a conditional that if time is less than 12:00, return "Good Morning"
if time is greater than or equal to 12:00 or equal to or less than 17:00, return "Good Afternoon"
if time is greater than 17:00, return "Good Evening" 
4. the value returned from <input> is a String
5. take the returned String of time and convert it to a number
6. use split() to divide string into an ordered list of substrings 
7. use parseInt() to return string as an integer */

function greet(input_time){

  time = input_time.split(":").join("");

  if (time < 1200){
    return "Good Morning";
  }
  else if (time > 1700){
    return "Good Evening";
  }
  else {
    return "Good Afternoon";
  }
}

/* Write your implementation of displayMessage() */
/* displayMessage is a function that takes a string as an arg. 
When the function runs, it updates text inside the 
#greeting node with the content of the argument.
id = "greeting" */


function displayMessage(greeting){
  document.getElementById("greeting").innerHTML = greeting;
}