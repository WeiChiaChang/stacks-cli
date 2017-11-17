const CFonts = require('cfonts');
const ora = require('ora');
const inquirer = require('inquirer');
const chalk = require('chalk');
const Table = require('cli-table2');
const options = {
  userAgent: 'Wappalyzer',
  maxWait: 3000,
  debug: false
};
const wappalyzer = require('wappalyzer')(options);

CFonts.say('Stack-cli', {
	font: 'block',           //define the font face
	align: 'center',         //define text alignment
	colors: ['cyan'],        //define all colors
	background: 'Black',     //define the background color
	letterSpacing: 1,        //define letter spacing
	lineHeight: 1,           //define the line height
	space: true,             //define if the output text should have empty lines on top and on the bottom
	maxLength: '0'           //define how many character can be on one line
});

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
  const spinner = ora('Loading data ....').start();

  // should be dynamic by user prompt
  // wappalyzer.analyze(answers.website)
  wappalyzer.analyze('https://github.com')
  .then(json => {
    spinner.stop();
    console.log(JSON.stringify(json, null, 2));
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
    chalk.cyan('name'), 
    chalk.cyan('confidence'), 
    chalk.cyan('version'), 
    chalk.cyan('categories'), 
    chalk.cyan('website')
  ], 
  ['frob', 'bar', 'quuz', 'fdsf', '232sdd']
);
