console.log("Abra o arquivo scripts.js.");
function Person(name) {
  this.name = name;
  this.walk = () => {
      console.log(this.name + ' está andando')
  }
}
const marcelo = new Person("Marcelo")
console.log(marcelo);
const joao = new Person("João")
console.log(joao)
console.log(marcelo.walk())
console.log(joao.walk())


//Construtores do JS
    //String:
    let nome = new String('Marcelo')
    console.log(nome)
    //Number:
    let number = new Number(2)
    console.log(number)
    //Date:
    let date = new Date('2021-11-18 11:39:00')
    console.log(date)
