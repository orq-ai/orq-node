# ListBatchesResponseBody

A list of paginated Batch objects.

## Example Usage

```typescript
import { ListBatchesResponseBody } from "@orq-ai/node/models/operations";

let value: ListBatchesResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      object: "batch",
      endpoint: "<value>",
      errors: {},
      inputFileId: "<id>",
      completionWindow: "<value>",
      status: "<value>",
      outputFileId: "<id>",
      errorFileId: "<id>",
      createdAt: 85965,
      inProgressAt: 199785,
      expiresAt: 187747,
      finalizingAt: 669214,
      completedAt: 573914,
      failedAt: 117441,
      expiredAt: 806512,
      cancellingAt: 742163,
      cancelledAt: 512851,
      requestCounts: {
        total: 69517,
        completed: 188348,
        failed: 626734,
      },
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `object`                                                                     | [operations.ListBatchesObject](../../models/operations/listbatchesobject.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [operations.ListBatchesData](../../models/operations/listbatchesdata.md)[]   | :heavy_check_mark:                                                           | N/A                                                                          |
| `hasMore`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |