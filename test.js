const { Pride } = require('./dist');
const fs = require('fs');
const path = require('path');

const bg = fs.readFileSync(path.join('assets', 'ally.png'));

(async () => fs.writeFileSync('test.png', await Pride.agender(bg, 0)))();
