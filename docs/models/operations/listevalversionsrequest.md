# ListEvalVersionsRequest

## Example Usage

```typescript
import { ListEvalVersionsRequest } from "@orq-ai/node/models/operations";

let value: ListEvalVersionsRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `id`                                                  | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `limit`                                               | *number*                                              | :heavy_minus_sign:                                    | Page size, 1-200. Unset uses the server default (10). |
| `startingAfter`                                       | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `endingBefore`                                        | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |