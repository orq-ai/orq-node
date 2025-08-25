# RetrieveBatchRequestCounts

The request counts for different statuses within the batch.

## Example Usage

```typescript
import { RetrieveBatchRequestCounts } from "@orq-ai/node/models/operations";

let value: RetrieveBatchRequestCounts = {
  total: 199354,
  completed: 152126,
  failed: 145453,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `total`                                                   | *number*                                                  | :heavy_check_mark:                                        | Total number of requests in the batch.                    |
| `completed`                                               | *number*                                                  | :heavy_check_mark:                                        | Number of requests that have been completed successfully. |
| `failed`                                                  | *number*                                                  | :heavy_check_mark:                                        | Number of requests that have failed.                      |