# eslint-config-voxproduct

Shared eslint config for Vox Product.

## Install

**1.** Install the peer dependencies:

```shell
npm i -D eslint eslint-plugin-html eslint-plugin-import eslint-plugin-promise
```

**2.** Add the following line to your `package.json` file under `devDependencies`:

```javascript
"devDependencies": {
    // ...
    "eslint-config-voxproduct": "git+ssh://git@github.com/voxmedia/eslint-config-voxproduct.git"
}
```

**3.** Tell npm to download the module

```shell
npm update eslint-config-voxproduct
```

**4.** Add the config to your `.eslintrc` file:

```javascript
{
  "extends": "voxproduct"
}
```