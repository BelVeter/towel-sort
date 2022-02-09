
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let rez = [];
    if (matrix.length===0) return [];
    
    matrix.forEach((row, index) => {
        if (index % 2 === 0) {
            for (let i = 0; i < row.length; i++) {
                rez.push(row[i]);
            }
        }
        else {
            for (let i = 0; i < row.length; i++) {
                rez.push(row[row.length-i-1]);
            }
        }
    });

  return rez;
}
