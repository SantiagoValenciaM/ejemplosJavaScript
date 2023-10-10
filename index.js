let i = 2;

console.log("Ejemplo con Switch");

switch(i) {
  case 0:
    console.log("i es cero.");
    break;
  case 1:
    console.log("i es uno.");
    break;
  case 2:
    console.log("i es dos.");
    break;
  case 3:
    console.log("i es tres.");
    break;
  default:
    console.log("i es mayor a tres.");
}

console.log("Ejemplo con If");

if (i == 0) {
    console.log("i es cero.");
} else if (i == 1) {
    console.log("i es uno.");
} else if (i == 2) {
    console.log("i es dos.");
} else if (i == 3) {
    console.log("i es tres.");
} else {
    console.log("i es mayor a tres.");
}