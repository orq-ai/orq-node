# ListBatchesResponseBody

Batches listed (empty array if none).

## Example Usage

```typescript
import { ListBatchesResponseBody } from "@orq-ai/node/models/operations";

let value: ListBatchesResponseBody = {
  data: [],
  hasMore: false,
  object: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `data`                                                             | [components.PublicBatch](../../models/components/publicbatch.md)[] | :heavy_check_mark:                                                 | Batches on the current page.                                       |
| `firstId`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | ID of the first batch on the page.                                 |
| `hasMore`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | Whether further batches exist beyond this page.                    |
| `lastId`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | ID of the last batch on the page.                                  |
| `object`                                                           | *string*                                                           | :heavy_check_mark:                                                 | Object type, always list.                                          |