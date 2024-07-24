module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'index.html','*.css'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': ["error",{
      "singleQuote": false,
      "trailingComma": "all",
      "printWidth": 80, // Set max line length (should match ESLint max-len)
      "tabWidth": 2,
      "semi": true,
    
    },
    { usePrettierrc: false, excludedFiles:["node_modules","dist"] },
  ],
    quotes: ['warn', 'double'],
    'react/display-name': ['off'],
  },
}
