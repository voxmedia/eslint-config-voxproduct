# eslint-config-voxproduct

Shared eslint config for Vox Product.

## Install

**1.** Add the following line to your `package.json` file under `devDependencies`:

```javascript
"devDependencies": {
    // ...
    "eslint-config-voxproduct": "git+ssh://git@github.com/voxmedia/eslint-config-voxproduct.git"
}
```

**2.** Tell npm to download the module

```shell
npm update eslint-config-voxproduct
```

**3.** Add the config to your `.eslintrc` file:

```javascript
{
  "extends": "voxproduct"
}
```