# PublicBatchRequestCounts

## Example Usage

```typescript
import { PublicBatchRequestCounts } from "@orq-ai/node/models/components";

let value: PublicBatchRequestCounts = {
  completed: 326112,
  failed: 875534,
  total: 531981,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `completed`                        | *number*                           | :heavy_check_mark:                 | Lines that completed successfully. |
| `failed`                           | *number*                           | :heavy_check_mark:                 | Lines that failed.                 |
| `total`                            | *number*                           | :heavy_check_mark:                 | Lines in the input file.           |