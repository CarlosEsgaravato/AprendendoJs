let num = [5, 8, 4, 7, 9]

num.push(1) //acrescenta o numero 1 que está no parentes
num.sort() //ordena crescente
console.log(num) // imprime o vetor todo
console.log(`O array tem ${num.length} posições`) //mostra a quantidade de numeros que possui
console.log(num[2]) //busca somente o array 2
let pos = num.indexOf(8) //busca em qual posição está o numero 8
if(pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
