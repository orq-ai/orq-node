# Usage1

The usage information for the OCR run counted as pages processed

## Example Usage

```typescript
import { Usage1 } from "@orq-ai/node/models/operations";

let value: Usage1 = {
  type: "pages",
  pagesProcessed: 462237,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | *"pages"*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `pagesProcessed`                                                                                 | *number*                                                                                         | :heavy_check_mark:                                                                               | The number of pages processed                                                                    |
| `inputCost`                                                                                      | *number*                                                                                         | :heavy_minus_sign:                                                                               | Cost (USD) attributed to input processing. Present when billing was computed for this response.  |
| `outputCost`                                                                                     | *number*                                                                                         | :heavy_minus_sign:                                                                               | Cost (USD) attributed to output processing. Present when billing was computed for this response. |
| `totalCost`                                                                                      | *number*                                                                                         | :heavy_minus_sign:                                                                               | Total cost (USD) of the response. Present when billing was computed for this response.           |