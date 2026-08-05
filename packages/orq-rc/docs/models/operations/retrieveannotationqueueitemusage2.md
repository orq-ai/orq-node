# RetrieveAnnotationQueueItemUsage2

The usage information for the OCR run counted as tokens processed

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemUsage2 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemUsage2 = {
  type: "tokens",
  tokensProcessed: 264843,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `type`                         | *"tokens"*                     | :heavy_check_mark:             | N/A                            |
| `tokensProcessed`              | *number*                       | :heavy_check_mark:             | The number of tokens processed |