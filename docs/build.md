---
outline: [2, 3]
---

# 构建和打包资源包

## 构建资源包

**Serein** 提供了命令 `build` 或 `b` 来对当前项目的代码进行构建并生成资源包。

您可以在项目根目录这样做：

```bash
serein build
```

接下来 **Serein** 将会使用 [esbuild](https://esbuild.github.io/) 与 [tsc](https://www.typescriptlang.org/)（语言为 Typescript 时）构建代码，并将资源包输出到配置文件指定的 `out` 目录中。

### 默认编译选项

**Serein** 将会按照以下默认配置编译或构建文件：

<details><summary>esbuild</summary>

```json
{
	"bundle": true,
	"sourcemap": true,
	"external": [
		"@minecraft/server-ui",
		"@minecraft/server",
		"@minecraft/server-net",
		"@minecraft/server-gametest",
		"@minecraft/server-admin",
		"@minecraft/server-editor",
		"@minecraft/vanilla-data"
	],
	"format": "esm"
}
```

</details>

<details><summary>tsconfig</summary>

```json
{
	"module": "es2020",
	"moduleResolution": "node",
	"lib": ["es2020", "dom"],
	"strict": true,
	"target": "es2020"
}
```

</details>

### 自定义编译配置

您可以按照 [配置文件功能](/info.html) 一节的方法增加或替换编译选项或更改默认的 `out` 目录。

## 打包资源包

**Serein** 提供了命令 `pack` 或 `p` 来执行构建并将资源包打包为 `.mcpack` 文件。

您只需要在项目根目录执行：

```bash
serein pack
```

就可以在配置文件指定的 `out` 目录构建一份打包后的 `.mcpack`。

构建部分与 [构建资源包](#构建资源包) 一节所描述的一致。

## 部署资源包

::: warning

该功能仅支持在 Windows/Linux(mcpelauncher) 有原生支持，如果您希望在其他平台使用该功能，请根据 [配置文件功能](/info.html) 一节的方法配置 `mc_dir` 的值来引导该命令。

:::

**Serein** 提供了命令 `deploy` 或 `d` 来部署项目。

您可以在根目录执行：

```bash
serein deploy
```

将目前的资源包构建并转移到游戏目录中部署。

构建部分与 [构建资源包](#构建资源包) 一节所描述的一致。

## 热部署资源包

**Serein** 提供了命令 `watch` 或 `w` 来热部署项目。

您可以在根目录执行：

```bash
serein watch
```

来启动热部署流程，当监听到行为包文件夹、资源包文件夹或脚本文件夹被修改后，资源包将会自动被构建并部署到游戏目录。

构建部分与 [构建资源包](#构建资源包) 一节所描述的一致。

部署部分与 [部署资源包](#部署资源包) 一节所描述的一致。
