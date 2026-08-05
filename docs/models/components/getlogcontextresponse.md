# GetLogContextResponse

## Example Usage

```typescript
import { GetLogContextResponse } from "@orq-ai/node/models/components";

let value: GetLogContextResponse = {
  anchor: {},
  before: [
    {},
  ],
  after: [],
  hasMoreBefore: true,
  hasMoreAfter: true,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `anchor`                                                            | [components.Log](../../models/components/log.md)                    | :heavy_check_mark:                                                  | Log is the canonical wire representation of an otel_logs row.       |
| `before`                                                            | [components.Log](../../models/components/log.md)[]                  | :heavy_check_mark:                                                  | Matching records earlier than the anchor, ordered oldest to newest. |
| `after`                                                             | [components.Log](../../models/components/log.md)[]                  | :heavy_check_mark:                                                  | Matching records later than the anchor, ordered oldest to newest.   |
| `hasMoreBefore`                                                     | *boolean*                                                           | :heavy_check_mark:                                                  | N/A                                                                 |
| `hasMoreAfter`                                                      | *boolean*                                                           | :heavy_check_mark:                                                  | N/A                                                                 |