# AlertListTriggersRequest

## Example Usage

```typescript
import { AlertListTriggersRequest } from "@orq-ai/node/models/operations";

let value: AlertListTriggersRequest = {
  alertId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `alertId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | Alert whose triggers to list.                                                                      |
| `limit`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | Page size, 1-200. Unset uses the server default (25).                                              |
| `startingAfter`                                                                                    | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Cursor for forward pagination. Set to the `trigger_id` of the last<br/> item from the previous page. |
| `endingBefore`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Cursor for backward pagination. Set to the `trigger_id` of the<br/> first item from the previous page. |