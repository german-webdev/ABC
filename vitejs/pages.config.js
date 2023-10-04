import { resolve } from 'path';

const pages = [
    {name: 'main', path: resolve(__dirname, '../index.html')},
    {name: 'app', path: resolve(__dirname, '../src/app.js')},
    {name: 'modal', path: resolve(__dirname, '../src/modal.js')},
];

export default pages;