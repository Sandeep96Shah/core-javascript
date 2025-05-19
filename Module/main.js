console.log("Sandeep from Main File");
import { sayHello, scriptFile } from "./script.js";

console.log("Sandeep from Main File after import");
sayHello();
console.log("Sandeep from Main File after SayHello function Call");
export var mainFile = 1;
// debugger;
console.log(mainFile);