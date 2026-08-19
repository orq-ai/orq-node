# Chunk

## Example Usage

```typescript
import { Chunk } from "@orq-ai/node/models/components";

let value: Chunk = {
  id: "<id>",
  text: "<value>",
  index: 370259,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `text`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `index`                                                              | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `metadata`                                                           | [components.ChunkMetadata](../../models/components/chunkmetadata.md) | :heavy_minus_sign:                                                   | N/A                                                                  |