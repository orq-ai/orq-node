# RetrieveAnnotationQueueItemMessage1

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemMessage1 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemMessage1 = {
  role: "expected_output",
  toolCalls: [
    {
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                             | [operations.RetrieveAnnotationQueueItemMessageRole](../../models/operations/retrieveannotationqueueitemmessagerole.md)             | :heavy_check_mark:                                                                                                                 | The role of the prompt message                                                                                                     |
| `content`                                                                                                                          | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `toolCalls`                                                                                                                        | [operations.RetrieveAnnotationQueueItemMessageToolCalls](../../models/operations/retrieveannotationqueueitemmessagetoolcalls.md)[] | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |