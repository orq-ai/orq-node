# ReplayAuditLogDeliveriesRequest

## Example Usage

```typescript
import { ReplayAuditLogDeliveriesRequest } from "@orq-ai/node/models/components";

let value: ReplayAuditLogDeliveriesRequest = {
  from: new Date("2025-06-06T18:08:41.668Z"),
  to: new Date("2024-04-28T13:36:20.327Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Required. Start of the window (inclusive).                                                    |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Required. End of the window (exclusive). The window may span at most 31 days.                 |