# Usage2

The usage information for the OCR run counted as tokens processed

## Example Usage

```typescript
import { Usage2 } from "@orq-ai/node/models/operations";

let value: Usage2 = {
  type: "tokens",
  tokensProcessed: 841682,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | *"tokens"*                                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `tokensProcessed`                                                                                | *number*                                                                                         | :heavy_check_mark:                                                                               | The number of tokens processed                                                                   |
| `inputCost`                                                                                      | *number*                                                                                         | :heavy_minus_sign:                                                                               | Cost (USD) attributed to input processing. Present when billing was computed for this response.  |
| `outputCost`                                                                                     | *number*                                                                                         | :heavy_minus_sign:                                                                               | Cost (USD) attributed to output processing. Present when billing was computed for this response. |
| `totalCost`                                                                                      | *number*                                                                                         | :heavy_minus_sign:                                                                               | Total cost (USD) of the response. Present when billing was computed for this response.           |