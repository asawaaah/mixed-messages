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

// store the random result 
let yourResult = [];

// Iterate over the object to generate a random resultt with one resultat for each of the 3 properties 
 for (let prop in moodOfTheDay) {
    let randomIndex = randomNumber(moodOfTheDay[prop].length)

// customize mssage using conditions
if (prop === 'breakfastFood') {
    yourResult.push(`Today you should eat ${moodOfTheDay.breakfastFood[randomIndex]} for breakfast`)
}
if (prop === 'foodStatus') {
    yourResult.push(`My rating for this breakfast is ${moodOfTheDay.foodStatus[randomIndex]}`)
}
if (prop === 'activity') {
    yourResult.push(`He is the program I suggest after you finish your breakfast: ${moodOfTheDay.activity[randomIndex]}`)
}

 };


 // format the array 'yourResult" so it is readable on 3 separate lines
const formattedResult = generatedMessage => {
    formatted = yourResult.join('\n');
    console.log(formatted);
}

 // Call the message genetor
 formattedResult();