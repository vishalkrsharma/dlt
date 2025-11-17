#!/usr/bin/env node

import { program } from 'commander';
import { registerCommands } from './commands';

program.name('dlt').description('A simple VCS').version('0.0.1');

registerCommands(program);

program.parse(process.argv);
