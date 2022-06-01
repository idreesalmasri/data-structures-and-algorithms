function businessTrip(graph, city) {

    let cost = 0;
    for (let i = 0; i < city.length; i++) {
      let neighbors = graph.getNeighbors(city[i]);
      for (let j = 0; j < neighbors.length; j++) {
        if (neighbors[j].vertex === city[i + 1]) {
          cost=cost+ neighbors[j].weight;
        }
      }
    }
    if (cost === 0) {
      return null;
    }
    return cost;
  }



module.exports = businessTrip;