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
        let VertexA=new Vertex("a");
        let VertexB=new Vertex("b")
        myGraph.addVertex(VertexA);
        myGraph.addVertex(VertexB);
        expect(myGraph.getNeighbors(VertexA)).toEqual([])
        myGraph.addEdge(VertexA,VertexB,5)
        expect(myGraph.getNeighbors(VertexA)).toEqual([{ vertex: { value: 'b' }, weight: 5 }])
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
        let VertexA=new Vertex("a");
        let VertexB=new Vertex("b")
        let VertexC=new Vertex("c")
        myGraph.addVertex(VertexA);
        myGraph.addVertex(VertexB);
        myGraph.addVertex(VertexC);
        expect(myGraph.getNeighbors(VertexA)).toEqual([])
        myGraph.addEdge(VertexA,VertexB,5)
        myGraph.addEdge(VertexA,VertexC,5)
        expect(myGraph.getNeighbors(VertexA)).toEqual([{ vertex: { value: 'b' }, weight: 5 },{ vertex: { value: 'c' }, weight: 5 }])
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
    
    it("graph-breadth-first return A collection of nodes in the order they were visited",()=>{
        
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
        myGraph.addEdge(vertexA,vertexC)
        myGraph.addEdge(vertexA,vertexB)
        myGraph.addEdge(vertexA,vertexD)
        myGraph.addEdge(vertexD,vertexE)
        myGraph.addEdge(vertexE,vertexF)
        myGraph.addEdge(vertexB,vertexG)
        expect(myGraph.breadthFirst(vertexA)).toEqual(["a","c","b","d","g","e","f"])
    })
})
describe("Graph", () => {
    it("Depth First", () => {
      let test = new Graph();
  
      let one = new Vertex("A");
      let two = new Vertex("B");
      let three = new Vertex("C");
      let four = new Vertex("D");
      let five = new Vertex("E");
      let six = new Vertex("F");
      let seven = new Vertex("G");
      let eight = new Vertex("H");
  
      test.addVertex(one);
      test.addVertex(two);
      test.addVertex(three);
      test.addVertex(four);
      test.addVertex(five);
      test.addVertex(six);
      test.addVertex(seven);
      test.addVertex(eight);
  
      test.addEdge(one, two);
      test.addEdge(one, four);
      test.addEdge(two, three);
      test.addEdge(two, four);
      test.addEdge(three, seven);
      test.addEdge(four, five);
      test.addEdge(four, eight);
      test.addEdge(four, six);
      test.addEdge(six, eight);
      expect(test.depthFirst(one)).toEqual("A,B,C,G,D,E,H,F,");
    });
  });
  