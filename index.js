#!/usr/bin/env node
const program = require('commander');
const packageJson=require('./package.json')
const {createProject} =require('./commands/create')
program.version(packageJson.version)


program.command('create <projectName>')
       .description('项目名称')
       .action((projectName,opts)=>{
          createProject(projectName)
       })

program.parse(process.argv)