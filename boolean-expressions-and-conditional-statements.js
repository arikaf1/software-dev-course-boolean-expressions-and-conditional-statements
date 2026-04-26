/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// Starting items
const hasTorch = true;
let hasMap = false;
let hasSword = false;
let hasCompass = false;

console.log("You wake up in a mysterious land...");
console.log("You see two paths: one leads to the mountains, the other to the village.");

const choice = readline.question("Do you go to the 'mountains' or the 'village'? ").toLowerCase();

if (choice === "mountains" && hasTorch) {
  console.log("\nYou safely navigate through the dark mountains.");

  // New scenario
  console.log("You discover a cave and find a compass.");
  hasCompass = true;

  const mountainChoice = readline.question("Do you enter the cave or climb higher? ").toLowerCase();

  if (mountainChoice === "cave") {
    console.log("\nA wild creature appears!");

    // Nested conditional with logical operators
    if (hasSword && hasCompass) {
      console.log("With your sword and compass, you defeat the creature. You win!");
    } else if (hasSword || hasCompass) {
      console.log("You manage to escape, but barely.");
    } else {
      console.log("You are unprepared and lose the battle.");
    }

  } else if (mountainChoice === "climb") {
    console.log("\nAt the peak, you find treasure. You win!");
  } else {
    console.log("You get lost in the mountains.");
  }

} else if (choice === "mountains" && !hasTorch) {
  console.log("\nIt's too dark to proceed. You decide to turn back.");

} else if (choice === "village" || hasMap) {
  console.log("\nYou find your way to the village.");

  // Gain new item
  console.log("A villager gives you a sword.");
  hasSword = true;

  const villageChoice = readline.question("Do you visit the 'market' or rest at the 'inn'? ").toLowerCase();

  if (villageChoice === "market") {
    console.log("\nYou find a map and supplies.");
    hasMap = true;

    // Nested condition using multiple items
    if (hasMap && hasSword) {
      console.log("With your map and sword, you become a legendary adventurer. You win!");
    }

  } else if (villageChoice === "inn") {
    console.log("\nYou rest at the inn...");

    // Using NOT operator
    if (!hasMap) {
      console.log("Without a map, you struggle to continue your journey.");
    } else {
      console.log("With your map, you plan your next adventure.");
    }

  } else {
    console.log("You wander aimlessly through the village.");
  }

} else {
  console.log("\nYou get lost and wander aimlessly.");
}