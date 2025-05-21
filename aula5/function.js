/*
function calcular(x1, x2, operator) {
    
    return `${x1} ${operator} ${x2}`;

}

let resut = calcular(1, 2)
console.log(resut); 
*/

/* 
(function calc(x1, x2, operator) {
    return `${x1} ${operator} ${x2}`;
}) (1, 2) 
 */

let calcular = (x1, x2, operator) => {
  return eval(`${x1} ${operator} ${x2}`);
};

let resut = calcular(1, 2, "*");

console.log(resut);
