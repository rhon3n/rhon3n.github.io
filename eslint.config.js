import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ['dist/', 'build/', 'node_modules/', 'src/**/*.js'],
  },
];
