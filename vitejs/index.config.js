import { resolve } from 'path';

const scripts = [
    {name: 'app', path: resolve(__dirname, '../src/app.js')},
    {name: 'modal', path: resolve(__dirname, '../src/modal.js')},
];

export default scripts;