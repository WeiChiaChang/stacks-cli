const CFonts = require('cfonts');
const ora = require('ora');
const inquirer = require('inquirer');
const chalk = require('chalk');
// const center = require('center-align');
const Table = require('cli-table2');
const options = {
  userAgent: 'Wappalyzer',
  maxWait: 8000,
  debug: false
};
const wappalyzer = require('wappalyzer')(options);

CFonts.say('Stack-cli', {
	font: 'block',           // define the font face
	align: 'center',         // define text alignment
	colors: ['candy'],        // define all colors
	background: 'Black',     // define the background color
	letterSpacing: 1,        // define letter spacing
	lineHeight: 1,           // define the line height
	space: true,             // define if the output text should have empty lines on top and on the bottom
	maxLength: '0'           // define how many character can be on one line
});

let stackInfo = [];

// inquirer questions prompt from user input
let questions = [
  {
    type: 'input',
    name: 'website',
    message: 'Which website stack do you wanna browse ? (e.g. https://github.com)'
  }
];

inquirer.prompt(questions).then(function (answers) {
  // console.log(JSON.stringify(answers, null, '  '));
  // console.log(answers.website);

  // spinner start
  const spinner = ora('  Analyzing 📊  ....  ').start();

  // should be dynamic by user prompt
  // wappalyzer.analyze(answers.website)
  wappalyzer.analyze(answers.website)
  .then(json => {
    spinner.stop();
    // console.log(json.length);
    for (let num = 0; num < json.length; num ++) {
      stackInfo.push(new Array());
      stackInfo[num].push(chalk.bold(chalk.bgWhite(chalk.black(json[num].name))));

      if (json[num].confidence > 60) {
        stackInfo[num].push(chalk.green(json[num].confidence) + chalk.green(' % sure 👍'));
      } else {
        stackInfo[num].push(chalk.red(json[num].confidence) + chalk.red(' % sure 😭'));
      }

      if (json[num].version === '') {
        stackInfo[num].push('🙅');
      } else {
        stackInfo[num].push(chalk.white(json[num].version));
      }
      stackInfo[num].push(chalk.white(Object.values(json[num].categories[0])[0]));
      stackInfo[num].push(chalk.white(json[num].website));
    }
    // console.log(JSON.stringify(json, null, 2));
    // console.log(stackInfo);
    for (let number = 0; number < stackInfo.length; number++) {
      table.push(stackInfo[number]);
    }

    console.log(table.toString());
  })
  .catch(error => {
    console.error(error);
  });
});

// table styling data
let table = new Table({
  chars: { 
    'top': '═' , 
    'top-mid': '╤' , 
    'top-left': '╔' , 
    'top-right': '╗', 
    'bottom': '═' , 
    'bottom-mid': '╧' , 
    'bottom-left': '╚' , 
    'bottom-right': '╝', 
    'left': '║' , 
    'left-mid': '╟' , 
    'mid': '─' , 
    'mid-mid': '┼', 
    'right': '║' , 
    'right-mid': '╢' , 
    'middle': '│' 
  }
});
 
table.push(
  [
    chalk.cyan('👀  name'), 
    chalk.cyan('💪  confidence'), 
    chalk.cyan('ℹ  version'), 
    chalk.cyan('❓  categories'), 
    chalk.cyan('💻  website')
  ]
);