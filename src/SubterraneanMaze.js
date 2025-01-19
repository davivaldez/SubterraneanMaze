export class SubterraneanMaze {
  constructor(maze) {
    this.maze = maze;
    this.graph = {};
  }

  getNeighbors(x, y) {
    const neighbors = [];
    const directions = [
      [-1, 0], // Up
      [1, 0], // Down
      [0, -1], // Left
      [0, + 1] // Right
    ]

    for (const [lx, ly] of directions) {
      const nx = lx + x;
      const ny = ly + y;

      if (nx >= 0 && ny >= 0 && nx < this.maze.length && ny < this.maze[0].length && this.maze[nx][ny] !== "#") {
        neighbors.push([nx, ny])
      }
    }

    return neighbors;
  }

  getNode(node) {
    for (let x = 0; x < this.maze.length; x++) {
      for (let y = 0; y < this.maze[x].length; y++) {
        if (this.maze[x][y] === node) {
          return [x, y];
        }
      }
    }
  }

  checkNeighbors(queue, end) {
    const isVisited = {};

    while (queue.length) {
      const [x, y] = queue.shift();
      const currentNode = this.graph[`${x},${y}`];
      currentNode.forEach(([nodeX, nodeY]) => {
        if (nodeX === end[0] && nodeY === end[1]) {
          isVisited[`${nodeX},${nodeY}`] = `${x},${y}`;
          return;
        } else if (!isVisited[`${nodeX},${nodeY}`]) {
          isVisited[`${nodeX},${nodeY}`]= `${x},${y}`;
          queue.push([nodeX, nodeY]);
        }
      })

      if (isVisited[`${end[0]},${end[1]}`]) {
        break;
      }
    }

    return isVisited;
  }

  bfs() {
    const source = this.getNode("S");
    const end = this.getNode("E");

    const correctPath = [];

    const queue = [];
    queue.push(source)

    const isVisited = this.checkNeighbors(queue, end);

    for (const key of Object.keys(isVisited)) {
      if (key === `${end[0]},${end[1]}`) {
        correctPath.push(`(${key})`)

        let currentKey = key;
        
        while (isVisited[currentKey] !== `${source[0]},${source[1]}`) {
          correctPath.push(`(${isVisited[currentKey]})`)
          currentKey = isVisited[currentKey]
        }
      }
    }

    correctPath.push( `(${source[0]},${source[1]})`)
    return correctPath.reverse();
  }

  createGraph() {
    for (let x = 0; x < this.maze.length; x++) {
      for (let y = 0; y < this.maze[x].length; y++) {
        if (this.maze[x][y] !== "#") {
          const neighbors = this.getNeighbors(x, y)
          this.graph[`${x},${y}`] = neighbors
        }
      }
    }

    console.log(this.graph)
  }

  showRoute() {
    console.log(this.bfs())
  }
}