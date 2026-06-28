import { build } from 'esbuild';

await build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  target: 'node18',
  format: 'cjs',
  outfile: 'dist/index.js',
  logLevel: 'info',
  sourcemap: true,
  external: ['webpack', 'fast-glob', 'fs']
});
