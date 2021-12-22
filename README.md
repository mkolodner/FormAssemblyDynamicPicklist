# FormAssemblyDynamicPicklist
Uses javascript to take the results of a repeating section on a FormAssembly form and fill a picklist with the resulting options. Makes a dynamic picklist even though you don't have Enterprise FormAssembly.

To use:
1. Create a form with a dropdown and a repeating section that gets filled upon form load. For example, a repeating section that looks up all Accounts of a certain record type and then puts their Account Name in a field (the label for the drop down) and their Account Id in a field (the value to send to Salesforce).
2. Put the code from Dropdown Select Code.js into the custom code area of your form and edit it to use the right form field names (the dropdown, Account Name and Account Id)
3. Make the dropdown a variable called AccountName.
4. Make a calculated field (can be hidden) whose value is the AccountName variable.
5. In your submit connector, you can use the calculated id to send to Salesforce.

If you'd like to see an example, this form is connected to a sandbox: https://www.tfaforms.com/4949317
