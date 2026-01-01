import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.join(__dirname, '..');
// User requested "assets images and gallery". 
// app/assets/images includes gallery folder, so targeting app/assets/images recursively covers both.
const SEARCH_DIRS = ['app/assets/images', 'public'];
const DELETE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

async function getFiles(dir) {
    let dirents;
    try {
        dirents = await fs.readdir(dir, { withFileTypes: true });
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.warn(`Directory not found: ${dir}`);
            return [];
        }
        throw err;
    }

    const files = await Promise.all(dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return files.flat();
}

async function cleanupImages() {
    console.log('Starting image cleanup...');

    let deletedCount = 0;

    for (const dir of SEARCH_DIRS) {
        const fullDir = path.join(ROOT_DIR, dir);
        const files = await getFiles(fullDir);

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (DELETE_EXTENSIONS.includes(ext)) {
                try {
                    await fs.unlink(file);
                    console.log(`Deleted: ${path.relative(ROOT_DIR, file)}`);
                    deletedCount++;
                } catch (err) {
                    console.error(`Failed to delete ${file}:`, err);
                }
            }
        }
    }

    console.log(`Cleanup complete! Deleted ${deletedCount} files.`);
}

cleanupImages();
