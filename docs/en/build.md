---
outline: [2, 3]
---

# Building and Packaging Resource Packs

## Building Resource Packs

**Serein** provides the command `build` or `b` to build the code of the current project and generate a resource pack.

You can do this in the project root directory:

```bash
serein build
```

Then **Serein** will use [esbuild](https://esbuild.github.io/) and [tsc](https://www.typescriptlang.org/) (when the language is TypeScript) to build the code and output the resource pack to the `out` directory specified in the configuration file.

### Default Compilation Options

**Serein** will compile or build the files according to the following default configuration:

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

### Custom Compilation Configuration

You can add or replace compilation options or change the default `out` directory by following the method described in the [Configuration File Features](/info.html) section.

## Packaging Resource Packs

**Serein** provides the command `pack` or `p` to build and package the resource pack into a `.mcpack` file.

You just need to execute in the project root directory:

```bash
serein pack
```

This will build and package a `.mcpack` in the `out` directory specified in the configuration file.

The building part is consistent with the section described in [Building Resource Packs](#building-resource-packs).

## Deploying Resource Packs

::: warning

This feature is only natively supported on Windows/Linux(mcpelauncher). If you wish to use this feature on other platforms, please configure the value of `mc_dir` according to the method described in the [Configuration File Features](/info.html) section to guide this command.

:::

**Serein** provides the command `deploy` or `d` to deploy the project.

You can execute in the root directory:

```bash
serein deploy
```

This will build and transfer the current resource pack for deployment in the game directory.

The building part is consistent with the section described in [Building Resource Packs](#building-resource-packs).

## Hot Deploying Resource Packs

**Serein** provides the command `watch` or `w` for hot deploying the project.

You can execute in the root directory:

```bash
serein watch
```

To start the hot deployment process, the resource pack will be automatically built and deployed to the game directory when modifications to the behavior pack folder, resource pack folder, or script folder are detected.

The building part is consistent with the section described in [Building Resource Packs](#building-resource-packs).

The deployment part is consistent with the section described in [Deploying Resource Packs](#deploying-resource-packs).
