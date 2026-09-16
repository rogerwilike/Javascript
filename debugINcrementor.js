let counter = 10;
console.log(`Counter is currently ${counter}`);

// Prefixo: o ++ vem antes da variavel. Primeiro aumenta counter para 11,
// depois guarda o novo valor em updatedCounter.
let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

// Pos-fixo: o ++ vem depois da variavel. Primeiro guarda 8 em finalScore,
// depois aumenta score para 9.
let finalScore = score++;
console.log(`Score value returned first: ${finalScore}`);
console.log(`Score after increment: ${score}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

// Prefixo com decremento: o -- vem antes. Primeiro diminui coins para 2,
// depois guarda o novo valor em updatedCoins.
let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

// Pos-fixo com incremento: primeiro guarda 7 em newHealth,
// depois aumenta health para 8.
let newHealth = health++;
console.log(`Health value returned first: ${newHealth}`);
console.log(`Health after increment: ${health}`);