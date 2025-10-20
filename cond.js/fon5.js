function filtrerPairs(tab){

return tab.filter(nombre => nombre % 2 === 0 );

}
const tableau = [1,2,3,4,6];
const pairs = filtrerPairs (tableau);
console.log(pairs);
