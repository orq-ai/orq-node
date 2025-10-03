# ListChunksPaginatedRequestBody

## Example Usage

```typescript
import { ListChunksPaginatedRequestBody } from "@orq-ai/node/models/operations";

let value: ListChunksPaginatedRequestBody = {};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `q`                                         | *string*                                    | :heavy_minus_sign:                          | Search query to find chunks by text content |
| `enabled`                                   | *boolean*                                   | :heavy_minus_sign:                          | Filter chunks by enabled status             |
| `status`                                    | *string*                                    | :heavy_minus_sign:                          | Filter chunks by processing status          |
| `limit`                                     | *number*                                    | :heavy_minus_sign:                          | N/A                                         |
| `page`                                      | *number*                                    | :heavy_minus_sign:                          | N/A                                         |