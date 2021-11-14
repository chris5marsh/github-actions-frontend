const fs = require('fs');
const { resolve } = require('path');

const [rootPath] = process.argv.slice(2);

let content = fs.readFileSync(resolve(rootPath, 'regconfig.json'));

content = JSON.parse(content);

delete content.plugins['reg-notify-github-plugin'];

fs.writeFileSync(resolve(rootPath, 'regconfig-push.json'), JSON.stringify(content, null, 4));
