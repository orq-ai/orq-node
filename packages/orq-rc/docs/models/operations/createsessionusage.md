# CreateSessionUsage

## Example Usage

```typescript
import { CreateSessionUsage } from "@orq-ai/node/models/operations";

let value: CreateSessionUsage = {
  promptTokens: 9636.13,
  completionTokens: 2741.91,
  totalTokens: 9831.66,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `promptTokens`                     | *number*                           | :heavy_check_mark:                 | Total input tokens of the session  |
| `completionTokens`                 | *number*                           | :heavy_check_mark:                 | Total output tokens of the session |
| `totalTokens`                      | *number*                           | :heavy_check_mark:                 | Total tokens of the session        |