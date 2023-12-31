const { writeFileSync, readFileSync } = require('fs');
const { resolve } = require('path');

const rawIcons = JSON.parse(readFileSync('rawIcons.json', 'utf-8'));
const rawBrandIcons = JSON.parse(readFileSync('raw-brandIcons.json', 'utf-8'));

Object.entries(rawIcons).forEach(([key, value]) => {
    writeFileSync(resolve(__dirname, `../src/generated/${key}.ts`), `
/**
 * 자동으로 생성된 파일입니다. 직접적으로 수정하지마세요.
 */
import {IconUrl} from "../../types/Asset";
        
export const ${key} = new IconUrl('${value}');
`);
});

Object.entries(rawBrandIcons).forEach(([key, value]) => {
    writeFileSync(resolve(__dirname, `../src/generated/${key}.ts`), `
/**
 * 자동으로 생성된 파일입니다. 직접적으로 수정하지마세요.
 */
import {BrandLogoUrl} from "../../types/Asset";
        
export const ${key} = new BrandLogoUrl('${value}');
`); 
})

const icons = Object.keys(rawIcons).reduce((acc, key) => {
    acc += `
export {${key}} from './${key}';\n
    `;
    return acc;
}, '');

const brandIcons = Object.keys(rawBrandIcons).reduce((acc, key) => {
    acc += `
export {${key}} from './${key}';\n
    `;
    return acc;
}, '');

writeFileSync(resolve(__dirname, `../src/generated/index.ts`), `
/**
 * 자동으로 생성된 파일입니다. 직접적으로 수정하지마세요.
 */
${icons};
${brandIcons};
`);
