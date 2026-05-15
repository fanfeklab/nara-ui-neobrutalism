import * as fs from 'fs';
import * as path from 'path';

function processFile(filepath: string) {
    let content = fs.readFileSync(filepath, 'utf-8');
    const original = content;

    content = content.replace(/\$\$\{/g, '${');
    content = content.replace(/placeholder=\$\{BRAND\.founder\.name\}/g, 'placeholder={BRAND.founder.name}');

    if (content !== original) {
        fs.writeFileSync(filepath, content);
        console.log(`Updated files in ${filepath}`);
    }
}

function walkDir(dir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            walkDir(filepath);
        } else if (filepath.endsWith('.tsx') || filepath.endsWith('.ts')) {
            processFile(filepath);
        }
    }
}

walkDir('src/pages');
