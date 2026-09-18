# ClassifyUsage

## Example Usage

```typescript
import { ClassifyUsage } from "@orq-ai/node/models/components";

let value: ClassifyUsage = {
  inputTokens: 974886,
  outputTokens: 493605,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `inputCost`                                                                                             | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Cost (USD) of input tokens. Present when billing was computed for this request.                         |
| `inputTokens`                                                                                           | *number*                                                                                                | :heavy_check_mark:                                                                                      | The number of input tokens processed.                                                                   |
| `outputCost`                                                                                            | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Cost (USD) of output tokens, always 0 for classify. Present when billing was computed for this request. |
| `outputTokens`                                                                                          | *number*                                                                                                | :heavy_check_mark:                                                                                      | The number of output tokens generated. Not billed.                                                      |
| `totalCost`                                                                                             | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Total cost (USD) of the request. Present when billing was computed for this request.                    |