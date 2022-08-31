// --------EXERCICIO 1-------------
// function somarDoisValores(valor1,valor2){
//     return valor1+valor2 
// }
// console.log(somarDoisValores(15,876))

// --------EXERCICIO 2-------------
// function tipoDeValor(valor){
//     return `o valor ${valor} é do tipo ${typeof(valor)}`
// }
// console.log(tipoDeValor(true))

// --------EXERCICIO 3-------------
function somarNotas(n1,n2){
    if (typeof(n1)!="number" || typeof(n2)!="number"){
        return "a função só pode receber números"
    }else{
        return n1+n2
    }
}
console.log(somarNotas(8,"6"))
console.log(somarNotas(8,6))