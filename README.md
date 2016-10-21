# eslint-plugin-eslint-hackmud

eslint plugin for [Hackmud](https://www.hackmud.com/) files

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-eslint-hackmud`:

```
$ npm install eslint-plugin-eslint-hackmud --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-eslint-hackmud` globally.

## Usage

Add `eslint-hackmud` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix.
Add `eslint-hackmud/hackmud` to the env section of your `.eslintrc` configuration file. 

```json
{
    "plugins": [ "eslint-hackmud" ],
    "env": { "eslint-hackmud/hackmud": true }
}
```
