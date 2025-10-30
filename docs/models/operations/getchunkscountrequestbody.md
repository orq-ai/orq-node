# GetChunksCountRequestBody

## Example Usage

```typescript
import { GetChunksCountRequestBody } from "@orq-ai/node/models/operations";

let value: GetChunksCountRequestBody = {};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `q`                                         | *string*                                    | :heavy_minus_sign:                          | Search query to find chunks by text content |
| `enabled`                                   | *boolean*                                   | :heavy_minus_sign:                          | Filter chunks by enabled status             |
| `status`                                    | *string*                                    | :heavy_minus_sign:                          | Filter chunks by processing status          |