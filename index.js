var prompts = [
  'Type your name',
  'Type an adjective',
  'Type a noun'
  ];
//write an alert below variable definition to tell you length of array prompt
//alert(prompts.length);
//use alert method an display content in index 1 of prompts array
//alert(prompts[1]);
//change alert to display the 0th element of the array, 'Type your name'
//comment out all alerts
//alert(prompts[0]);
//alert(prompts.length);//--> 3
//alert(prompts[1]);//-> 'Type an adjective'
//alert(prompts[0]);//'Type your name'


//use jQuery method called val() to give the value contained in the input field
//use an alert to see value of input field 


var answers = [];

//keep track on the current prompt that we're on
//this value represent the index number of of the array, prompts
var currentPrompt = 0;

//function that will call the next prompt

var nextPrompt = function(){
  
//jQuery html() method to return the strings as innerHTML of the div element with class = "prompts". 
//change content in bracket to variable, 'currentPrompt',now it is dynamic
//if there is a next prompt, remember current prompt is 0 prompts.length is 3...
//run the html function inside next prompt that adds 1 to current prompt  

if(currentPrompt < prompts.length){ 
  //if currentPrompt variable isn't 0...
  if(currentPrompt !=0){
  //push values entered in input field to array, answers
   answers.push($('input').val()); 
  }

//use alert and output the value in the input field
//delete test alert alert($('input').val());
  
//if there is a next prompt
//add form field to first html function in nextPrompt...
//user will type answer to array prompts in this field  

$('.prompt').html(prompts[currentPrompt] + '<br><input type="text">');

//make the number held inside currentPrompt be one value larger than the number inside currentPrompt

  currentPrompt = currentPrompt + 1;
 //put a new message inside the html
//if currentPrompt = 1 and 1 is less than array.length, which 3...
//put prompt 1 in HTML, 'Type an adjective'...click button again..
//currentPrompt is incremented by 1...repeat until end of array  

} else {
  
  //call showFinal() function
  //showFinal function will put the answers into html
  showFinal();
  
 //code below deleted, code directly above added
  //$('.prompt').html("that's all for now!");
  }
}

//when the function showFinal is run,
var showFinal = function() {			  
//display answers 0,1,2 in the .prompt of your html
$('.prompt').html(answers[0]+ ' ' +answers[1]+ ' ' +answers[2]);		  
		  
}
//run prompt function when button is clicked

$('button').click(function() {
  nextPrompt();
});
//call function nextPrompt at end of script...
//this will display the string in 0th index of array prompts when page loads
//function called at end of code because javascript reads from top to bottom...
//javascript doesn't know code for next function until it reads code for the function
nextPrompt();