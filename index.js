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

//jQuery html() method to return the strings as innerHTML of the div element with class = "prompts". 
$('.prompt').html(prompts[2]);