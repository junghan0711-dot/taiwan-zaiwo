import { build, createServer } from 'vite';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const configFile = fileURLToPath(new URL('../vite.pages.config.ts', import.meta.url));
await build({ configFile });
const server = await createServer({ configFile, server: { middlewareMode: true }, appType: 'custom' });
try {
  const { render } = await server.ssrLoadModule('/entry-server.tsx');
  const target = new URL('../docs/index.html', import.meta.url);
  const html = await readFile(target, 'utf8');
  await writeFile(target, html.replace('<!--ssr-outlet-->', render()));
  await writeFile(new URL('../docs/.nojekyll', import.meta.url), '');
} finally { await server.close(); }
