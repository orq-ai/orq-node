# ListBatchesRequestCounts

The request counts for different statuses within the batch.

## Example Usage

```typescript
import { ListBatchesRequestCounts } from "@orq-ai/node/models/operations";

let value: ListBatchesRequestCounts = {
  total: 527483,
  completed: 250486,
  failed: 525633,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `total`                                                   | *number*                                                  | :heavy_check_mark:                                        | Total number of requests in the batch.                    |
| `completed`                                               | *number*                                                  | :heavy_check_mark:                                        | Number of requests that have been completed successfully. |
| `failed`                                                  | *number*                                                  | :heavy_check_mark:                                        | Number of requests that have failed.                      |