Introduction
I'm using React-app to build this app.
I'll try to document the best i can from where i learned some of the features that i'm using.

Features 
- Drop down on the top Left has drop downs Show All, Categorized and uncategorized
- Used Lodash to debounce the search bar so it doesn't automatically updating, giving a better, less laggy typing experience
- Using Bootstrap to provide most of the CSS features. 
- Added Filter through clicking on Table Header. Referenced some code from Stack overflow for smaller components like array comparing and how to sort with array of objects.  
- When Organize is unchecked, Row is disabled and considered "categorized"
- When Organize is checked, row is still active and considered "uncategorized"
- Folder can be reassigned for any active "uncategorized" row
- Folder Color changes with reassignment.  
- Folder color will gray out when row is disable and considered "categorized"

Referenced
React docs website - https://facebook.github.io/react/
Udemy - Modern React with Redux 
Object Sorting - http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
comparing arrays - http://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript

extra library's
- using Bootstrap
- lodash to debounce to search bar
