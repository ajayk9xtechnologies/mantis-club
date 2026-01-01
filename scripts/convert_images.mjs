import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.join(__dirname, '..');
const SEARCH_DIRS = ['app', 'public'];
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

async function getFiles(dir) {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return files.flat();
}

async function convertImages() {
    console.log('Starting image conversion...');

    for (const dir of SEARCH_DIRS) {
        const fullDir = path.join(ROOT_DIR, dir);
        try {
            await fs.access(fullDir);
        } catch {
            console.warn(`Directory ${dir} does not exist, skipping.`);
            continue;
        }

        const files = await getFiles(fullDir);

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (EXTENSIONS.includes(ext)) {
                const newFile = file.replace(new RegExp(`${ext}$`), '.webp');

                try {
                    await sharp(file)
                        .webp({ quality: 80 })
                        .toFile(newFile);
                    console.log(`Converted: ${path.relative(ROOT_DIR, file)} -> ${path.relative(ROOT_DIR, newFile)}`);
                } catch (err) {
                    console.error(`Failed to convert ${file}:`, err);
                }
            }
        }
    }

    console.log('Conversion complete!');
}

convertImages();
