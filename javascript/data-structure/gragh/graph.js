'use strict';

const Vertex = require('./vertex');
const Edge = require('./edge');

class Graph {
    constructor() {
        this.adjacenctList = new Map();
    }

    addVertex(vertex) {
        this.adjacenctList.set(vertex, []);
    }

    addEdge(start, end, weight) {
        // check if both nodes exist
        if (!this.adjacenctList.has(start) || !this.adjacenctList.has(end)) {
            console.log('one or both vertex is not existed');
            return;
        }

        const adjacencies = this.getNeighbors(start); //array
        adjacencies.push(new Edge(end, weight));


        // bi-directional
        const adjacencies2 = this.getNeighbors(end); //array
        adjacencies2.push(new Edge(start,weight));
    }

    getNeighbors(vertex) {
        if (!this.adjacenctList.has(vertex)) {
            console.log('node does not exist');
            return;
        }
        return this.adjacenctList.get(vertex)
    }

   
    getSize() {
        return this.list.size > 0 ? this.list.size : null;
    }

    getNodes() {
        let result = [];
        for (const [vertex, edge] of this.list.entries()) {
            result.push(vertex);
        }
        return result;
    }
    
}

