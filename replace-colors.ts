import * as fs from 'fs';
import * as path from 'path';

function processFile(filepath: string) {
    let content = fs.readFileSync(filepath, 'utf-8');
    const original = content;

    content = content.replace(/bg-\[#ccff00\]/g, "bg-primary");
    content = content.replace(/text-\[#ccff00\]/g, "text-primary");
    content = content.replace(/border-\[#ccff00\]/g, "border-primary");
    content = content.replace(/ring-\[#ccff00\]/g, "ring-primary");
    content = content.replace(/outline-\[#ccff00\]/g, "outline-primary");
    
    content = content.replace(/bg-\[#8a2be2\]/g, "bg-secondary");
    content = content.replace(/text-\[#8a2be2\]/g, "text-secondary");
    content = content.replace(/border-\[#8a2be2\]/g, "border-secondary");
    
    content = content.replace(/bg-\[#ff5500\]/g, "bg-accent");
    content = content.replace(/text-\[#ff5500\]/g, "text-accent");
    content = content.replace(/border-\[#ff5500\]/g, "border-accent");
    
    content = content.replace(/dark:bg-\[#0a192f\]/g, "");
    content = content.replace(/dark:bg-\[#112240\]/g, "");
    content = content.replace(/bg-\[#0a192f\]/g, "bg-background text-foreground");
    content = content.replace(/bg-\[#112240\]/g, "bg-card text-card-foreground");
    content = content.replace(/bg-\[#FDFBD4\]/g, "bg-background");
    content = content.replace(/bg-\[#fdfbd4\]/g, "bg-background");

    content = content.replace(/bg-white dark:bg-card/g, "bg-card");
    content = content.replace(/bg-white dark:bg-\[#112240\]/g, "bg-card");
    content = content.replace(/text-black dark:text-white/g, "text-foreground");
    content = content.replace(/text-black dark:text-foreground/g, "text-foreground");

    if (content !== original) {
        fs.writeFileSync(filepath, content);
        console.log(`Updated ${filepath}`);
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

walkDir('src');
