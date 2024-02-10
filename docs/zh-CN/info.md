---
outline: [2, 3]
---

# 配置文件功能

**Serein** 在每个项目中都会创建一个 `.serein.json` 文件，用户可以自行修改其中的一些内容来拓展自己的使用。

格式如下：

```json
{
	"language": "ts" | "js", // 项目使用的语言
	"res": false | true, // 是否有 resource_packs
	"name": "foo", // 项目的名称
	"behPath": "behavior_packs/", // behavior_packs 的路径
	"resPath": "resource_packs/", // resource_packs 的路径（如果有）
	"scriptsPath": "scripts/", // 脚本文件夹的路径
	"behManifestPath": "behavior_packs/manifest.json", // behavior_packs 中 manifest.json 的路径
	"resManifestPath": "resource_packs/manifest.json", // behavior_packs 中 manifest.json 的路径（如果有）
	"mc_preview": false, // 是否使用 mc_preview（仅 Windows 生效）
	"output": "build", // 构建的输出目录
	"mc_dir": null, // 强制定向的 Minecraft 目录，默认为 null
	"esbuild": {}, // esbuild 构建的附加选项
	"tsconfig": {} // ts 编译时的附加选项
}
```
