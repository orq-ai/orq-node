# RetrieveAnnotationQueueItemMessageAnnotationQueues1

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemMessageAnnotationQueues1 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemMessageAnnotationQueues1 = {
  role: "assistant",
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

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                                       | [operations.RetrieveAnnotationQueueItemMessageAnnotationQueuesResponse200Role](../../models/operations/retrieveannotationqueueitemmessageannotationqueuesresponse200role.md) | :heavy_check_mark:                                                                                                                                                           | The role of the prompt message                                                                                                                                               |
| `content`                                                                                                                                                                    | *string*                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `toolCalls`                                                                                                                                                                  | [operations.RetrieveAnnotationQueueItemMessageAnnotationQueuesToolCalls](../../models/operations/retrieveannotationqueueitemmessageannotationqueuestoolcalls.md)[]           | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |