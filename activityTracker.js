/*
* Nicole Rodriguez
* CS81 Summer 2025
* Module 5b Homework
* 7/13/25
*/

//Create an array that contains the data for my week.
const myWeek = [
  { day: "Monday", activity: "Running", category: "exercise", hoursSpent: 1.5, enjoyment: 8, timeOfDay: "morning", mood: "energized" },
  { day: "Tuesday", activity: "Writing", category: "creative", hoursSpent: 2, enjoyment: 7, timeOfDay: "afternoon", mood: "calm" },
  { day: "Wednesday", activity: "Painting", category: "creative", hoursSpent: 1, enjoyment: 9, timeOfDay: "evening", mood: "happy" },
  { day: "Thursday", activity: "Dancing", category: "exercise", hoursSpent: 2.5, enjoyment: 8, timeOfDay: "morning", mood: "energized" },
  { day: "Friday", activity: "Ceramics", category: "creative", hoursSpent: 1.5, enjoyment: 8, timeOfDay: "evening", mood: "relaxed" },
  { day: "Saturday", activity: "Hiking", category: "exercise", hoursSpent: 3, enjoyment: 9, timeOfDay: "afternoon", mood: "happy" },
  { day: "Sunday", activity: "Film Club", category: "social", hoursSpent: 2, enjoyment: 7, timeOfDay: "evening", mood: "content" }
];

/*
* Predictions:
* - I think "Hiking" on Saturday will be the most enjoyable activity.
* - I think that the "creative" category will be the most common this week.
* - I predict that activities in the evening might be more enjoyable.
*/

//Function to find most enjoyable activity
function mostEnjoyableActivity(log) {
  // Use reduce to go through each activity and find the most enjoyable one
  const mostFun = log.reduce((currentMostFun, current) =>
    // Compare the enjoyment scores between current and currentMostFun
    // If the first statement is true, return current otherwise return currentMostFun
    current.enjoyment > currentMostFun.enjoyment ? current : currentMostFun
  );

  // Return just the name of the most enjoyable activity
  return mostFun.activity;
}

//Function to find the most common category
function mostCommonCategory(log) {
  // use map to make a list of all category names
  const categories = log.map(entry => entry.category);

  // find only unique categories
  const uniqueCategories = [...new Set(categories)];

  // initialize variables
  let mostCommon = "";
  let highestCount = 0;

  // nested function to help count how many times a category appears
  function countCategory(category) {
    return log.filter(entry => entry.category === category).length;
  }

  // loop through each unique category and update mostCommon if needed
  for (let category of uniqueCategories) {
    const count = countCategory(category);

    if (count > highestCount) {
      highestCount = count; 
      mostCommon = category;
    }
  }

  // Return the mostCommon activity
  return mostCommon;
}

// higher-order function that filters myWeek based on a test function
function findLowEffortHighEnjoyment(testFn) {
  return myWeek.filter(testFn);
}

//find low effort high enjoyment activities
const lowEffortHighEnjoyment = findLowEffortHighEnjoyment(entry =>
  entry.hoursSpent <= 1.5 && entry.enjoyment >= 8
);


