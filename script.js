//prompts[] contains three elements, all strings, which are prompts for user input

var prompts = [
	'Type your name',
	'Type an adjective',
	'Type a noun'
];

//answers[] is empty when page loads
//text entered in input field is stored in answer[] using th push()method
var answers = [];

//var currentPrompt keeps count of index number of prompts[], which increments by 1 when button is clicked by user
//prompts[0], string: Type your name
//prompts[1], string: Type an adjective 
//prompts[2], string: Type a noun

//when page loads, text from prompts[0] displays by default, therefore, var currentPrompt = 0, string 'Type a name'
//after user types enters name in input field and clicks button, var currentPrompt = 1
var currentPrompt = 0;

// the function nextPrompt is called if currentPrompt assigned value is not 0

var nextPrompt = function () {
	//if statement used to check var currentPrompt isn't equal to 0
	if (currentPrompt != 0) {

		//if currentPromt is not equal 0, push input value to answers[]
		//The push() method adds a new item to the end of an array and returns the new length of an array. 
		//the jQuery val() method returns or sets the value attribute of the selected elements
		//in line of code below, the imput value is targeted and placed in the anwers[] using the push() method 
		answers.push($('input').val());

	}

	// note: The length property of an object which is an instance of type Array sets or returns the number of elements in that array
	// if value of var currentPrompt is less than the length of prompts[]... 
	if (currentPrompt < prompts.length) {

		//.html function will put  put first prompt in all html elements with class 
		//display next prompt in element in prompts[] by using .html function targeting div will class="prompt"

		$('.prompt').html(prompts[currentPrompt] + '<br><input type="text">');


		//increment current count var currentPrompt by one
		currentPrompt = currentPrompt + 1;
	}
	//else if we're at the end of the array
	else {

		//call showFinal() function since currentPrompt value is now greater than length of prompts[]
		showFinal();
	}
}
var showFinal = function () {
	//span is an inline element
	//span class="fill" allows for styling of the input text stored as elements in answers[]
	//showFinal() function displays a string that includes input values from answers[]
	//concatenate is used
	$('.prompt').html('This is the story of <span class="fill">' + answers[0] + '</span> and the <span class="fill">' + answers[1] + '</span> <span class="fill">' + answers[2] + '</span>.');

	//jQuery hide() method hides the selected elements (in this case the button element)
	//button element hidden after user clicks on button and value of var currentPrompt is greater than prompts.length
	$('button').hide();
}

//jQuery click() method binds an event handle to the "click" JavaScript event, or trigger that event on an element
//when user clicks button...
$('button').click(function () {
	//nextPrompt() function is called
	nextPrompt();
});

//call function nextPrompt at end of script...
//this will display the string in 0th index of array prompts when page loads
//note: function called at end of code because javascript reads from top to bottom...
//javascript doesn't know code for next function until it reads code for the function
nextPrompt();