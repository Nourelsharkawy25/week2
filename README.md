# week2
1. primitive types and reference types
	- Primitive values are atomic pieces of data while reference values are objects that might consist of multiple values
	- we have 2 locations to store data named stack and heap
	- stack store static data whose size is fixed like
		- primitive values (built-in data types)
		- reference values to objects which created in heap
	- but there is very important trick **strings are primitive data type** but it converts to objects to use methods 
	- A reference value allows you to add, change, or delete properties
	  so we should store objects with const but primitive don't have properties.
	- in copying : if you assign a primitive value to another variable , js will locate another location to variable and store this value in it separately and change of one of them don't affect other , on the other hand , if it reference type it will create a reference so that both variables refer to the same object and affect each other.
---------------------
2. Function Declaration and Function Expression
	1. first, we discuss code function declaration like
		```js
		function IEEE(paramA, paramB) {  
	    // Set of statements  
		}
		```
		 - must have a function name.
		 - function in the function declaration can be accessed before and after the function definition. so , it hoisted to top at compile time.
		 - it looks for methods at "initialization stage".
	1. function exp :
		 - `` let x= function(paramA) {  // Set of statements}``
		 - Function expressions load and execute only when the program interpreter reaches the line of code.
		 - Omitting a name is allowed for Function Expressions.
		 - Not hoisted; must be defined before use
-----------
3. Pure Function
	1. we must pass 2 conditions to call function is pure
		1. The function always returns the same result if the same arguments are passed in.
		2. It does not change anything outside of its scope 
	2. let's explain why it is important:
		- Pure functions are easier to test because they have predictable behavior and do not modify any state or have side effects
		- what is side effects?
			- An observable side effect is **any** interaction with the outside world from within a function. That could be anything from changing a variable that exists outside the function
		* is used in functional programming
			* One of the major benefits of using pure functions is they are immediately testable.
		* Not all functions need to be , or should be, pure.
			* if you want to manipulate the DOM to manage behavior of button ,then use impure functions.
		* **but remember this trick**:
			* in use impure functions you should isolate logic part in pure function. like this:
			```js
			function shouldHideBox(userRole) {
				  return userRole !== "admin";
				}

			button.addEventListener("click", function () {
			  if (shouldHideBox("guest")) {
			    document.getElementById("box").style.display = "none";
			  }
			});

			```

--------------
4. Destructive and Non-Destructive Array Methods
	- Destructive methods permanently change an original array and do not create new copy of the original like : - 
		- pop / push
		- shift / unshift
		- splice
		- sort
		- delete
	- The non-Destructive approach does not modify the original data instead of it creates a new array or object like :-
		-  slice
		- concat
		- filter / find
		- map
---------------

