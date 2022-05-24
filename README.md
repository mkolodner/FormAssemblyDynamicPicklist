# FormAssemblyDynamicPicklist
Uses javascript to take the results of a repeating section on a FormAssembly form and fill a picklist with the resulting options. Makes a dynamic picklist even though you don't have Enterprise FormAssembly.

To use:
1. Create a form with a dropdown and a repeating section that gets filled upon form load. For example, a repeating section that looks up all Accounts of a certain record type and then puts their Account Name in a field (the label for the drop down) and their Account Id in a field (the value to send to Salesforce).
2. Put the code from Dropdown Select Code.js into the custom code area of your form and edit it to use the right form field names (the dropdown, Account Name and Account Id)
3. Make the dropdown a variable called AccountName.
4. Make a calculated field (can be hidden) whose value is the Id of the selected Account.
5. In your submit connector, you can use the calculated id to send to Salesforce.

If you'd like to see an example, this form is connected to a sandbox: https://www.tfaforms.com/4949317

The other file in this repo, Dropdown Select Code with Field Copying.js, does the same basic thing as Dropdown Select Code.js but it also allows for displaying fields from the selected option in fields on your form. This way when someone chooses a record they can see not just the name of what they have chosen but other fields as well, such as Start Date and End Date for a program. The code is commented so it should be pretty easy to use. But if this is intimidating, just use the basic Dropdown Select Code.js and don't worry about it.
