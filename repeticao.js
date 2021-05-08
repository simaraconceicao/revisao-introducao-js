function pulaCorda() {
    console.log('Pulei a corda com function 1')
    console.log('Pulei a corda com function 2')
    console.log('Pulei a corda com function 3')
    console.log('Pulei a corda com function 4')
    console.log('Pulei a corda com function 5')
    console.log('Pulei a corda com function 6')
    console.log('Pulei a corda com function 7')
    console.log('Pulei a corda com function 8')
    console.log('Pulei a corda com function 9')
    console.log('Pulei a corda com function 10')
}

pulaCorda();

console.log('partida')
for(let i = 1; i <=3; i++) {
    console.log(`Pulei a corda com for ${i}`)
}
console.log('chegada')

console.log('partida')
let i = 1;
while(i <=3) {
    console.log(`Pulei a corda com while ${i}`)
    i++
}
console.log('chegada')

console.log('partida')
let index = 1;
do{
    console.log(`Pulei a corda com do...while ${index}`) 
    index++
}while(index<=3)
console.log('chegada')
