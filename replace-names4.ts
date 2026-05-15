import * as fs from 'fs';
import * as path from 'path';

function processFile(filepath: string) {
    let content = fs.readFileSync(filepath, 'utf-8');
    const original = content;

    // Remove BRAND replacements from code={...} blocks
    // We will just do a hacky regex specifically for AvatarDoc and CardDoc code strings
    content = content.replace(/src=\{\`https:\/\/api\.dicebear\.com\/7\.x\/notionists\/svg\?seed=\$\{BRAND\.engineer\.firstName\}\`\}/g, 'src="https://api.dicebear.com/7.x/notionists/svg?seed=Hanif"');
    content = content.replace(/src=\{\`https:\/\/api\.dicebear\.com\/7\.x\/notionists\/svg\?seed=\$\{BRAND\.founder\.name\}\`\}/g, 'src="https://api.dicebear.com/7.x/notionists/svg?seed=Nadia Kirana"');

    // For CardDoc.tsx
    content = content.replace(/placeholder=\{BRAND\.founder\.name\}/g, 'placeholder="Nadia Kirana"');

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
