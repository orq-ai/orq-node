# CreateSessionSessionsUsage

## Example Usage

```typescript
import { CreateSessionSessionsUsage } from "@orq-ai/node/models/operations";

let value: CreateSessionSessionsUsage = {
  promptTokens: 9668.58,
  completionTokens: 4265.97,
  totalTokens: 2642.9,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `promptTokens`                     | *number*                           | :heavy_check_mark:                 | Total input tokens of the session  |
| `completionTokens`                 | *number*                           | :heavy_check_mark:                 | Total output tokens of the session |
| `totalTokens`                      | *number*                           | :heavy_check_mark:                 | Total tokens of the session        |