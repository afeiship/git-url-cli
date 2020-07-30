# get started
> 开发的步骤小记录一下。

## steps
1. 添加 bin/index.js
2. 添加 到 package.json
   ```json
    "bin": {
      "guc": "./bin/index.js"
    },
   ```
3. npm link 让这个命令可以直接访问 `guc`
