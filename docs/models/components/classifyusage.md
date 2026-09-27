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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `inputCost`                                                                                                    | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Cost (USD) of input tokens. Present when billing was computed for this request.                                |
| `inputTokens`                                                                                                  | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The number of input tokens processed.                                                                          |
| `outputCost`                                                                                                   | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Cost (USD) of output tokens. 0 for typesafe/jev-latest. Present when billing was computed for this request.    |
| `outputTokens`                                                                                                 | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The number of output tokens generated. Free for typesafe/jev-latest, billed at the model rate for chat models. |
| `totalCost`                                                                                                    | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Total cost (USD) of the request. Present when billing was computed for this request.                           |