# UpdateProjectRequest

## Example Usage

```typescript
import { UpdateProjectRequest } from "@orq-ai/node/models/components";

let value: UpdateProjectRequest = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                                     | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Project ID to update.                                                                                           |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | New project name. Omit to keep the current name.                                                                |
| `teams`                                                                                                         | *string*[]                                                                                                      | :heavy_minus_sign:                                                                                              | Replacement list of team identifiers associated with the project.<br/> Leave empty to remove all team associations. |
| `description`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | New project description. Omit to keep the current description.                                                  |