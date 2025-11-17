import { homedir } from 'os';

export const DLT_CONFIG = '.dltconfig';
export const HOME_DIR = homedir();
export const GLOBAL_CONFIG_PATH = `${HOME_DIR}/${DLT_CONFIG}`;

export const DLT_DIR = '.dlt';
export const OBJECT_DIR = `${DLT_DIR}/objects`;
export const HEAD_FILE = `${DLT_DIR}/HEAD`;
