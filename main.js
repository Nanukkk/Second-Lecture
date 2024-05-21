// First one
// function findYoungestPerson(users) {
//     if (users.length === 0) {
//         return null;
//     }

//     let youngestPerson = users[0];

//     for (let i = 1; i < users.length; i++) {
//         if (users[i].age < youngestPerson.age) {
//             youngestPerson = users[i];
//         }
//     }

//     return youngestPerson.name;
// }

// const users = [
//     { name: 'Temo', age: 25 },
//     { name: 'Lasha', age: 21 },
//     { name: 'Ana', age: 28 }
// ];

// const youngestName = findYoungestPerson(users);
// console.log("Youngest person's name:", youngestName);


// Second one
function cloneUser(originalUser) {
    const newUser = { ...originalUser };
    return newUser;
}

const originalUser = { name: 'John', age: 30, email: 'john@example.com' };
const clonedUser = cloneUser(originalUser);

console.log('Original User:', originalUser);
console.log('Cloned User:', clonedUser);


// Third one
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
    let rollsA = 0;
    let rollsB = 0;

    while (true) {
        rollsA++;
        const resultA = rollDice();
        console.log("Customer A rolled:", resultA);

        if (resultA === 6) {
            console.log("Customer A wins!");
            break;
        }

        rollsB++;
        const resultB = rollDice();
        console.log("Customer B rolled:", resultB);

        if (resultB === 6) {
            console.log("Customer B wins!");
            break;
        }
    }

    if (rollsA < rollsB) {
        console.log("Customer A wins with fewer rolls:", rollsA);
    } else if (rollsB < rollsA) {
        console.log("Customer B wins with fewer rolls:", rollsB);
    } else {
        console.log("It's a tie!");
    }
}

playGame();



















