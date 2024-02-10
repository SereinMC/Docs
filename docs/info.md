---
outline: [2, 3]
---

# Configuration File Features

**Serein** creates a `.serein.json` file in each project, allowing developers to modify its contents to extend their usage.

The format is as follows:

```json
{
	"language": "ts" | "js", // The language used by the project
	"res": false | true, // Whether resource_packs are used
	"name": "foo", // The name of the project
	"behPath": "behavior_packs/", // The path to behavior_packs
	"resPath": "resource_packs/", // The path to resource_packs (if used)
	"scriptsPath": "scripts/", // The path to the scripts folder
	"behManifestPath": "behavior_packs/manifest.json", // The path to manifest.json in behavior_packs
	"resManifestPath": "resource_packs/manifest.json", // The path to manifest.json in resource_packs (if used)
	"mc_preview": false, // Whether to use mc_preview (only effective on Windows)
	"output": "build", // The output directory for builds
	"mc_dir": null, // The Minecraft directory to forcibly direct to, default is null
	"esbuild": {}, // Additional options for esbuild builds
	"tsconfig": {} // Additional options for TypeScript compilation
}
```
