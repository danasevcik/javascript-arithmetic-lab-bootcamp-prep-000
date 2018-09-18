var a = 10;
var b = 2.222222;
function add(a,b) {
  return a + b;
}
function subtract(a,b) {
  return a - b;
}
function multiply(a,b) {
  return a*b;
}
function divide(a,b){
  return a/b;
}
function inc(a){
  a++;
  return a;
}
function dec(a){
  a--;
  return a;
}
function makeInt(a){
  parseInt('2', 10);
  return a;
}
function preserveDecimal(a){
  parseInt('2.22222', 10);
  return a;
}
function makeInt(b){
  parseInt('b', 10);
  return b;
}
function preserveDecimal(b){
  parseFloat('b');
  return b;
}
