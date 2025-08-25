# RequestCounts

The request counts for different statuses within the batch.

## Example Usage

```typescript
import { RequestCounts } from "@orq-ai/node/models/operations";

let value: RequestCounts = {
  total: 283750,
  completed: 483846,
  failed: 468674,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `total`                                                   | *number*                                                  | :heavy_check_mark:                                        | Total number of requests in the batch.                    |
| `completed`                                               | *number*                                                  | :heavy_check_mark:                                        | Number of requests that have been completed successfully. |
| `failed`                                                  | *number*                                                  | :heavy_check_mark:                                        | Number of requests that have failed.                      |