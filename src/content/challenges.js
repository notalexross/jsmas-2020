const challenges = [
  {
    title: `Candies`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/co9654a9abdeed829f2fc50ad`,
    description: `n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.`
  },
  {
    title: `Deposit Profit`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/co2bc41158f83d68b93de75c2`,
    description: `You have deposited a specific amount of dollars into your bank account. Each year your balance increases at the same growth rate. Find out how long it would take for your balance to pass a specific threshold with the assumption that you don't make any additional deposits.`
  },
  {
    title: `Chunky Monkey`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/co4a04adc9c8f37be6ddcd635`,
    description: `Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.`
  },
  {
    title: `Century From Year`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/coa08437d9a817fd8f8407aa0`,
    description: `Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.`
  },
  {
    title: `Reverse A String`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/co9c749d696e3a22fdf55dbac`,
    description: `Reverse the provided string. You may need to turn the string into an array before you can reverse it. Your result must be a string`
  },
  {
    title: `Sort By Length`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/co0ad4279a0dbd6e73ae31f19`,
    description: `Given an array of strings, sort them in the order of increasing length. If two strings have the same length, their relative order must be the same as in the initial array.`
  },
  {
    title: `Count Vowel Consonant`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/co9cd44d0ab372d18db443761`,
    description: `You are given a string s that consists of only lowercase English letters. If vowels ('a', 'e', 'i', 'o', and 'u') are given a value of 1 and consonants are given a value of 2, return the sum of all of the letters in the input string.`
  },
  {
    title: `Rolling Dice`,
    author: `Ania Kubow`,
    authorURL: `https://twitter.com/ania_kubow`,
    scrimURL: `https://scrimba.com/scrim/coe5d47eb813e342ffe6715d6`,
    description: `In this challenge a casino has asked you to make an online dice that works just like it would in real life. Using the pre-made dice face that represents ‘one’, make the faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the dice on the screen the dice is expected to show one of the faces randomly.`
  },
  {
    title: `Sum Odd Fibonacci Numbers`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/co6db4a2796205397b5a08f28`,
    description: `Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.`
  },
  {
    title: `Adjacent Elements Product`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/co5b9490da8e9f9e22a9be452`,
    description: `Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.`
  },
  {
    title: `Avoid Obstacles`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/coe91443a8b756d463051232b`,
    description: `You are given an array of integers representing coordinates of obstacles situated on a straight line. Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer. Find the minimal length of the jump enough to avoid all the obstacles.`
  },
  {
    title: `Valid Time`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/cof5f432b866fe78810c62994`,
    description: `Check if the given string is a correct time representation of the 23-hour clock.`
  },
  {
    title: `Extract Each Kth`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/co530415fb1cdf38ecd0d1e2b`,
    description: `Given array of integers, remove each kth element from it.`
  },
  {
    title: `Maximal Adjacent Difference`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/co4e44ee7ba2f91829aa43043`,
    description: `Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.`
  },
  {
    title: `JavaScript Carousel`,
    author: `Gary Simon`,
    authorURL: `https://twitter.com/designcoursecom`,
    scrimURL: `https://scrimba.com/scrim/coa8e4bd5acd2a3d60cec566c`,
    description: `Use JS to make a Carousel. Left & right arrows should work. Bonus: Use CSS transitions.`
  },
  {
    title: `Inset Dashes`,
    author: `Alex Booker`,
    authorURL: `https://twitter.com/bookercodes`,
    scrimURL: `https://scrimba.com/scrim/co0574754a0ddfe284bed37e6`,
    description: `Transform a given sentence into a new one with dashes between each two consecutive letters.`
  },
  {
    title: `Different Symbols Naive`,
    author: `Alex Booker`,
    authorURL: `https://twitter.com/bookercodes`,
    scrimURL: `https://scrimba.com/scrim/co9b644c79c22f6840834b03a`,
    description: `Given a string, find the number of different characters in it.`
  },
  {
    title: `Array Previous Less`,
    author: `Alex Booker`,
    authorURL: `https://twitter.com/bookercodes`,
    scrimURL: `https://scrimba.com/scrim/co47c48e38528acad6e8a40fe`,
    description: `Given an array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store that value at position i in the answer. If no such value can be found, store -1 instead.`
  },
  {
    title: `Alphabet Sub-Sequence`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/co5aa4c4d84c80bda31464438`,
    description: `Check whether the given string is a sub-sequence of the plaintext alphabet`
  },
  {
    title: `Domain Type`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/co98e41538de704e32fb44ee2`,
    description: `GoDaddy makes a lot of different top-level domains available to its customers. A top-level domain is one that goes directly after the last dot ('.') in the domain name, for example .com in example.com. To help the users choose from available domains, GoDaddy is introducing a new feature that shows the type of the chosen top-level domain. You have to implement this feature. To begin with, you want to write a function that labels the domains as "commercial", "organization", "network", or "information" for .com, .org, .net, or .info respectively. For the given list of domains return the list of their labels.`
  },
  {
    title: `Sum of 2`,
    author: `Dylan C. Israel`,
    authorURL: `https://twitter.com/PizzaPokerGuy`,
    scrimURL: `https://scrimba.com/scrim/co1e745678f390c5d57ead555`,
    description: `You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.`
  },
  {
    title: `Extract Matrix Column`,
    author: `James Q. Quick`,
    authorURL: `https://twitter.com/jamesqquick`,
    scrimURL: `https://scrimba.com/scrim/co42f4cc3805636e5e7cb219d`,
    description: `Given a rectangular matrix and an integer column, return an array containing the elements of the columnth column of the given matrix (the leftmost column is the 0th one).`
  },
  {
    title: `Social Media Input`,
    author: `Danny Thompson`,
    authorURL: `https://twitter.com/DThompsonDev`,
    scrimURL: `https://scrimba.com/scrim/co20d4bad80a96dbe6f083cd5`,
    description: `We are making a Social Media Character Counter! We want to display the available characters LEFT. Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.`
  },
  {
    title: `Test Your Agility`,
    author: `Carla Marzari`,
    authorURL: `https://twitter.com/CarlaNotarobot`,
    scrimURL: `https://scrimba.com/scrim/co77f49c19ea46c68aab7a1fd`,
    description: `Make a counter that increments every 75 milliseconds in the spin() function and display whether the player wins or loses in the stop() function.`
  }
]

export default challenges