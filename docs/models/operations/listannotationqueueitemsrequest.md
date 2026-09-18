# ListAnnotationQueueItemsRequest

## Example Usage

```typescript
import { ListAnnotationQueueItemsRequest } from "@orq-ai/node/models/operations";

let value: ListAnnotationQueueItemsRequest = {
  annotationQueueId: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `annotationQueueId`                                                                        | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `limit`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | Optional. Number of items to return. Defaults to 10 and must be between 1 and 200.         |
| `startingAfter`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | Cursor for forward pagination. Set to the `_id` of the last item from the previous page.   |
| `endingBefore`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | Cursor for backward pagination. Set to the `_id` of the first item from the previous page. |