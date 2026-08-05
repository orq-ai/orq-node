# RetrieveAnnotationQueueItemInputTools

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemInputTools } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemInputTools = {
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                             | [operations.RetrieveAnnotationQueueItemInputAnnotationQueuesResponseType](../../models/operations/retrieveannotationqueueiteminputannotationqueuesresponsetype.md) | :heavy_minus_sign:                                                                                                                                                 | The type of the tool. Currently, only function is supported.                                                                                                       |
| `function`                                                                                                                                                         | [operations.RetrieveAnnotationQueueItemInputFunction](../../models/operations/retrieveannotationqueueiteminputfunction.md)                                         | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |