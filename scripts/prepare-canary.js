const shell = require('shelljs');

const isCircleCi = process.env.CIRCLECI;
const isMaster = process.env.CIRCLE_BRANCH === 'master';

if (isCircleCi && isMaster) {
    const version = require('./../package.json').version;
    const hash = process.env.CIRCLE_SHA1.substring(0, 7);
    shell.exec(`npm version ${version}-canary.${hash}`);
} else {
    console.error(
        'This script was meant to run in CIRCLECI context and in master branch.',
    );
    process.exit(1);
}
