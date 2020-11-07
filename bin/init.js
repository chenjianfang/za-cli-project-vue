#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
var inquirer = require('inquirer');
var shell = require('shelljs');
var chalk = require('chalk');

const resolve = (dir = '') => path.join(__dirname, dir);

const cwd = process.cwd();
console.log('cwd: ', cwd);
const currentPathFolderList = fs.readdirSync(cwd, 'utf8');
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: '请输入项目文件夹名字：',
            validate: function (input) {
                var done = this.async();
                setTimeout(function() {
                    if (/[^a-zA-Z-.]/g.test(input)) {
                        done('只能由字母、-和.组成');
                        return;
                    }
                    if (input.trim().length === 0) {
                        done('名字必填');
                        return;
                    }
                    if (currentPathFolderList.find((currentFolder) => currentFolder === input)) {
                        done('当前文件夹已包含同名文件夹');
                        return;
                    }
                    // Pass the return value in the done callback
                    done(null, true);
                }, 100);
            }
        }
    ])
    .then(({ name }) => {
        const projectFolder = path.join(cwd, name);
        // 创建文件夹
        shell.exec(`mkdir ${projectFolder}`);

        shell.cp('-Rf', resolve('../template/shell'), `${projectFolder}/`);
        shell.cp('-Rf', resolve('../template/src'), `${projectFolder}/`);
        shell.cp('-Rf', resolve('../template/.eslintrc.js'), `${projectFolder}/`);
        shell.cp('-Rf', resolve('../template/.editorconfig'), `${projectFolder}/`);
        shell.cp('-Rf', resolve('../template/.postcssrc.js'), `${projectFolder}/`);
        shell.cp('-Rf', resolve('../template/babel.config.json'), `${projectFolder}/`);
        shell.cp('-Rf', resolve('../template/build.config.json'), `${projectFolder}/`);
        shell.cp('-Rf', resolve('../template/package.json'), `${projectFolder}/`);
        shell.cp('-Rf', resolve('../template/template.ignore'), `${projectFolder}/.gitignore`);
        shell.cd(projectFolder);
        shell.exec('mkdir dist');

        console.log(chalk.blue(`---------------------------------祝你开发vue愉快---------------------------------------\n`));
        console.log(chalk.blue(`cd ${name} \n`));
        console.log(chalk.blue(`npm install \n`));
        console.log(chalk.blue('npx za-dev-vue\n'));
    })
    .catch(error => {
        console.log(error);
    });
