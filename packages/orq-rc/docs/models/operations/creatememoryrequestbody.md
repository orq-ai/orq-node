# CreateMemoryRequestBody

## Example Usage

```typescript
import { CreateMemoryRequestBody } from "@orq-ai/node/models/operations";

let value: CreateMemoryRequestBody = {
  entityId: "<id>",
  tags: {
    "key": "<value>",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `entityId`               | *string*                 | :heavy_check_mark:       | N/A                      |
| `tags`                   | Record<string, *string*> | :heavy_check_mark:       | N/A                      |