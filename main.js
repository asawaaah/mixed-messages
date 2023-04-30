// Generate a random number up to the latest item of an array
const randomNumber =(num) => {
    return Math.floor(Math.random () * num)
};

// Object of arrays to generate random result
const moodOfTheDay = {
    breakfastFood: ['Eggs', 'Pancakes', 'Fruit Salad', 'Nutella Toast', 'Cereals with Milk'],
    foodStatus: ['Meeeh~~', 'Delicious', 'Good choice', 'Satisfying', 'not healthy'],
    activity: ['Play video games', 'Continue your lesson', 'Prepare your interview', 'Do some exercises', 'Go back to bed']
};

// Generate a random index for each property
const breakfastIndex = randomNumber(moodOfTheDay.breakfastFood.length);
const foodStatusIndex = randomNumber(moodOfTheDay.foodStatus.length);
const activityIndex = randomNumber(moodOfTheDay.activity.length);

// Store the random result 
const yourResult = [
    `Today you should eat ${moodOfTheDay.breakfastFood[breakfastIndex]} for breakfast`,
    `My rating for this breakfast is ${moodOfTheDay.foodStatus[foodStatusIndex]}`,
    `Here is the program I suggest after you finish your breakfast: ${moodOfTheDay.activity[activityIndex]}`
];

// Format the array 'yourResult" so it is readable on 3 separate lines
const formattedResult = generatedMessage => {
    formatted = yourResult.join('\n');
    console.log(formatted);
};

// Call the message generator
formattedResult();
