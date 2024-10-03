function checkForWinner(arrSquares) {
  const winningCombinations = [
    [0, 1, 2], // First row

    [3, 4, 5], // Second row

    [6, 7, 8], // Third row

    [0, 3, 6], // First column

    [1, 4, 7], // Second column

    [2, 5, 8], // Third column

    [0, 4, 8], // Diagonal from top-left to bottom-right

    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  for (let win of winningCombinations) {
    if (
      arrSquares[win[0]] !== null &&
      arrSquares[win[0]] === arrSquares[win[1]] &&
      arrSquares[win[1]] === arrSquares[win[2]]
    ) {
      return arrSquares[win[0]];
    }
  }

  return false;
}
