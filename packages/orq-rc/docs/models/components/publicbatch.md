# PublicBatch

## Example Usage

```typescript
import { PublicBatch } from "@orq-ai/node/models/components";

let value: PublicBatch = {
  completionWindow: "<value>",
  createdAt: 429736,
  endpoint: "<value>",
  id: "<id>",
  inputFileId: "<id>",
  object: "<value>",
  requestCounts: {
    completed: 940548,
    failed: 456617,
    total: 233211,
  },
  status: "cancelled",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `cancelledAt`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | Time the batch finished cancelling, in Unix seconds.                                       |
| `cancellingAt`                                                                             | *number*                                                                                   | :heavy_minus_sign:                                                                         | Time cancellation was requested, in Unix seconds.                                          |
| `completedAt`                                                                              | *number*                                                                                   | :heavy_minus_sign:                                                                         | Time the batch completed, in Unix seconds.                                                 |
| `completionWindow`                                                                         | *string*                                                                                   | :heavy_check_mark:                                                                         | Time window the batch runs in, always 24h.                                                 |
| `createdAt`                                                                                | *number*                                                                                   | :heavy_check_mark:                                                                         | Creation time, in Unix seconds.                                                            |
| `endpoint`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | Endpoint each line of the input file is sent to.                                           |
| `errorFileId`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | ID of the JSONL file holding per-line errors, when any line failed.                        |
| `errors`                                                                                   | [components.PublicBatchErrors](../../models/components/publicbatcherrors.md)               | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `expiredAt`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | Time the batch expired, in Unix seconds.                                                   |
| `expiresAt`                                                                                | *number*                                                                                   | :heavy_minus_sign:                                                                         | Time the batch expires, in Unix seconds.                                                   |
| `failedAt`                                                                                 | *number*                                                                                   | :heavy_minus_sign:                                                                         | Time the batch failed, in Unix seconds.                                                    |
| `finalizingAt`                                                                             | *number*                                                                                   | :heavy_minus_sign:                                                                         | Time the batch began assembling its result files, in Unix seconds.                         |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Batch identifier.                                                                          |
| `inProgressAt`                                                                             | *number*                                                                                   | :heavy_minus_sign:                                                                         | Time the batch started running, in Unix seconds.                                           |
| `inputFileId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | ID of the uploaded JSONL input file.                                                       |
| `metadata`                                                                                 | Record<string, *string*>                                                                   | :heavy_minus_sign:                                                                         | Metadata supplied at creation.                                                             |
| `model`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | Model resolved for the batch.                                                              |
| `object`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | Object type, always batch.                                                                 |
| `outputFileId`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | ID of the JSONL file holding successful responses, set once the batch completes.           |
| `requestCounts`                                                                            | [components.PublicBatchRequestCounts](../../models/components/publicbatchrequestcounts.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [components.PublicBatchStatus](../../models/components/publicbatchstatus.md)               | :heavy_check_mark:                                                                         | Current batch status.                                                                      |
| `usage`                                                                                    | [components.PublicBatchUsage](../../models/components/publicbatchusage.md)                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |