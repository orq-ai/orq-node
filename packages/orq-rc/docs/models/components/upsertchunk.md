# UpsertChunk

## Example Usage

```typescript
import { UpsertChunk } from "@orq-ai/node/models/components";

let value: UpsertChunk = {
  text: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `text`                                           | *string*                                         | :heavy_check_mark:                               | The text content of the chunk                    |
| `embedding`                                      | *number*[]                                       | :heavy_minus_sign:                               | N/A                                              |
| `metadata`                                       | Record<string, *components.UpsertChunkMetadata*> | :heavy_minus_sign:                               | Metadata of the chunk                            |