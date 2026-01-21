# Numerical Palindromes

## Overview

The challenge of the month is generating numerical palindromes. That is finding numbers that are the same forwards as they are backwards. A few examples are 0, 1, 5, 22, 101, 181, 1991, 2222, 22122, 24542, etc.

For the purpose of this exercise
- All negative numbers are *NOT* numerical palindromes    
- Zero is a numerical palindrome
- All single positive numbers are numerical palindromes
- Two digit numbers are palindromes when they are the same number in both positions
- Three digit numbers (or odd numbers in general) you can have any number in the middle as long as the rest of the number is a numerical palindrome
- We should only consider mathematical integers though you may wish to use the largest integer based data type your language supports

Once you have determined if a number is a palindrome try to see how long it takes you to generate the first 10,000 palindromes.

See if you can tune the algorithm and the code to generate correct results but in less time.

## One Possible Workflow

1. Use Test Driven Development to develop an IsPalindrome(x) method. Consider data driven tests if your framework supports it.
2. Use Test Driven Development to develop a NextPalindrome(x) method. 
3. Use a console application (or a test) to generate the first X number of palindromes and time how long it takes using a brute force approach. Use 10,000 for X.
4. Update the console application starting at Y to generate the next X number of palindromes and time it. Use 10,000 for X and 100,000,000 for Y. How does this compare to the time of #2?
5. Consider writing out first 10,000 matches to a file for both categorization testing and for visualizing a pattern.
6. Revisit the brute force algorithm and the first 10,000 matches to see if there is a more efficient approach.
7. Does your new algorithm still generate the same first 10,000 matches as brute force? Compare performance with brute force.
8. Can you identify any bottlenecks or poor performing code that you could improve? Experiment and measure times.

## Project Structure

This repository contains:

- **Templates/** - Starting templates for multiple languages:
  - C# (with solution, project, and test project setup)
  - Java (with Gradle build configuration)
  - JavaScript (with Jest testing)
  - Kotlin (with Gradle build configuration)
  - Python (with pytest setup)
  - TypeScript (with Jest testing)

- **Solutions/** - Place your completed solutions here

Choose a template in your preferred language, copy it to the Solutions folder, and start coding!
