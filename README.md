# eslint-plugin-hackmud

eslint plugin for [Hackmud](https://www.hackmud.com/) files

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-hackmud`:

```
$ npm i eslint-plugin-hackmud --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-hackmud` globally.

## Usage

Add `hackmud` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix.
Add `hackmud/hackmud` to the env section of your `.eslintrc` configuration file.

```json
{
    "plugins": [ "hackmud" ],
    "env": { "hackmud/hackmud": true }
}
```
