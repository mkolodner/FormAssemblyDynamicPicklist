<div style="color:red">
<noscript>For full functionality of this page it is necessary to &amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;a href="http://www.enable-javascript.com/"enable&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt; JavaScript.&amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/a&amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;</noscript>
</div>


<script>
/*
Date Modified: 11/29/2021
Modified Notes: Strips down Robert Wynter's example code to be much simpler (using fewer fields) 
Author: Michael Kolodner, based on work by Robert Wynter
The purpose of this script is to Prefill a dropdown on your form using the Salesforce Prefill Connector 
to get the values using a repeatable section.

TARGETFIELD in this script should be replaced with the fieldname (in format tfa_XXXX) 
of the dropdown field you want to replace values in
REPLACEVALUESFIELD in this script should be replaced with the fieldname (in format tfa_XXXX)
of the field within your repeating section that has the values you want to show up as dynamic picklist options

The example below, on Windows Load and Select change,
1. clears the dropdown list
2. Uses the connector to grab the Repeater section of selected fields based on a list in a repeating section
3. Loop through the Repeaters and get the REPLACEVALUESFIELD values and put them in an array
4. Add the Array values into the dropdown (TARGETFIELD)
*/
 </script>
<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>


<script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.5.js"></script>
<script>
// ##########
// #FORM LOAD
// ##########
 
 
	  	// On Load for the page
$(window).load(function() {
      //alert("window load occurred!");
	//Clear dropdown options
	document.getElementById("TARGETFIELD").options.length=0;
	// Add the select option message (Can be anything you want wrapped in double quotes)
	var option = document.createElement("option");
	option.text = "This element has been taken over!!!!! ...";
	document.getElementById("TARGETFIELD").add(option);//Dropdown field
 
  
 //Loop through repeater and get all the values for field and Add them to an Array
			
	  		// Gets all the fields from the form, including the hidden fields
			//Dropdown fields
	  		var dropdownAccount = document.getElementById("TARGETFIELD");//Dropdown field to be updated
			
			// Text Repeater field
			var eventDisplay4Arr = [];// Array for storing all the dropdown names 
			var eventDisplay4Arr = document.querySelectorAll('[id^=REPLACEVALUESFIELD]'); // Example: all the account names from repeating section
				  
			var textToWrite; // temp variable for writing to arrays

			//For all contents of the eventDisplay4 array (from repeater - REPLACEVALUESFIELD) ..
          for(var i in eventDisplay4Arr){
				
				//assign current iterations value to var.
		   		textToWrite = eventDisplay4Arr[i].value;
				
				//if it contains a value ...
				if (textToWrite) {
					//add the eventDisplay4 value to the selection 'main' dropdown
					addToDropdown(textToWrite); //This adds the text to the dropdown box ...
																		
					if (textToWrite == "" || textToWrite == null) {
						
						alert("EventDisplay4 TextToWrite BLANK - please contact administrator.");
		   				textToWrite = "No eventDisplay4 Available."; // Stores the value in the array
	   				}
                  eventDisplay4Arr[i] = textToWrite; //assign textToWrite value to corresponding index of EventDisplay4 array
													 // if the contents were blank, it would push 'No eventDisplay4 Available.'
				}
			}  //end of eventDisplay4 for loop
   
   /////////////////////////////////////////////////////////////////////////////////////
   /////////////////////////////////////////////////////////////////////////////////////
  //----------------------------------
  
  	// Function to add to the dropdown
		function addToDropdown(text) {
		    var x = document.getElementById("TARGETFIELD");//Dropdown field you are replacing values in
			var option = document.createElement("option");
			option.text = text;
			x.add(option);
		}
  
 	 //-------------------------------------
	  
	  //Add the selected dropdown value into fields on select change
	  $(document).ready(function() {

	  //the id here should be for the FIELD on the form
	  //this line is listening for a change to the field in order to execute the code
	  $("#REPLACEVALUESFIELD").change(function(){
		
	var index = $('#REPLACEVALUESFIELD option:selected').index()-1;
	//alert('Selected Index is: ' + index);

	var indexLength =$('#REPLACEVALUESFIELD option').length;

	
	var CountIndex = $("#REPLACEVALUESFIELD")[0].selectedIndex;
		
   
	  });//Close tfa_XX-Change-function
	return;
	});//Close Document-ready-function  
});//Close- Load windows Function

</script>

