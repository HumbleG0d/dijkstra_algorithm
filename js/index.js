import { dijkstra } from './dijkstra.js'
import { drawGraph } from './graph.js'

const graph = {
	// A: { B: 4, C: 2 },
	// B: { A: 4, C: 1, D: 5 },
	// C: { A: 2, B: 1, D: 8 },
	// D: { B: 5, C: 8 }
	a: { b: 16, C: 10 , d: 5 },
	b: { a: 16, c: 2, f: 4, g: 6},
	c: { a: 10, b: 2 , d: 4,f: 12, e: 10},
	d: { a: 5, c: 4 , e: 15},
	e: { d: 15, c: 10, f: 3, z: 5},
	f: { b: 4, c: 12, e: 3, g: 8 , z : 16},
	g: { b: 6, f: 8, z: 7},
	z: { e: 5, f: 16, g: 7}
}

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

const calcular = document.getElementById('button')
calcular.addEventListener('click' , (e) => {
	e.preventDefault()
	const path = dijkstra(graph , nodo1 , nodo2)
	
	bandera = true
	highlightedEdges = []
	for(let i = 0 ; i < path.length-1 ; i++){
		highlightedEdges.push({from: path[i] , to: path[i+1]})
	}
	drawGraph(graph , highlightedEdges , bandera)
    
	const p = document.getElementById('path')
	p.innerHTML = `${path.join('->')}`
})

if(!bandera)drawGraph(graph , highlightedEdges , bandera)
