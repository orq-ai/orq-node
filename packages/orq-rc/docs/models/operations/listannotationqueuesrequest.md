# ListAnnotationQueuesRequest

## Example Usage

```typescript
import { ListAnnotationQueuesRequest } from "@orq-ai/node/models/operations";

let value: ListAnnotationQueuesRequest = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `limit`                                                                                        | *number*                                                                                       | :heavy_minus_sign:                                                                             | Optional. Number of annotation queues to return. Defaults to 10 and must be between 1 and 200. |
| `startingAfter`                                                                                | *string*                                                                                       | :heavy_minus_sign:                                                                             | Cursor for forward pagination. Set to the `_id` of the last item from the previous page.       |
| `endingBefore`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | Cursor for backward pagination. Set to the `_id` of the first item from the previous page.     |
| `search`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | Optional. Case-insensitive substring match on the annotation queue display name.               |
| `updatedBy`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | Optional. Comma-separated account IDs; returns queues last updated by any of them.             |