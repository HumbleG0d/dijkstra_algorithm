import { dijkstra } from './dijkstra.js'
import { drawGraph } from './graph.js'

/* const graph = {
 	a: { b: 16, c: 10 , d: 5 },
 	b: { a: 16, c: 2, f: 4, g: 6},
 	c: { a: 10, b: 2 , d: 4,f: 12, e: 10},
 	d: { a: 5, c: 4 , e: 15},
 	e: { d: 15, c: 10, f: 3, z: 5},
 	f: { b: 4, c: 12, e: 3, g: 8 , z : 16},
 	g: { b: 6, f: 8, z: 7},
 	z: { e: 5, f: 16, g: 7}
 }
*/
const graph = document.getElementById('grafo')
let grafo
graph.addEventListener('keyup' , () => {
	grafo = graph.value
})


const nodo_inicial = document.getElementById('nodo_inicial')
let nodo1
nodo_inicial.addEventListener('keyup' , () => {
	nodo1 = nodo_inicial.value
})


const nodo_final = document.getElementById('nodo_final')
let nodo2
nodo_final.addEventListener('keyup' , () => {
	nodo2 = nodo_final.value
})

let bandera = false
let highlightedEdges = []

const mostrar = document.getElementById('view')
mostrar.addEventListener('click' , (e) => {
	e.preventDefault()
	drawGraph(eval('(' + grafo + ')') , highlightedEdges , bandera)
})

const calcular = document.getElementById('button')
calcular.addEventListener('click' , (e) => {
	e.preventDefault()
	const p = document.getElementById('path')
	const p2 = document.getElementById('distance')
    
	const {path,distance} = dijkstra(eval('(' + grafo + ')'), nodo1 , nodo2)
	bandera = true
	highlightedEdges = []
	for(let i = 0 ; i < path.length-1 ; i++){
		highlightedEdges.push({from: path[i] , to: path[i+1]})
	}
	drawGraph(eval('(' + grafo + ')')  , highlightedEdges , bandera)
	p.innerHTML = `Camino : ${path.join('->')}`
	p2.innerHTML = `Distancia: ${distance}`
})

// if(!bandera)drawGraph(graph , highlightedEdges , bandera)
