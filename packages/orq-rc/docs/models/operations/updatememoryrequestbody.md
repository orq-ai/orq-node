# UpdateMemoryRequestBody

## Example Usage

```typescript
import { UpdateMemoryRequestBody } from "@orq-ai/node/models/operations";

let value: UpdateMemoryRequestBody = {
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