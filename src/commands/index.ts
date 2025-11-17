import { configCommand } from './configCommand';
import { Command } from 'commander';

export const registerCommands = (program: Command) => {
  program.addCommand(configCommand);
};
