# ChunksServiceUpdateRequest

## Example Usage

```typescript
import { ChunksServiceUpdateRequest } from "@orq-ai/node/models/components";

let value: ChunksServiceUpdateRequest = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `text`                                                          | *string*                                                        | :heavy_minus_sign:                                              | The text content of the chunk                                   |
| `embedding`                                                     | *number*[]                                                      | :heavy_minus_sign:                                              | N/A                                                             |
| `metadata`                                                      | Record<string, *components.ChunksServiceUpdateRequestMetadata*> | :heavy_minus_sign:                                              | Metadata of the chunk                                           |