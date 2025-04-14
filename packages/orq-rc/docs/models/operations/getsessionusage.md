# GetSessionUsage

## Example Usage

```typescript
import { GetSessionUsage } from "@orq-ai/node/models/operations";

let value: GetSessionUsage = {
  promptTokens: 3686.07,
  completionTokens: 2806.79,
  totalTokens: 7786.06,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `promptTokens`                     | *number*                           | :heavy_check_mark:                 | Total input tokens of the session  |
| `completionTokens`                 | *number*                           | :heavy_check_mark:                 | Total output tokens of the session |
| `totalTokens`                      | *number*                           | :heavy_check_mark:                 | Total tokens of the session        |