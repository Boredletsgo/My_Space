import { copyFile, writeFile } from 'node:fs/promises'
import { fileURLToPath, URL } from 'node:url'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))

// GitHub Pages serves 404.html for unknown paths; serving the SPA shell there
// lets client-side routes like /blog/:slug survive a hard refresh.
await copyFile(`${dist}index.html`, `${dist}404.html`)

// Stops GitHub Pages' Jekyll pipeline from dropping files that start with "_".
await writeFile(`${dist}.nojekyll`, '')

console.log('postbuild: wrote 404.html and .nojekyll')
