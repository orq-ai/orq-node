# ProjectScope

Project authorization scope. Single-project or all-projects.
 Multi-project use cases are served by minting per-project keys or by
 using an all-projects key with `restricted` mode.

## Example Usage

```typescript
import { ProjectScope } from "@orq-ai/node/models/components";

let value: ProjectScope = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `all`                                                                | [components.AllProjects](../../models/components/allprojects.md)     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `single`                                                             | [components.SingleProject](../../models/components/singleproject.md) | :heavy_minus_sign:                                                   | N/A                                                                  |