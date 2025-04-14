# GetAllMemoriesData

## Example Usage

```typescript
import { GetAllMemoriesData } from "@orq-ai/node/models/operations";

let value: GetAllMemoriesData = {
  id: "<id>",
  entityId: "<id>",
  created: "<value>",
  updated: "<value>",
  storeId: "<id>",
  tags: {
    "key": "<value>",
  },
  workspaceId: "<id>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `entityId`               | *string*                 | :heavy_check_mark:       | N/A                      |
| `created`                | *string*                 | :heavy_check_mark:       | N/A                      |
| `updated`                | *string*                 | :heavy_check_mark:       | N/A                      |
| `createdById`            | *string*                 | :heavy_minus_sign:       | N/A                      |
| `updatedById`            | *string*                 | :heavy_minus_sign:       | N/A                      |
| `storeId`                | *string*                 | :heavy_check_mark:       | N/A                      |
| `tags`                   | Record<string, *string*> | :heavy_check_mark:       | N/A                      |
| `workspaceId`            | *string*                 | :heavy_check_mark:       | N/A                      |