# GetEvalsRequest

## Example Usage

```typescript
import { GetEvalsRequest } from "@orq-ai/node/models/operations";

let value: GetEvalsRequest = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `limit`                                               | *number*                                              | :heavy_minus_sign:                                    | Page size, 1-200. Unset uses the server default (10). |
| `startingAfter`                                       | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `endingBefore`                                        | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `search`                                              | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `sort`                                                | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `projectId`                                           | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |