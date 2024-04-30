1. var is a global variable, so it will print the last value of the for loop, which in this case would be 3
2. It would output 150 since dicountedPrice is another global variable.
3. It would again output 150 since the math essentially cancels itself out.
4. It was return the array of discounted which would be [50, 100, 150].
5. error, i is not defined as it is only constrained to the for loop
6. discountedPrice is not defined as it only exists in the for loop. so it's another error.
7.  It will return 150 since finalPrice is outside the finalLoop
8.  It will return [50, 100, 150] because discounted was initalized with 'let' outside the for loop.
9.  there will be an error since i is not defined outside the for loop
10. it will output 3 cause that's the length of the prices array.
11. It will return the array [50, 100, 150] since that was what's inside discounted
12. 
a. student.name;
b. student["Grad Year"]
c. student.greeting();
d. student["Favorite Teacher"].name;
e. student.courseLoad[0];
13. 
a. 32, since 3 is a string so it basically "added" two strings into one.
b. 1, subtraction converts the 3 into an integer
c. 3, null is basically 0;
d. 3null, turned null into string.
e. 4, true is defined as 1.
f. 0, both are defined as 0.
g. 3undefined, turned undefined into a string.
h. nan, 3 is an integer and undefined is undefined meaning you cant really subtract something that is undefined from three.

14. 
a. true, both are turned into integers and 2 is greater than one.
b. false, when comparing two strings, the leftmost character gets compared, and 2 is greater than 1.
c. true, turns both into string and both are the same
d. false, === is a type comparetor and they're not the same type
e. false, true = 1 so true != 2;
f. true; they're both the same typing.

15. == compares values, === compares variable types.
16. check part2-question16.js
17. So the for loop basically pushes the value at array[i] after it "callback" which is doSomething. So it will push [2, 4, 6] into newArr and return newArr.
18. see part2-question18.js
19. 
1
4
3
2

