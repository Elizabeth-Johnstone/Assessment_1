const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Welcome! Please create a password.", function(input) {
    if (input.length >= 10) {
        console.log('Thank you. You have successfully created a password.')
    } else {
        console.log('Please create a password that is at least 10 characters long.')
    }
    reader.close()
  
}
)