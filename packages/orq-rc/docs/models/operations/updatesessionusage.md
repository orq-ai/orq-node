# UpdateSessionUsage

## Example Usage

```typescript
import { UpdateSessionUsage } from "@orq-ai/node/models/operations";

let value: UpdateSessionUsage = {
  promptTokens: 9549.2,
  completionTokens: 6266.75,
  totalTokens: 3589.95,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `promptTokens`                     | *number*                           | :heavy_check_mark:                 | Total input tokens of the session  |
| `completionTokens`                 | *number*                           | :heavy_check_mark:                 | Total output tokens of the session |
| `totalTokens`                      | *number*                           | :heavy_check_mark:                 | Total tokens of the session        |