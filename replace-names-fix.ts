import * as fs from 'fs';
import * as path from 'path';

function processFile(filepath: string) {
    let content = fs.readFileSync(filepath, 'utf-8');
    const original = content;

    // Fix the literal string issues from before
    content = content.replace(/="https:\/\/api.dicebear.com([^"]*)\{BRAND\.founder\.name\}([^"]*)"/g, '={`https://api.dicebear.com$1${BRAND.founder.name}$2`}');
    content = content.replace(/='https:\/\/api.dicebear.com([^']*)\{BRAND\.founder\.name\}([^']*)'/g, '={`https://api.dicebear.com$1${BRAND.founder.name}$2`}');
    
    content = content.replace(/="https:\/\/api.dicebear.com([^"]*)\{BRAND\.engineer\.firstName\}([^"]*)"/g, '={`https://api.dicebear.com$1${BRAND.engineer.firstName}$2`}');
    content = content.replace(/='https:\/\/api.dicebear.com([^']*)\{BRAND\.engineer\.firstName\}([^']*)'/g, '={`https://api.dicebear.com$1${BRAND.engineer.firstName}$2`}');

    content = content.replace(/="\{BRAND\.founder\.name\}"/g, '={BRAND.founder.name}');
    
    // Also Dashboard Layout had template literals:
    // src={`https://api.dicebear.com/7.x/notionists/svg?seed={BRAND.founder.name}`} which is wrong, should be ${...}
    content = content.replace(/`([^`]*)\{BRAND\.founder\.name\}([^`]*)`/g, '`$1${BRAND.founder.name}$2`');
    content = content.replace(/`([^`]*)\{BRAND\.engineer\.firstName\}([^`]*)`/g, '`$1${BRAND.engineer.firstName}$2`');

    if (content !== original) {
        fs.writeFileSync(filepath, content);
        console.log(`Updated names in ${filepath}`);
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

walkDir('src/pages/ui-docs');
walkDir('src/layouts');
