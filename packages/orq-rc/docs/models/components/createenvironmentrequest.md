# CreateEnvironmentRequest

## Example Usage

```typescript
import { CreateEnvironmentRequest } from "@orq-ai/node/models/components";

let value: CreateEnvironmentRequest = {
  slug: "<value>",
  displayName: "Mittie_Rogahn21",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `slug`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `displayName`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `description`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `projectId`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `sharing`                                                                                           | [components.Sharing](../../models/components/sharing.md)                                            | :heavy_minus_sign:                                                                                  | Sharing controls which projects in the workspace may use this entity and<br/> what they may do with it. |