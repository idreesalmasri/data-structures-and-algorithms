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
    breadthFirst(startNode) {
        let queue = [];
        let visitedNodes = new Set();
        let result=[]
        queue.push(startNode);
        visitedNodes.add(startNode);
        
        result.push(startNode.value)
        while (queue.length) {
            const currentNode = queue.shift();
            const neighbors = this.getNeighbors(currentNode);
            for (let neighbor of neighbors) {
                const neighborNode = neighbor.vertex;
                if (visitedNodes.has(neighborNode)) {
                    continue;
                } else {
                    visitedNodes.add(neighborNode);
                    result.push(neighborNode.value)
                }
                queue.push(neighborNode);
            }
        }
            return result;
    }
    
}
module.exports=Graph;
const myGraph=new Graph();
let vertexA=new Vertex("a")
let vertexB=new Vertex("b")
let vertexC=new Vertex("c")
let vertexD=new Vertex("d")
let vertexE=new Vertex("e")
let vertexF=new Vertex("f")
let vertexG=new Vertex("g")
myGraph.addVertex(vertexA);
myGraph.addVertex(vertexB)
myGraph.addVertex(vertexC)
myGraph.addVertex(vertexD)
myGraph.addVertex(vertexE)
myGraph.addVertex(vertexF)
myGraph.addVertex(vertexG)
myGraph.addEdge(vertexA,vertexC,5)
myGraph.addEdge(vertexA,vertexB,5)
myGraph.addEdge(vertexA,vertexD,5)
myGraph.addEdge(vertexD,vertexE,5)
myGraph.addEdge(vertexE,vertexF,5)
myGraph.addEdge(vertexB,vertexG,5)
myGraph.breadthFirst(vertexA);