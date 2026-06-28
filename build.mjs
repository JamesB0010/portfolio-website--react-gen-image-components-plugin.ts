import { build } from 'esbuild';

const shared = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  target: 'node18',
  sourcemap: true,
  logLevel: 'info',
  external: ['webpack', 'fast-glob', 'fs']
};

await Promise.all([
  build({ ...shared, format: 'esm', outfile: 'dist/index.js' }),
  build({ ...shared, format: 'cjs', outfile: 'dist/index.cjs' })
]);
