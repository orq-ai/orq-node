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

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `type`                         | *"tokens"*                     | :heavy_check_mark:             | N/A                            |
| `tokensProcessed`              | *number*                       | :heavy_check_mark:             | The number of tokens processed |