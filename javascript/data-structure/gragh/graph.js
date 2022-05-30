'use strict';

const Vertex = require('./vertex');
const Edge = require('./edge');

class Graph {
    constructor() {
        this.adjacenctList = new Map();
    }

    addVertex(vertex) {
        
        this.adjacenctList.set(vertex, []);
        return vertex;
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
            return ;
        }
        return this.adjacenctList.get(vertex)
    }

   
    getSize() {
        return this.adjacenctList.size > 0 ? this.adjacenctList.size : null;
    }

    getNodes() {
        let result = [];
        for (const [vertex, edge] of this.adjacenctList.entries()) {
            result.push(vertex.value);
        }
        return result;
    }
    
}
module.exports=Graph;
const myGraph=new Graph();
        myGraph.addVertex("a");
        myGraph.addVertex("b");
        // console.log(myGraph);
        // console.log(myGraph.getNeighbors("a"));
        myGraph.addEdge("a","b",5)
        console.log(myGraph.getNeighbors("a"));