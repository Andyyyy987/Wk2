// // // // let Composers = [
// // // //     "Beethoven",
// // // //     "Haydn",
// // // //     "Martinu"
// // // // ];

// // // // Composers.push("Villa-Lobos");
// // // // Composers.push("Arnold");

// // // // console.log(Composers);

// // // // Composers.pop();

// // // // console.log(Composers);

// // // // Composers.splice(1, 0, "Janacek", "Dvorak");

// // // // console.log(Composers);

// // // let coffeeOrder = [
// // //     "Coffee",
// // //     "Cortado",
// // //     "Tea",
// // //     "Hot Choc",
// // //     "Water"
// // // ];

// // // for (let index = 3; index < coffeeOrder.length; index++){
// // //     console.log(coffeeOrder[index]);
// // // }

// // let multiplesTwo = [];

// // for (let i = 0; i < 20; i++){
// //     if (i % 2 ==0){
// //         multiplesTwo.push(i);
// //     }
// // }

// // console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

// // let counter = 0;

// // while (counter< 10) {
// //     console.log(counter);
// //     counter++;
// // }

// let age = 15;

// while(age < 18){
//     console.log("You're a child!");
//     age++;
// }

// console.log("You're an adult!");

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while(currentCard != "Spade"){

    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}

console.log(currentCard);