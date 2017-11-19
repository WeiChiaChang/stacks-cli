#!/usr/bin/env node
const fs = require("fs");
const meow = require('meow');
const opn = require('opn');
const CFonts = require('cfonts');
const ora = require('ora');
const inquirer = require('inquirer');
const chalk = require('chalk');
const Table = require('cli-table2');
const VERSION = meow().pkg.version;
const options = {
  userAgent: 'Wappalyzer',
  maxWait: 8000,
  debug: false
};
const wappalyzer = require('wappalyzer')(options);

let stackInfo = [];

// inquirer questions prompt from user input
let questions = [
  {
    type: 'input',
    name: 'website',
    message: 'Which website stack do you wanna browse ? (e.g. https://github.com)'
  }
];

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
    chalk.cyan('🏷  type'),
    chalk.cyan('👀  name'), 
    chalk.cyan('💪  confidence'), 
    chalk.cyan('❓  categories'), 
    chalk.cyan('💻  website')
  ]
);

const cliHelp = meow(`
  Examples
  $ stacks-cli


  Show current version
  $ stacks-cli -v


  Source code of this side project
  $ stacks-cli -s
`);

let run = function (obj) {
  if (obj[0] === '-v') {
    console.log(`version is ${VERSION}`);
  } else if (obj[0] === '-h') {
    console.log(cliHelp.help);
  } else if (obj[0] === '-s') {
    opn('https://github.com/WeiChiaChang/stacks-cli', {app: 'google chrome'});
  } else {
    
    CFonts.say('Stacks-cli', {
      font: 'block',           // define the font face
      align: 'left',         // define text alignment
      colors: ['cyan'],        // define all colors
      background: 'Black',     // define the background color
      letterSpacing: 1,        // define letter spacing
      lineHeight: 1,           // define the line height
      space: true,             // define if the output text should have empty lines on top and on the bottom
      maxLength: '0'           // define how many character can be on one line
    });

    inquirer.prompt(questions).then(function (answers) {
      // console.log(JSON.stringify(answers, null, '  '));
      // console.log(answers.website);
    
      // spinner start
      const spinner = ora('📊  Analyzing ....  ').start();
    
      // should be dynamic by user prompt
      // wappalyzer.analyze(answers.website)
      wappalyzer.analyze(answers.website)
      .then(json => {
        spinner.stop();
        // console.log(json.length);
        for (let num = 0; num < json.length; num ++) {
          stackInfo.push(new Array());
    
          if (json[num].name.toLowerCase().includes('google')) {
            stackInfo[num].push('🇬');
          } else if (Object.values(json[num].categories[0])[0].toLowerCase().includes('cdn')) {
            stackInfo[num].push('📡');
          } else if (Object.values(json[num].categories[0])[0].toLowerCase().includes('video')) {
            stackInfo[num].push('📹'); 
          } else if (Object.values(json[num].categories[0])[0].toLowerCase().includes('analytics')) {
            stackInfo[num].push('📈'); 
          } else if (Object.values(json[num].categories[0])[0].toLowerCase().includes('widgets')) {
            stackInfo[num].push('🔧'); 
          } else if (Object.values(json[num].categories[0])[0].toLowerCase().includes('advertising')) {
            stackInfo[num].push('📺'); 
          } else if (Object.values(json[num].categories[0])[0].toLowerCase().includes('font')) {
            stackInfo[num].push('🔠'); 
          } else if (Object.values(json[num].categories[0])[0].toLowerCase().includes('server')) {
            stackInfo[num].push('🍪'); 
          } else if (Object.values(json[num].categories[0])[0].toLowerCase().includes('cache')) {
            stackInfo[num].push('⚡'); 
          } else if (json[num].name.toLowerCase().includes('js') || Object.values(json[num].categories[0])[0].toLowerCase().includes('javascript')) {
            stackInfo[num].push('📝');
          } else if (json[num].name.toLowerCase().includes('bootstrap')) {
            stackInfo[num].push('🅱'); 
          } else if (json[num].name.toLowerCase().includes('php')) {
            stackInfo[num].push('🐘');
          } else if (json[num].name.toLowerCase().includes('webpack')) {
            stackInfo[num].push('🗃');
          } else if (json[num].name.toLowerCase().includes('ruby')) {
            stackInfo[num].push('💎');
          } else if (json[num].name.toLowerCase().includes('rails')) {
            stackInfo[num].push('🚊');
          } else if (json[num].name.toLowerCase().includes('java')) {
            stackInfo[num].push('☕');
          } else if (json[num].name.toLowerCase().includes('python') || json[num].name.toLowerCase().includes('django')) {
            stackInfo[num].push('🐍');
          } else {
            stackInfo[num].push('❓');
          }
    
          stackInfo[num].push(chalk.bold(chalk.white(json[num].name)));
    
          if (json[num].confidence > 60) {
            stackInfo[num].push(chalk.green(json[num].confidence) + chalk.green(' % sure 👍'));
          } else {
            stackInfo[num].push(chalk.red(json[num].confidence) + chalk.red(' % sure 😭'));
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
  };
};

run(process.argv.slice(2));