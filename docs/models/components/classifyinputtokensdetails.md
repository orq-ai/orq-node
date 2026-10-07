# ClassifyInputTokensDetails

## Example Usage

```typescript
import { ClassifyInputTokensDetails } from "@orq-ai/node/models/components";

let value: ClassifyInputTokensDetails = {
  cacheWriteTokens: 774762,
  cachedTokens: 514778,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `cacheWriteTokens`             | *number*                       | :heavy_check_mark:             | Input tokens written to cache. |
| `cachedTokens`                 | *number*                       | :heavy_check_mark:             | Input tokens read from cache.  |