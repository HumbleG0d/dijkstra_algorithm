const distances = {} //* Creamos un objeto que almacenara las distancias más cortas desde el nodo inicial

const visited = {} //* Creamos un objeto que almacenara los nodos visitados.

const previousNodes = {} //* Creamos un objeto que alacenara los nodos del camino más corto.

function initialCondition(graph , start_node){

	//* Al inicio del algortimo todos los nodos tienen una distancia infinita exceptuando el nodo inicial

	for(let nodo in graph){
		distances[nodo] = Infinity
	}
	distances[start_node] = 0
}

//* Creamos una funcion para encontrar el nodo con la distancia mas corta
function findNodeShortestDistance(graph){
	let shortest_distance = Infinity //* Distancia mas corta al comenzar
	let shortest_node = null
	
	for(let node in graph){
		//* Verificamos si el nodo ya ah sido visitado o no , ademas verifica que la distancia del nodo es menor o igual a la distancia mas corta encontrada. Si es asi actualizamos shortest_distnace y guardamos el nodo con la distancia mas corta.
		
		if(!visited[node] && distances[node] <= shortest_distance){
			shortest_distance = distances[node]
			shortest_node = node
		}
	}

	return shortest_node
}

function tourNodes(end_node , graph){
	//* Iteramos hasta visitar todos los nodos
	let condition = true
	while(condition){
		let current_node = findNodeShortestDistance(graph) //* Nodo actual
		
		if(current_node === null){
			break //* Si todos los nodos ya se han visitado
		}
		
		visited[current_node] = true
		
		if(current_node === end_node){
			break //* Se ah encontrado el nodo final
		}
		
		//* Actualizamos las distancias de los nodos vecinos
		//* neighborNode -> nodo vecino
		for (let neighborNode in graph[current_node]) {
			let distance = graph[current_node][neighborNode]
			let totalDistance = distances[current_node] + distance
			
			if (totalDistance < distances[neighborNode]) {
				distances[neighborNode] = totalDistance
				previousNodes[neighborNode] = current_node
			}
		}
	}
}

export function dijkstra(graph , start_node , end_node){

	initialCondition(graph , start_node)
	tourNodes(end_node , graph)
	
	//* Damos forma a los nodos para mostrar la ruta que se sigue para encontrar la menor distancia.

	const path = [end_node] 

	let previousNode = previousNodes[end_node]
	while (previousNode) {
		path.unshift(previousNode)
		previousNode = previousNodes[previousNode]
	}
	return path
}
