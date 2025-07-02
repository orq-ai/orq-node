# Chunks

## Example Usage

```typescript
import { Chunks } from "@orq-ai/node/models/operations";

let value: Chunks = {
  text: "<value>",
  index: 6043.54,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `text`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The text content of the chunk                                                |
| `index`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | The position index of this chunk in the sequence                             |
| `metadata`                                                                   | [operations.ChunkTextMetadata](../../models/operations/chunktextmetadata.md) | :heavy_minus_sign:                                                           | N/A                                                                          |