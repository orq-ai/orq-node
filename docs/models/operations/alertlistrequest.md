# AlertListRequest

## Example Usage

```typescript
import { AlertListRequest } from "@orq-ai/node/models/operations";

let value: AlertListRequest = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `limit`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | Page size, 1-200. Unset uses the server default (25).                                            |
| `startingAfter`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | Cursor for forward pagination. Set to the `alert_id` of the last<br/> item from the previous page. |
| `endingBefore`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | Cursor for backward pagination. Set to the `alert_id` of the first<br/> item from the previous page. |
| `projectId`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | Restrict results to one project.                                                                 |