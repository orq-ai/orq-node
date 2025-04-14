# CreateChunkRequestBody

## Example Usage

```typescript
import { CreateChunkRequestBody } from "@orq-ai/node/models/operations";

let value: CreateChunkRequestBody = {
  chunks: [
    {
      text: "<value>",
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `chunks`                                                      | [operations.Chunks](../../models/operations/chunks.md)[]      | :heavy_check_mark:                                            | Array of chunks to create. Maximum of 100 chunks per request. |