# resolve-from-fallback

[![Build status](https://img.shields.io/travis/imcuttle/resolve-from-fallback/master.svg?style=flat-square)](https://travis-ci.org/imcuttle/resolve-from-fallback)
[![Test coverage](https://img.shields.io/codecov/c/github/imcuttle/resolve-from-fallback.svg?style=flat-square)](https://codecov.io/github/imcuttle/resolve-from-fallback?branch=master)
[![NPM version](https://img.shields.io/npm/v/resolve-from-fallback.svg?style=flat-square)](https://www.npmjs.com/package/resolve-from-fallback)
[![NPM Downloads](https://img.shields.io/npm/dm/resolve-from-fallback.svg?style=flat-square&maxAge=43200)](https://www.npmjs.com/package/resolve-from-fallback)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

> Resolve the path of a module like `require.resolve()` but from some fallback path

## Installation

```bash
npm install resolve-from-fallback
# or use yarn
yarn add resolve-from-fallback
```

## Usage

```javascript
const resolveFromFallback = require('resolve-from-fallback')

const resolveLocal = (id) => resolveFromFallback([process.cwd(), __dirname], id)

resolveLocal('react') // resolve react path from `process.cwd()` or `__dirname`

resolveLocal('not_found') // Throw MODULE_NOT_FOUND error

resolveLocal.silent([process.cwd(), __dirname], 'not_found') // Return undefined
```

## Contributing

- Fork it!
- Create your new branch:  
  `git checkout -b feature-new` or `git checkout -b fix-which-bug`
- Start your magic work now
- Make sure npm test passes
- Commit your changes:  
  `git commit -am 'feat: some description (close #123)'` or `git commit -am 'fix: some description (fix #123)'`
- Push to the branch: `git push`
- Submit a pull request :)

## Authors

This library is written and maintained by imcuttle, <a href="mailto:imcuttle@163.com">imcuttle@163.com</a>.

## License

MIT - [imcuttle](https://github.com/imcuttle) 🐟
