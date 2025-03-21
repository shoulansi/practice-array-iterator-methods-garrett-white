let favoriteCities = ["Chesterfield", "Ballwin", "Manchester", "Valley Park", "Warrenton"];
favoriteCities.forEach(city => {
    console.log(city.toUpperCase());
});

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(number => number ** 2);
console.log(squares);

let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);
console.log(highScores);

let favoriteFood = ['Sushi', 'Pizza', 'Tacos', 'Mac and Cheese', 'Chicken', 'Fruit'];
let longFood = favoriteFood.find(food => food.length > 4);
let foodIndex = favoriteFood.findIndex(food => food === longFood);

console.log(longFood);
console.log(foodIndex);
