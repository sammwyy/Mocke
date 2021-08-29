#!/usr/bin/env node

console.log("\nMocke - RestAPI Mock")
console.log(" > Repository: https://github.com/sammwyy/mocke");
console.log(" > Documentation: https://sammwyy.github.io/mocke");
console.log(" > Donations: https://paypal.me/sammwy\n");

if (process.env.PORT) {
    console.log("Found port in ENV variables, using it.")
} else {
    console.log("Port not specified in ENV variables, using 5000 as default.")
}

require("../dist");