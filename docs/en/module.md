# Module Management

## Switching Module Versions

**Serein** provides the `switch` or `s` command to switch the version of the current module.

You only need to execute in the root directory:

```bash
serein switch
```

This allows you to interactively switch the version of dependencies.

### Behavior Explanation

**Serein** might also perform the following actions when switching versions, please be aware of these actions as they might affect you:

-   ❯ Remove comments from the `manifest.json` file in your behavior pack directory.

## Adding and Removing Module Dependencies

**Serein** provides the `module` or `m` command to add or remove module dependencies for the current project.

You only need to execute in the root directory:

```bash
serein module
```

This allows you to interactively manage the module dependencies of the current project.

### Behavior Explanation

**Serein** might also perform the following actions when adding or removing module dependencies, please be aware of these actions as they might affect you:

-   ❯ Remove comments from the `manifest.json` file in your behavior pack directory.
