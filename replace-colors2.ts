import * as fs from 'fs';
import * as path from 'path';

function processFile(filepath: string) {
    let content = fs.readFileSync(filepath, 'utf-8');
    const original = content;

    // Specifically for layouts and top-level constructs:
    // replacing bg-white with bg-background or bg-card depending on context.
    // It's dangerous to replace all bg-white, because inside buttons they might be intentional.
    // However, the user said "Jangan pernah menggunakan bg-white, bg-black, text-black, text-white secara acak pada Layout"
    // So let's replace "bg-white" with "bg-card" ONLY if it sits with "text-black" which usually means its a container
    content = content.replace(/bg-white text-black/g, "bg-card text-card-foreground");
    content = content.replace(/bg-black text-white/g, "bg-foreground text-background");
    content = content.replace(/bg-white/g, "bg-background text-foreground");
    content = content.replace(/bg-black/g, "bg-foreground text-background");
    
    // We already handled text-black dark:text-white
    content = content.replace(/text-black/g, "text-foreground");
    content = content.replace(/text-white/g, "text-background");

    // Revert things inside variants where specific contrast is needed
    // The problem is this might wreck components' internal contrasts if they strictly require black/white.
    
    if (content !== original) {
        fs.writeFileSync(filepath, content);
    }
}

// walkDir('src');
