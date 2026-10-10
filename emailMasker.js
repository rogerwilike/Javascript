function maskEmail(email) {
  // 1. Achar onde está o '@'
  let atIndex = email.indexOf("@");
  
  // 2. Separar o nome de usuário e o domínio
  let username = email.slice(0, atIndex);
  let domain = email.slice(atIndex); // pega a partir do '@' até o fim
  
  // 3. Pegar a primeira e a última letra do usuário
  let firstChar = username[0];
  let lastChar = username[username.length - 1];
  
  // 4. Repetir '*' para os caracteres do meio
  let stars = "*".repeat(username.length - 2);
  
  // 5. Retornar tudo montado
  return firstChar + stars + lastChar + domain;
}

// Requisitos 3 e 4 do teste: variável fora da função
let email = "apple.pie@example.com";
console.log(maskEmail(email));