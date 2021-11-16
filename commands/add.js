#!/usr/bin/env node
// 交互式命令行，并且保存用户操作记录
const inquirer = require('inquirer')
// 文件操作
const fs = require('fs')
// 获取所有的模板列表
const templateList = require(`${__dirname}/../template`)
const { showTable } = require(`${__dirname}/../util/showTable`)
const symbols = require('log-symbols')
// 打印出彩色的日志
const chalk = require('chalk')
// 日志级别
chalk.level = 1
// 命令行交互的内容
let question = [
  {
    name: "name",
    type: 'input',
    message: "请输入模板名称",
    validate (val) {
      if (!val) {
        return 'Name is required!'
      } else if (templateList[val]) {
        return 'Template has already existed!'
      } else {
        return true
      }
    }
  },
  {
    name: "url",
    type: 'input',
    message: "请输入模板地址",
    validate (val) {
      if (val === '') return 'The url is required!'
      return true
    }
  }
]

inquirer
  .prompt(question).then(answers => {
    let { name, url } = answers;
    // 将用户输入的模板名和url添加到模板中
    templateList[name] = url.replace(/[\u0000-\u0019]/g, '') // 过滤 unicode 字符
  // 将新的模板列表写入模板文件中
    fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(templateList), 'utf-8', err => {
      if (err) console.log(chalk.red(symbols.error), chalk.red(err))
      console.log('\n')
      console.log(chalk.green(symbols.success), chalk.green('Add a template successfully!\n'))
      console.log(chalk.green('The latest templateList is: \n'))
      showTable(templateList)
    })
  })
