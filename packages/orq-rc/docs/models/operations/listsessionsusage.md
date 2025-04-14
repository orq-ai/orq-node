# ListSessionsUsage

## Example Usage

```typescript
import { ListSessionsUsage } from "@orq-ai/node/models/operations";

let value: ListSessionsUsage = {
  promptTokens: 925.06,
  completionTokens: 6802.01,
  totalTokens: 7975.49,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `promptTokens`                     | *number*                           | :heavy_check_mark:                 | Total input tokens of the session  |
| `completionTokens`                 | *number*                           | :heavy_check_mark:                 | Total output tokens of the session |
| `totalTokens`                      | *number*                           | :heavy_check_mark:                 | Total tokens of the session        |