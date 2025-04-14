# UpdateSessionSessionsUsage

## Example Usage

```typescript
import { UpdateSessionSessionsUsage } from "@orq-ai/node/models/operations";

let value: UpdateSessionSessionsUsage = {
  promptTokens: 2872.23,
  completionTokens: 5544.03,
  totalTokens: 86.03,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `promptTokens`                     | *number*                           | :heavy_check_mark:                 | Total input tokens of the session  |
| `completionTokens`                 | *number*                           | :heavy_check_mark:                 | Total output tokens of the session |
| `totalTokens`                      | *number*                           | :heavy_check_mark:                 | Total tokens of the session        |