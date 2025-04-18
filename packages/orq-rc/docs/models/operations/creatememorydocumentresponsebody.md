# CreateMemoryDocumentResponseBody

Memory document successfully created.

## Example Usage

```typescript
import { CreateMemoryDocumentResponseBody } from "@orq-ai/node/models/operations";

let value: CreateMemoryDocumentResponseBody = {
  id: "<id>",
  memoryId: "<id>",
  storeId: "<id>",
  text: "<value>",
  created: "<value>",
  updated: "<value>",
  workspaceId: "<id>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `memoryId`               | *string*                 | :heavy_check_mark:       | N/A                      |
| `storeId`                | *string*                 | :heavy_check_mark:       | N/A                      |
| `text`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `created`                | *string*                 | :heavy_check_mark:       | N/A                      |
| `updated`                | *string*                 | :heavy_check_mark:       | N/A                      |
| `createdById`            | *string*                 | :heavy_minus_sign:       | N/A                      |
| `updatedById`            | *string*                 | :heavy_minus_sign:       | N/A                      |
| `workspaceId`            | *string*                 | :heavy_check_mark:       | N/A                      |
| `tags`                   | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |