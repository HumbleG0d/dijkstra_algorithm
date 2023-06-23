export function drawGraph(graph , highlightedEdges , bandera){
	//* Obtenemos el elemento contenedor del grafo
	const container = document.getElementById('myGraph')

	//* Definimos los nodos y las aristas del grafo
	const nodes = []
	const edges = []
	const addedEdges = {}


	//* Recorremos cada nodo del grafo
	for (let node in graph) {

		//* Agregamos el nodo al arreglo de nodos
		nodes.push({ id: node, label: node })

		//* Recorremos las conexiones del nodo
		for (let neighbor in graph[node]) {
			const weight = graph[node][neighbor]
			const edgeId = `${node}-${neighbor}`

			const isHighlighted = highlightedEdges.some(
				edge =>
					(edge.from === node && edge.to === neighbor) ||
          (edge.from === neighbor && edge.to === node)
			)

			//* Verificamos si la arista ya ha sido agregada
			if (!addedEdges[edgeId] && !addedEdges[`${neighbor}-${node}`]) {
			//* Se agrega la arista al arreglo de aristas
				if(bandera){
					edges.push({ from: node, to: neighbor, label: String(weight) , color: isHighlighted ? 'red' : undefined})
				}
				else{
					edges.push({ from: node, to: neighbor, label: String(weight)})
				}
				// color: isHighlighted ? 'red' : undefined 
				//* Marca la arista como agregada en el objeto auxiliar
				addedEdges[edgeId] = true
			}
		}
	}

	// Define las opciones del grafo
	const options = {}

	// Crea un objeto de configuración para el grafo
	const data = {
		nodes: nodes,
		edges: edges
	}

	// Crea una instancia del grafo

	// eslint-disable-next-line no-undef, no-unused-vars
	const network = new vis.Network(container, data, options)

}