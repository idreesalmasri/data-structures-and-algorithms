'use strict'

const Graph=require("../graph");
const Vertex=require("../vertex")
describe("test the graph methods",()=>{
    it("Node can be successfully added to the graph, An empty graph properly returns null",()=>{
        const myGraph=new Graph();
        expect(myGraph.getSize()).toEqual(null);
        let vertex=new Vertex("a")
        myGraph.addVertex(vertex);
        expect(myGraph.getSize()).toEqual(1);
    })
    it("An edge can be successfully added to the graph",()=>{
        const myGraph=new Graph();
        myGraph.addVertex("a");
        myGraph.addVertex("b");
        expect(myGraph.getNeighbors("a")).toEqual([])
        myGraph.addEdge("a","b",5)
        expect(myGraph.getNeighbors("a")).toEqual([{vertex:"b",weight:5}])
    })
    it("A collection of all nodes can be properly retrieved from the graph",()=>{
        
        const myGraph=new Graph();
        let vertexA=new Vertex("a")
        let vertexB=new Vertex("b")
        let vertexC=new Vertex("c")
        let vertexD=new Vertex("d")
        let vertexE=new Vertex("e")
        myGraph.addVertex(vertexA);
        myGraph.addVertex(vertexB)
        myGraph.addVertex(vertexC)
        myGraph.addVertex(vertexD)
        myGraph.addVertex(vertexE)
        expect(myGraph.getNodes()).toEqual(["a","b","c","d","e"]);
    })
    it("All appropriate neighbors can be retrieved from the graph, Neighbors are returned with the weight between nodes included",()=>{
        
        const myGraph=new Graph();
        myGraph.addVertex("a");
        myGraph.addVertex("b");
        myGraph.addVertex("c");
        expect(myGraph.getNeighbors("a")).toEqual([])
        myGraph.addEdge("a","b",5)
        myGraph.addEdge("a","c",5)
        expect(myGraph.getNeighbors("a")).toEqual([{vertex:"b",weight:5},{vertex:"c",weight:5}])
    })
    it("The proper size is returned, representing the number of nodes in the grap",()=>{
        
        const myGraph=new Graph();
        let vertexA=new Vertex("a")
        let vertexB=new Vertex("b")
        let vertexC=new Vertex("c")
        let vertexD=new Vertex("d")
        let vertexE=new Vertex("e")
        myGraph.addVertex(vertexA);
        myGraph.addVertex(vertexB)
        myGraph.addVertex(vertexC)
        myGraph.addVertex(vertexD)
        myGraph.addVertex(vertexE)
        expect(myGraph.getSize()).toEqual(5);
    })
})