#! /usr/bin/env node
const { program } = require('commander')
const list = require('./commands/list')
const add = require('./commands/add')

program
    .command('list')
    .description('List all passwords')
    .action(list)

program
    .command('add <site> <key>')
    .description('Add a new password')
    .action(add)

program.parse()
