const formatBRL = (value) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Minha primeira mensagem
function firstMessage() {
  console.log("Meu nome é João");
  console.log("ADS");
  console.log("Estou aprendendo JavaScript");
}

// Apresentação pessoal
function personalIntro() {
  const name = "João";
  const age = 20;
  const course = "ADS";

  console.log(`Nome: ${name}`);
  console.log(`Idade: ${age}`);
  console.log(`Curso: ${course}`);
}

// Alterando uma variável
function changeVariable() {
  let points = 10;
  console.log(`Pontos: ${points}`);

  points = 25;
  console.log(`Pontos: ${points}`);
}

// Tipos de dados
function dataTypes() {
  const values = {
    texto: "ADS",
    inteiro: 42,
    decimal: 3.14,
    booleano: true,
  };

  for (const [label, value] of Object.entries(values)) {
    console.log(`${label}: ${value} (${typeof value})`);
  }
}

// Soma de dois números
function sum() {
  const a = 15;
  const b = 8;

  console.log(`${a} + ${b} = ${a + b}`);
}

// Quatro operações
function fourOperations() {
  const a = 20;
  const b = 4;

  console.log(`Adição: ${a + b}`);
  console.log(`Subtração: ${a - b}`);
  console.log(`Multiplicação: ${a * b}`);
  console.log(`Divisão: ${a / b}`);
}

// Preço total de uma compra
function purchaseTotal() {
  const price = 35;
  const quantity = 4;

  console.log(`Total da compra: ${formatBRL(price * quantity)}`);
}

// Calculando um desconto
function discount() {
  const price = 200;
  const percent = 10;

  const discountValue = (price * percent) / 100;

  console.log(`Desconto: ${formatBRL(discountValue)}`);
  console.log(`Preço final: ${formatBRL(price - discountValue)}`);
}

// Média de três notas
function average() {
  const grades = [7, 8, 9];
  const total = grades.reduce((acc, grade) => acc + grade, 0);

  console.log(`Média: ${total / grades.length}`);
}

// Resto da divisão
function remainder() {
  const pairs = [[10, 3], [15, 4], [20, 5]];

  for (const [a, b] of pairs) {
    console.log(`${a} % ${b} = ${a % b}`);
  }
}

// Atualização de saldo
function balanceUpdate() {
  let balance = 500;

  balance += 150;
  balance -= 80;

  console.log(`Saldo final: ${formatBRL(balance)}`);
}

// Comparando idades
function compareAges() {
  const age = 17;

  console.log(`idade >= 18: ${age >= 18}`);
  console.log(`idade < 18: ${age < 18}`);
  console.log(`idade === 17: ${age === 17}`);
}

// Igualdade de valor e tipo
function equality() {
  console.log(`10 == "10": ${10 == "10"}`);
  console.log(`10 === "10": ${10 === "10"}`);
}

// Acesso ao sistema
function systemAccess() {
  const age = 20;
  const isActive = true;

  console.log(`Pode acessar: ${age >= 18 && isActive}`);
}

// Frete gratuito
function freeShipping() {
  const purchase = 100;
  const isVip = true;

  console.log(`Frete grátis: ${purchase >= 150 || isVip}`);
}

// Compra com desconto
function purchaseWithDiscount() {
  const product = "Teclado";
  const unitPrice = 80;
  const quantity = 3;
  const percent = 10;

  const subtotal = unitPrice * quantity;
  const discountValue = (subtotal * percent) / 100;
  const total = subtotal - discountValue;

  console.log(`Produto: ${product}`);
  console.log(`Subtotal: ${formatBRL(subtotal)}`);
  console.log(`Desconto: ${formatBRL(discountValue)}`);
  console.log(`Total: ${formatBRL(total)}`);
}

const exercises = [
  firstMessage,
  personalIntro,
  changeVariable,
  dataTypes,
  sum,
  fourOperations,
  purchaseTotal,
  discount,
  average,
  remainder,
  balanceUpdate,
  compareAges,
  equality,
  systemAccess,
  freeShipping,
  purchaseWithDiscount,
];

exercises.forEach((exercise, index) => {
  console.log(`\nExercício ${index + 1}`);
  exercise();
});
