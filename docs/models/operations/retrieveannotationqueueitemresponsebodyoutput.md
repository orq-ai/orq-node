# RetrieveAnnotationQueueItemResponseBodyOutput

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemResponseBodyOutput } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemResponseBodyOutput = {
  object: "list",
  data: [
    {
      object: "embedding",
      embedding: [
        1329.03,
        3595.72,
        1986,
      ],
      index: 7875.54,
    },
  ],
  model: "Durango",
  usage: {
    promptTokens: 9306.97,
    totalTokens: 2509.06,
  },
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `object`                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemResponseBodyObject](../../models/operations/retrieveannotationqueueitemresponsebodyobject.md)                               | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `data`                                                                                                                                                             | [operations.ResponseBodyData](../../models/operations/responsebodydata.md)[]                                                                                       | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `model`                                                                                                                                                            | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | ID of the model to used.                                                                                                                                           |
| `usage`                                                                                                                                                            | [operations.RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesUsage](../../models/operations/retrieveannotationqueueitemresponsebodyannotationqueuesusage.md) | :heavy_check_mark:                                                                                                                                                 | The usage information for the request.                                                                                                                             |