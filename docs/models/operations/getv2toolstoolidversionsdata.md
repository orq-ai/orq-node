# GetV2ToolsToolIdVersionsData

## Example Usage

```typescript
import { GetV2ToolsToolIdVersionsData } from "@orq-ai/node/models/operations";

let value: GetV2ToolsToolIdVersionsData = {
  id: "<id>",
  createdAt: "1705590981001",
  updatedAt: "1735663858100",
  updatedById: "<id>",
  version: "<value>",
  checksum: "<value>",
  entityType: "<value>",
  entityId: "<id>",
  data: {},
  workspaceId: "<id>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `id`                  | *string*              | :heavy_check_mark:    | N/A                   |
| `createdAt`           | *string*              | :heavy_check_mark:    | N/A                   |
| `updatedAt`           | *string*              | :heavy_check_mark:    | N/A                   |
| `createdById`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `updatedById`         | *string*              | :heavy_check_mark:    | N/A                   |
| `version`             | *string*              | :heavy_check_mark:    | N/A                   |
| `description`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `checksum`            | *string*              | :heavy_check_mark:    | N/A                   |
| `entityType`          | *string*              | :heavy_check_mark:    | N/A                   |
| `entityId`            | *string*              | :heavy_check_mark:    | N/A                   |
| `data`                | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `workspaceId`         | *string*              | :heavy_check_mark:    | N/A                   |