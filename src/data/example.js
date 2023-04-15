const array = [10, 13, 25, 23, 14]
const object = {a: 10, b: 15, c: 30}

array[2] // 25
object.b // 15
object["b"] // 15

const datos = [{
usuario: "c215714n",
capacitaciones: [
    "html",
    "css",
    "js"
],
cursos: [{
    nombre: "react-js",
    dias: "sabados",
    inicio: "10hs",
    fin: "13hs"
}]
}]

datos[0]['cursos'][0][nombre] // react-js
datos.usuario // c215714n
Object.keys(datos[0]) // [usuarios, capacitaciones, cursos]