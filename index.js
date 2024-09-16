const path = require("path");

const extention = path.extname("arquivo.php");

console.log(extention);

const chalk = require('chalk');

const nota = 7;

if (nota >= 7) {
    console.log(chalk.green('Aprovado!!!'));
} else {
    console.log(chalk.red('Reprovado!!!'));
}