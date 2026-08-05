# RetrieveAnnotationQueueItemMessageAnnotationQueuesToolCalls

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemMessageAnnotationQueuesToolCalls } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemMessageAnnotationQueuesToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                           | *string*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `index`                                                                                                                                                        | *number*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `type`                                                                                                                                                         | [operations.RetrieveAnnotationQueueItemMessageAnnotationQueuesType](../../models/operations/retrieveannotationqueueitemmessageannotationqueuestype.md)         | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `function`                                                                                                                                                     | [operations.RetrieveAnnotationQueueItemMessageAnnotationQueuesFunction](../../models/operations/retrieveannotationqueueitemmessageannotationqueuesfunction.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |