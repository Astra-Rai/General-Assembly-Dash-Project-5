var prompts = [
  'Type your name',
  'Type an adjective',
  'Type a noun'
  ];
//write an alert below variable definition to tell you length of array prompt
//alert(prompts.length);
//use alert method an diplay content in index 1 of prompts array
//alert(prompts[1]);
//change alert to display the 0th element of the array, 'Type your name'
//comment out all alerts
//alert(prompts[0]);
//alert(prompts.length);//--> 3
//alert(prompts[1]);//-> 'Type an adjective'
//alert(prompts[0]);//'Type your name'

//keep track on the current prompt that we're on
//this value represent the index number of of the array, prompts
var currentPrompt = 0;

//fucntion that will call the next prompt
var nextPrompt = function(){
//jQuery html() method to return the strings as innerHTML of the div element with class = "prompts". 
//change content in bracket to variable, 'currentPrompt',now it is dynamic

$('.prompt').html(prompts[currentPrompt]);


//make the number held inside currentPrompt be one value larger than the number inside currentPrompt
currentPrompt = currentPrompt + 1;

}


//run prompt function when button is clicked

$('button').click(function() {
  nextPrompt();
});