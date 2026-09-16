// Armazena uma string original em uma constante, que nao pode ser reatribuida.
const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

// Cria uma nova string trocando a primeira ocorrencia de "cats" por "dogs".
const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

// Guarda uma frase com duas ocorrencias da palavra "cats" para demonstrar replaceAll().
const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

// Cria uma nova string substituindo todas as ocorrencias de "cats" por "dogs".
const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

// Armazena uma frase usada como exemplo de texto antes da repeticao.
const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

// Repete "love " tres vezes e remove o espaco extra no final da nova string.
const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

// Monta uma nova frase inserindo o valor de repeatedLove com template literal.
const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);