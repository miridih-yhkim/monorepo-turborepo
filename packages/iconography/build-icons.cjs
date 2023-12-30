const { writeFileSync, readFileSync } = require('fs');

const rawData = JSON.parse(readFileSync('rawIcons.json', 'utf-8'));

Object.entries(rawData).forEach(([key, value]) => {
    writeFileSync(__dirname + `/src/generated/${key}.ts`, `
/**
 * 자동으로 생성된 파일입니다. 직접적으로 수정하지마세요.
 */
import {IconUrl} from '../Asset';
        
export const ${key} = new IconUrl('${value}');
`);
});

const contents = Object.keys(rawData).reduce((acc, key) => {
    acc += `
export {${key}} from './${key}';\n
    `;
    return acc;
}, '');

writeFileSync(__dirname + `/src/generated/index.ts`, `
/**
 * 자동으로 생성된 파일입니다. 직접적으로 수정하지마세요.
 */

${contents};
`);
