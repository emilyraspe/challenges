console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "This is a title";
const text = "This is a text for the social media post";
let numberOfLikes = 123;
const userOfPost = "Name";
const isReported = true;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log("Title ", title);
console.log("Text ", text);
console.log("Number of Likes ", (numberOfLikes += 1));
console.log("User Of Post ", userOfPost);
console.log("Is Reported", isReported);

// --^-- write your code here --^--
