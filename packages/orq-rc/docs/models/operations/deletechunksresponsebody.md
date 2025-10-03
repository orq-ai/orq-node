# DeleteChunksResponseBody

Chunks deletion result

## Example Usage

```typescript
import { DeleteChunksResponseBody } from "@orq-ai/node/models/operations";

let value: DeleteChunksResponseBody = {
  deletedCount: 6613.28,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `deletedCount`                           | *number*                                 | :heavy_check_mark:                       | Number of chunks successfully deleted    |
| `failedIds`                              | *string*[]                               | :heavy_minus_sign:                       | Array of chunk IDs that failed to delete |