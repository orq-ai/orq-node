# Environment

## Example Usage

```typescript
import { Environment } from "@orq-ai/node/models/components";

let value: Environment = {
  id: "<id>",
  slug: "<value>",
  displayName: "Lucio_Feil28",
  description: "times brightly eek with though busily than",
  createdAt: new Date("2025-05-22T18:05:23.237Z"),
  createdById: "<id>",
  updatedAt: new Date("2024-09-21T08:41:58.649Z"),
  updatedById: "<id>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | Unique environment ID in env_<ulid> form.                                                           |
| `slug`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | Immutable workspace-unique environment slug.                                                        |
| `displayName`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | Workspace-unique display name.                                                                      |
| `description`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `createdAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `createdById`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `updatedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `updatedById`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `projectId`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Project that owns this environment.                                                                 |
| `sharing`                                                                                           | [components.Sharing](../../models/components/sharing.md)                                            | :heavy_minus_sign:                                                                                  | Sharing controls which projects in the workspace may use this entity and<br/> what they may do with it. |