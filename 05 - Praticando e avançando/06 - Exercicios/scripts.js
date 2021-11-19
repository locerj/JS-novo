console.log('Abra o arquivo scripts.js.')
// 1. Declare uma variável de nome stars
 var stars;
// 2. Que tipo de dado é a variável acima?
undefined
/* 
    3. Declare uma variável e atribua valores para cada dado.
        - name: String
        - age: Number (integer)
        - wight: Number (float)
        - isSubscribed: Boolean 
*/
let nome, age, wight, isSubscribed
nome = 'Marcelo'
age = 38
wight = 4.5
isSubscribed = true

/* 
    4. A variável student abaixo é de que tipo de dados?
        tipo Object

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3. 
    
    4.2 Mostre no console a seguinte mensagem:

        <nome> de idade <age> pesa <wight> kg.
        Atenção, substitua <nome>, <age> e <wight> pelos valores de cada proprieade 
        do objeto

*/
let student = {nome: 'Marcelo', age: 38, wight: 4.5, isSubscribed: true}

console.log(`${student.nome} de idade ${student.age} pesa ${student.wight}`)

/* 
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor,
    ou seja somente o Array vazio. 
*/
let students = []

/* 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da 
    questão 4, (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no 
    Array.
*/

students = [student]

// 7. Coloque no console o valor da posição zero do Array acima.
console.log(student[0])

// 8. Crie um novo student e coloque na posição 1 do Array students

let student2 = {
    nome: 'john',
    age: 34,
    wight: 76.8,
    isSubscribed: false,
}
students[1] = student2
console.log(students)

/* 
    9. Sem rodar o código responda:
    Qual é a resposta do código abaixo e porque?
    pós sua resposta, rode o código e veja se voê acertou.
*/

/*
    console.log(a)
    var a= 1
*/
 undefined