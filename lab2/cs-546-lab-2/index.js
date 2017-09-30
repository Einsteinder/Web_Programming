const printShape = require("./printShape");
let n = 2
let m = 1
let k = 2
while(n<12){
    printShape.printSquare(n)
    n++
}
while(m<11){
    printShape.printTriangle(m)
    m++
}
while(k<22){
    printShape.printRhombus(k)
    k+=2
}

