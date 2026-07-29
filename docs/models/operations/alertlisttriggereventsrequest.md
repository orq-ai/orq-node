# AlertListTriggerEventsRequest

## Example Usage

```typescript
import { AlertListTriggerEventsRequest } from "@orq-ai/node/models/operations";

let value: AlertListTriggerEventsRequest = {
  alertId: "<id>",
  triggerId: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `alertId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | Alert the trigger belongs to.                                                                    |
| `triggerId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | Trigger whose events to list.                                                                    |
| `limit`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | Page size, 1-200. Unset uses the server default (25).                                            |
| `startingAfter`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | Cursor for forward pagination. Set to the `event_id` of the last<br/> item from the previous page. |
| `endingBefore`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | Cursor for backward pagination. Set to the `event_id` of the first<br/> item from the previous page. |