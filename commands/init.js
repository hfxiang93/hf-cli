#!/usr/bin/env node

const program = require('commander')
const ora = require('ora')
const download = require('download-git-repo')
const templateList = require(`${__dirname}/../template`)
const symbols = require('log-symbols')
const chalk = require('chalk')
chalk.level = 1

program
  .usage('<template-name> [project-name]')
program.parse(process.argv)
// 当没有输入参数的时候给个提示
if (program.args.length < 1) return program.help()

// 第一个参数是 webpack，第二个参数是 project-name
let templateName = program.args[0]
let projectName = program.args[1]
// 模板名不能为空
if (!templateList[templateName]) {
  console.log(chalk.red('\n Template does not exit! \n '))
  return
}
// 项目名不能为空
if (!projectName) {
  console.log(chalk.red('\n Project should not be empty! \n '))
  return
}

// 获取模板名对应的url
let url = templateList[templateName]
console.log(url)
// 开始记录用时
const startTime = new Date().getTime()
console.log(chalk.green('\n Start generating... \n'))
// 出现加载图标
const spinner = ora("Downloading...");
spinner.start();
// 根据url远程下载对应的代码
download(
  `direct:${url}`,
  `./${projectName}`,
  { clone: true },
  err => {
    if (err) {
      spinner.fail();
      console.log(chalk.red(symbols.error), chalk.red(`Generation failed. ${err}`))
      return
    }
    // 结束加载图标
    spinner.succeed();
      // 结束时间
      const endTime = new Date().getTime();
      // 结束时间-开始时间=所耗时长
      const usageTime = (endTime - startTime) / 1000
    console.log(chalk.green(symbols.success), chalk.green(`Generation completed! 用时${chalk.cyan(usageTime)}s, 请输入以下命令继续...`))
      console.log('')
    console.log('\n To get started')
      console.log(chalk.cyan(' $ ') + chalk.blueBright(`cd ${projectName}`))
      console.log(chalk.cyan(' $ ') + chalk.blueBright('npm install'));
      console.log(chalk.cyan(' $ ') + chalk.blueBright('npm run dev'));
  }
)
