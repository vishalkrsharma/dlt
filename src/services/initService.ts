import chalk from 'chalk';
import { mkdirSync, writeFileSync } from 'fs';
import { DLT_DIR, HEAD_FILE, OBJECT_DIR } from '../utils/constants';

export const initRepo = async (): Promise<void> => {
  try {
    mkdirSync(DLT_DIR);
    mkdirSync(OBJECT_DIR);

    writeFileSync(HEAD_FILE, 'ref: refs/heads/master');

    console.log('Initialized empty ' + chalk.green('dlt') + ' repository in ' + chalk.green(process.cwd() + '/' + DLT_DIR));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'EEXIST') {
      console.log(chalk.red('dlt repository already initialized.'));
      return;
    }

    console.error('Error initializing repository:', error);
  }
};
