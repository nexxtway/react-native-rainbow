const glob = require('glob');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const root = process.cwd();

const requireList = glob
    .sync(`${path.join(root, '/storybook/stories')}/*.stories.js`)
    .reduce((seed, file) => {
        return `${seed}\nrequire(\'${file}\');`;
    }, '');

const code = `
export default function loadStories() {
    ${requireList}
}`;

fs.writeFileSync(
    path.join(root, 'storybook/load-stories.js'),
    prettier.format(code, {
        parser: 'babel',
        ...require('./../.prettierrc.js'),
    }),
);
