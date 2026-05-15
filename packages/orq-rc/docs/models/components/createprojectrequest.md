# CreateProjectRequest

## Example Usage

```typescript
import { CreateProjectRequest } from "@orq-ai/node/models/components";

let value: CreateProjectRequest = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `name`                                                            | *string*                                                          | :heavy_minus_sign:                                                | Project name. Names must be non-empty and at most 128 characters. |
| `teams`                                                           | *string*[]                                                        | :heavy_minus_sign:                                                | Team identifiers to associate with the project.                   |