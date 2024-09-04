interface Tile {
  type: string;
  walkable: boolean;
  symbol: string;
}

let map: Tile[][] = Array.from({ length: 15 }, () => 
  Array(15).fill({ type: "Empty", walkable: true, symbol: "." })
);

map[0][0] = { type: "Forest", walkable: true, symbol: "T" };
map[2][3] = { type: "River", walkable: false, symbol: "~" };
map[5][5] = { type: "Mountain", walkable: false, symbol: "^" };
map[9][9] = { type: "Village", walkable: true, symbol: "H" };

// Function to draw the map with borders
function drawMapWithBorders(map: Tile[][]): void {
  const tileWidth = 2; // Width of each tile (including space between)
  const horizontalBorder = "+" + "-".repeat(map[0].length * tileWidth - 1) + "+";

  console.log(horizontalBorder);  // Top border

  for (let row of map) {
      let rowString = row.map(tile => `${tile.symbol} `).join("");  // Add space for alignment
      console.log("|" + rowString.padEnd(map[0].length * tileWidth - 1) + "|");  // Row with borders
  }

  console.log(horizontalBorder);  // Bottom border
}


// Example usage
drawMapWithBorders(map);
