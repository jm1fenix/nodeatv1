import inquirer from 'inquirer';
import chalk from 'chalk';

inquirer
.prompt([
  { name: 'nome', message: 'Qual seu nome?' },
  { name: 'idade', message: 'Qual a sua idaide?'},
])

.then ((answers) => {
  const response = `O nome do usuário é ${answers.nome} e ele tem ${answers.idade} anos.`
  console.log(chalk.bgYellow.black(response))
})