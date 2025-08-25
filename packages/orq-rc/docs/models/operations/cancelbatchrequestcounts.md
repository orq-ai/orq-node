# CancelBatchRequestCounts

The request counts for different statuses within the batch.

## Example Usage

```typescript
import { CancelBatchRequestCounts } from "@orq-ai/node/models/operations";

let value: CancelBatchRequestCounts = {
  total: 335666,
  completed: 134757,
  failed: 419615,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `total`                                                   | *number*                                                  | :heavy_check_mark:                                        | Total number of requests in the batch.                    |
| `completed`                                               | *number*                                                  | :heavy_check_mark:                                        | Number of requests that have been completed successfully. |
| `failed`                                                  | *number*                                                  | :heavy_check_mark:                                        | Number of requests that have failed.                      |