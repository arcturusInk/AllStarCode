# week0.day1.loops

## Instructions
1. For now, when working in groups it’s OK to share one person’s computer or use a collaborative online platform like [collabedit](http://collabedit.com/). Later this week, we’ll get into using a similar functionality in VS Code called VS Live Share!
2. In command line, navigate to your “Documents” Folder and create a new folder called “loops”
3. Navigate into the new “loops” folder and create a new file called “loops.js”
4. Open the folder in the VS Code editor:
   - *Tip: the `code` command has been added to your console. You can type `code .` (note the space and period) to open the folder in VS Code from the console.*
5. Make the following changes in the “loops.js” file:
   - Create a variable called “foods” and set it equal to an array of 3 strings of your favorite foods.
   - Test to make sure your code runs without error. Save the file and in the console, run the command `node loops.js`. If everything’s working...nothing should happen!
   - Create a basic “for” loop that loops through each item of the “foods” array and console.logs the item
     - Test your code by running the command “node loops.js”. If everything’s working, you should see the three foods printed to the console.
   - Add two more strings directly to the “foods” array. Does your code still print all of the items in the array?
     - To get the “for” loop to display all of the items now, what ONE thing needs to change? Make the change to get the “for” loop to display all items and test your code.
   - Did you change one number to another number? Good robust code can handle when things change. Right now, when your “foods” array changes YOU, a human being, have to go into the code and change the number in the “for” loop. BOO!
     - In the “for” loop, instead of hard-coding the number, have the computer supply the number! What does that number correspond to?
     - When you’ve made the change, call over an instructor and have them modify your “foods” array (either add or remove strings from the original array).
         - If your code doesn’t run properly, try again! We all make mistarkes.
     - *Hint: Look into [Array Properties](https://www.w3schools.com/Jsref/jsref_obj_array.asp)*
   - Well done! We’ll go over a similar kind of loop known as the “for of” loop. Keep your “foods” array, but comment out your “for” loop.
   - *Tip: Keyboard Shortcut to comment out selected lines is `Ctrl + /`*
   - Try the following code:
      ```javascript
      for ( const item of foods ){
         console.log(item);
      }
      ```
   - Run the code. How does the “for of” loop work differently?
6. Moving onto 'while' loops. The Problem: Display the value of a variable called 'counter', while decreasing the variable by 1 in each iteration, as long the variable stays positive.
    - Create a variable called 'counter' and set it equal to 5
    - Display the variable, 'counter' - using, console.log() - to the console to test if it has been properly set to 5.
      - Save the file and in the console, run the command `node loops.js`. You know you have correctly declared the variable if you see 5 outputted on the console.
    - In the condition for a 'while' loop, check to see if the variable is greater than zero (as the problem specifies, the loop runs while 'counter' stays positive)
    - Display the 'counter' variable within the loop
    - Make sure you are working toward the exit condition within the loop by decreasing 'counter' by 1 in each iteration
      - Check out the section on assignment operator in [W3Schools](https://www.w3schools.com/js/js_operators.asp) if you are having trouble with the last step
7. If you’re done before time, try the Extra Credit!
8. Look over this worksheet to help fill in any gaps. We’ll be reviewing these on Monday!
  - *NOTE: this is NOT homework. For the past two years, students have REQUESTED worksheets, so I have provided them. Use them at your discretion!*
    - [Worksheet: Loops](https://docs.google.com/document/d/1dhigvTqBtSZ2hDeCZW5Re1KACJhXzyC9_aNwTGn5WtQ/edit?usp=sharing)
      - [Worksheet: Loops (Answers)](https://docs.google.com/document/d/1lcziRMrAfGcJ9rNApYpsGLCLatONfnilURRhAO2CAXY/edit?usp=sharing)

## Extra Credit
- Add `console.log(foods);` at the bottom of your code (outside of the “for” loop):
  - We’ll be using this to check on what happens to the foods array AFTER the “for” loop executes
  - Within your “for” loop, right before the `console.log`, change the current item in the array by adding `" is soooo good!"` at the end of it.
    - *Tip: You can add to a string by using the plus “+” sign, for example:*
         ```javascript
         "Pizza" + " is soooo good!";
         ```
  - When you run the code, the last `console.log` should show the “foods” array has been changed!
  - If you’re not seeing the change, think about what you’ve assigned to the new string...is it a variable OR a direct indexed reference in the array?
  - Try doing the same with the “for of” loops. Is it possible to alter the array using this kind of loop?

## Helpful Resources
- [Collabedit](http://collabedit.com/)
- [W3Schools Array Reference](https://www.w3schools.com/Jsref/jsref_obj_array.asp)
