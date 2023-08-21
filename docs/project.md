---
outline: [2, 3]
---

# 创建或导入项目

## 从头开始创建项目

**Serein** 提供了命令 `init` 或 `i` 来帮助您从头初始化一个由 **Serein** 管理的项目。

如果您希望从头开始制作 ScriptAPI 资源包，请选择这种方式创建项目，因为 **Serein** 创建的项目是相当标准且始于维护的！

使用方法如下：

```bash
serein init
```

执行命令后 **Serein** 将会交互式地询问您关于项目的信息（如名称、版本、依赖包等），然后将为您生成一套项目的模板与构建工具。

### 采用默认设置

您也可以采用默认设置来快速生成项目，这样生成的项目除了项目结构还会附带最新版的 `@minecraft/server` 依赖：

```bash
serein init -y
```

### 项目结构

在新建的项目中会包含以下文件：

```
├── node_modules
├── behavior_packs
│   ├── manifest.json
│   └── pack_icon.png (将会根据资源包名称的 hash 随机生成)
├── resource_packs (可选)
│   ├── manifest.json
│   └── pack_icon.png (将会根据资源包名称的 hash 随机生成)
├── scripts
│   └── main.js/ts (或者用户指定的 entry 文件)
├── package.json
├── gulpfile.js (自动构建流程有关文件)
├── tsconfig.json (仅选择 Typescript 语言时)
├── .serein.json (Serein 的信息文件)
└── .mcattributes (禁用 vscode 官方插件的警告)

```

## 从现有的项目导入

::: warning
当前本功能测试较少，欢迎各位 ScriptAPI 开发者使用自己的项目测试并提供您的测试反馈！
:::

**Serein** 提供了命令 `adapt` 与 `a` 来适配到现有项目。

### 先决条件

我们对导入 **Serein** 的项目有这样几点提醒：

-   ❯ 项目的行为包文件夹 (即官方文档中的 `behavior_packs`) 不要作为资源包的顶层，这对打包工具的适配来说是 <font color="red">地狱级别的</font> ！

    比如这样的文件布局就是不合法的（在资源包的顶层文件夹）：

    ```
    ├── manifest.json
    ├── package.json
    └── scripts
    ```

    如果你不想让最后打包出来的玩意里面附带了一整套 `node_modules` 和 `package.json`，最好赶快扔掉这种混乱的布局。

    我们认为比较理想的资源包布局是这样的：

    ```
    ├── behavior_packs
    │   ├── manifest.json
    │   └── scripts
    └── package.json
    ```

-   ❯ 没有拥有自己编写的 **gulpfile**

    如果您曾经阅读过 [微软的官方 starter 文章](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptinggettingstarted)，那可能已经学习了 **gulp** 工具的使用，并且已经根据自己的需求独自添加了一些内容 ~~（如果使用了但是没动过 `gulpfile.js` 的话是没关系的，我们的 `gulpfile.js` 比原版强的多了 XD）~~，那么下面的内容就需要注意了。

    这种情况下 **Serein** 生成的新 `gulpfile.js` 可能会覆盖您之前的编写的文件。

    幸运的是如果已有 `gulpfile.js`，**Serein** 将会询问你是否覆盖并可以帮助您备份，您可以再根据自己的情况将之前的功能添加到新的 `gulpfile.js` 中（我们的 `gulpfile.js` 比官方的更加适于编辑）。

### 导入流程

执行下面的命令：

```bash
serein adapt
```

接下来只要根据交互流程给出自己的包体信息即可，如果需要填写路径，请务必填写相对于当前路径的相对路径。

流程完毕后，**Serein** 将会在目录下生成一个 `.serein.json` 文件，有了它就代表该项目可以正常使用 **Serein** 了！

### 行为说明

**Serein** 可能还会在适配项目时做出以下行为，请关注这些行为是否会影响您：

-   ❯ 将 `package.json` 中项目的 `type` 属性改为 `module`。
-   ❯ 将 `package.json` 中 `depencies` 里已存在的 `@minecraft` 开头的依赖及自动打包相关的依赖迁移到 `devDepencies` 中。
-   ❯ 删除您行为包目录中 `manifest.json` 文件的注释。
