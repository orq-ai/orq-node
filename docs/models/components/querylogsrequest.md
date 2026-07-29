# QueryLogsRequest

## Example Usage

```typescript
import { QueryLogsRequest } from "@orq-ai/node/models/components";

let value: QueryLogsRequest = {
  oql: "<value>",
  from: new Date("2025-11-17T01:48:31.355Z"),
  to: new Date("2024-07-31T10:50:53.407Z"),
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `oql`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | OQL query string, e.g.<br/> `fetch logs \| filter severity_number > 10 \| filter body contains "error"`. |
| `limit`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | Maximum rows to return; a `\| limit N` pipeline command takes precedence.                          |
| `from`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `to`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `pageToken`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Opaque cursor for pagination.                                                                      |