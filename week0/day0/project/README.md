# week0.day0.variables

## Variable basics

### 1. Create a file called `basics.js`
### 2. Data Types                                                               #RECOMMENDATION IMPLEMENTAION
- The Problem: All Star Code is hiring you (a All Star Code student) to create a system for a bookstore. The bookstore has
books. What kind of properties does a book intrinsically have? What data types should they be? String, Number or Boolean?
- In the `basics.js` file, declare these properties as variables.
- Print the values of these variables, each on its own line.
- Execute your JavaScript code using `node basics.js` on the command line to see whether everything works.

### 3. Fixing redundancy: StubHub

The following program has a lot of redundant calculations. Use variables to reduce the redundancy in the code.
Copy and paste this code into your `basics.js` file for editing.

```
// We're going to earn a profit by reselling tickets
// We bought some tickets to see SZA!
// 4 regular tickets for $45 each and 2 front row tickets for $75 each
console.log('Cost: ' + (45 * 4 + 75 * 2));

// we're selling them for 50% more lol.
console.log('Selling price: ' + (45 * 4 + 75 * 2) * 1.5);

// But StubHub, the online ticket selling platform, charges a 20% seller fee...
console.log('Seller fee: ' + (45 * 4 + 75 * 2) * 1.5 * 0.2);

// So here's our total profit:
console.log('Total profit: ' + ((45 * 4 + 75 * 2) * 1.5  - (45 * 4 + 75 * 2) * 1.5 * 0.2 - (45 * 4 + 75 * 2)));
```

## Variable mysteries

### 1. Variable reassignment

What is the value of `x` after the following code executes?

```
let x = 10;
x = x + 2;
x = x + x;
```

### 2. Copying values

What are the values of `pizza` and `burger` after the following code executes?

```
let pizza = 5;
let burger = 10;
burger = pizza;
pizza = 10;
```

- 1. `pizza` is 5; `burger` is 10
- 2. `pizza` is 10; `burger` is 10
- 3. `pizza` is 10; `burger` is 5
- 4. `pizza` is 5; `burger` is 5

### 3. Operators

What are the values of `pizza` and `burger` after the following code executes?

```
let pizza = 5;
let burger = 10;
burger = pizza;
pizza++;
burger--;
pizza /= 2;
pizza = burger % pizza;                                                         #RECOMMENDATION IMPLEMENTAION
```

## Spot the bug

### 1. `const` practice: Anti-aging

Why doesn't this code work?

```
const age = 17;
// I just had my birthday!
age++;
```

### 2. Redeclarations: username

Where is the error in the following snippet of code?

```
const username = 'vrk';
let username = '';
```

### 3. Booleans: yes and no

Where is the error in the following snippet of code?

```
const yes = true;
let no = FALSE;
console.log('no');
```

### 4. Look over this worksheet to help fill in any gaps. We’ll be reviewing these on Monday!
- *NOTE: this is NOT homework. From the past two years, students have REQUESTED worksheets, so I have provided them. Use them at your discretion!*
   - [Worksheet: Variables](https://docs.google.com/document/d/1NFH-9oMMxF3OOXiip0J1QQr5IqcdzudbW28IGXhRciw/edit?usp=sharing)
     - [Worksheet: Variables (Answers)](https://docs.google.com/document/d/1kJHMaaxc0JsfRK9kTXSveWgZ68d6R5wV3-0SAu2JtCs/edit?usp=sharing)
