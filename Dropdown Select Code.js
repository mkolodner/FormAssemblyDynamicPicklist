<script>
/*
Date Modified: 11/29/2021
Modified Notes: Strips down Robert Wynter's example code to be much simpler (using fewer fields) 
Author: Michael Kolodner, based on work by Robert Wynter
The purpose of this script is to Prefill a dropdown on your form using the Salesforce Prefill Connector to get the values using a repeatable section.

Original code used tfa_45 field input from the hidden repeater section to display in the dropdown. This code will put the dynamic values into tfa_4
Original code took tfa_16 to get the campaign names. This code uses tfa_3

The example below, on Windows Load and Select change,
1. clears the dropdown list
2. Uses the connector to grab the Repeater section of selected fields based on a list of Campus Tour Campaigns
3. Loop through the Repeaters and get the Campaign Event Details and put them into an array
4. Add the Array values into the dropdown
5. On selected change, take those values and add them into fields
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
	document.getElementById("tfa_4").options.length=0;
	// Add the select option message (Can be anything you want wrapped in double quotes)
	var option = document.createElement("option");
	option.text = "This element has been taken over!!!!! ...";
	document.getElementById("tfa_4").add(option);//Dropdown field
 
  
 //Loop through repeater and get all the values for field and Add them to an Array
			
	  		// Gets all the fields from the form, including the hidden fields
			//Dropdown fields
	  		var dropdownAccount = document.getElementById("tfa_4");//Dropdown field to be updated
			
			// Text Repeater field
			var eventDisplay4Arr = [];// Array for storing all the dropdown names 
			var eventDisplay4Arr = document.querySelectorAll('[id^=tfa_3]'); // All the account names from repeating section
				  
			var textToWrite; // temp variable for writing to arrays

			//For all contents of the eventDisplay4 array (from repeater - tfa_3) ..
          for(var i in eventDisplay4Arr){
				
				//assign current iterations value to var.
		   		textToWrite = eventDisplay4Arr[i].value;
				
				//if it contains a value ...
				if (textToWrite) {
					//add the eventDisplay4 value to the tour selection 'main' dropdown
					addToDropdown(textToWrite); //This adds the text to the dropdown box ...
																		
					if (textToWrite == "" || textToWrite == null) {
						
						alert("EventDisplay4 TextToWrite BLANK - please contact administrator.");
		   				textToWrite = "No eventDisplay4 Available."; // Stores the event campaign in the array
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
		    var x = document.getElementById("tfa_4");//Dropdown field
			var option = document.createElement("option");
			option.text = text;
			x.add(option);
		}
  
 	 //-------------------------------------
	  
	  //Add the selected dropdown value into fields on select change
	  $(document).ready(function() {

	  //the id here should be for the FIELD on the form
	  //this line is listening for a change to the field in order to execute the code
	  $("#tfa_3").change(function(){
		
	var index = $('#tfa_3 option:selected').index()-1;
	//alert('Selected Index is: ' + index);

	var indexLength =$('#tfa_3 option').length;

	
	var CountIndex = $("#tfa_3")[0].selectedIndex;
	
	/*
		IF/ELSE loop is created to:
		1. check that you have selected an event
		2. based on Index value ==2 or higher because we have the static message in the dropdown,
		3. I need to use Javascript of jQuery. Not sure why this is but it works
	*/
	//if nothing is selected pop up message	 
	 if (CountIndex == 0) {
		alert("must select event ");
	}//end first if-statement

	else if (indexLength == 2){

	// ##########
	// #SELECTED REPEATABLE RECORDS FOR SELECTEDINDEX (jQuery FORMAT)
	// ##########	

	var eventDisplay4ToFind = $("#tfa_4")[index].value;  //EventDisplay4 Repeater
	}//end of second if
	else if (indexLength >2){
	//--------------------------	

	// ##########
	// #SELECTED REPEATABLE RECORDS FOR SELECTEDINDEX (Javascript FORMAT)
	// ##########
	//console.log(EventSelectedIndex);  

	var eventDisplay4ToFind = document.getElementById('tfa_4[' + index + ']').value;  //EventDisplay4 Repeater
	}//end of third if
		
		
   
	  });//Close tfa_XX-Change-function
	return;
	});//Close Document-ready-function  
});//Close- Load windows Function

</script>

