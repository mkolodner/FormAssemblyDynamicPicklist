# FormAssemblyDynamicPicklist
Uses javascript to take the results of a repeating section on a FormAssembly form and fill a picklist with the resulting options. Makes a dynamic picklist even though you don't have Enterprise FormAssembly.

To use:
1. Create a form with a repeating section that gets filled upon form load. For example, a repeating section that looks up all Accounts of a certain record type and then puts their Account Name in a field.
2. Put the code from Dropdown Select Code.js into the custom code area of your form and edit it to use the right form field names.
3. Make the dropdown a variable called AccountName.
4. Make a calculated field (can be hidden) whose value is AccountName.
5. In your submit connector, you can use the calculated field's value to look up an account (by name).
