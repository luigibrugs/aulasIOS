
let nomeCompleto = "Joao Pedro Silva Carvalho";
let partes = nomeCompleto.split(" ");  // o espaço é o delimitador
let sobrenome = partes[partes.length - 1];
console.log(`O nome do usuário é ${partes[0]}.`);
console.log(`O sobrenome do usuário é ${sobrenome}.`)
